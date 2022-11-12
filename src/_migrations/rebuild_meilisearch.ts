import { setupMigration } from '_migrations/migration';
import { getEnvVars } from 'env';
import { MeiliSearch } from 'meilisearch';
import { mapSortableAttributes } from 'paradb-api-schema';
import { convertToMeilisearchMap, findMaps, MeilisearchMap } from 'services/maps/maps_repo';

(async () => {
  await setupMigration();

  const mapsResult = await findMaps();
  if (!mapsResult.success) {
    throw new Error(JSON.stringify(mapsResult.errors));
  }
  const { meilisearchHost, meilisearchKey } = getEnvVars();
  const client = new MeiliSearch({ host: meilisearchHost, apiKey: meilisearchKey });

  console.log('Deleting old indexes');
  await client.deleteIndexIfExists('maps');

  console.log('Creating new indexes');
  await client.waitForTask((await client.createIndex('maps')).taskUid);
  console.log('Getting index');
  const mapsIndex = await client.getIndex<MeilisearchMap>('maps');

  console.log('Setting up attribute fields');
  const updateRanking = await mapsIndex.updateRankingRules([
    'sort',
    'words',
    'typo',
    'proximity',
    'attribute',
    'exactness',
  ]);
  const updateSearch = await mapsIndex.updateSearchableAttributes([
    'title',
    'artist',
    'author',
    'description',
  ]);
  const updateFilters = await mapsIndex.updateFilterableAttributes([
    'artist',
    'author',
    'uploader',
  ]);

  const updateSorts = await mapsIndex.updateSortableAttributes([...mapSortableAttributes]);
  console.log('Adding data');
  const addData = await mapsIndex.addDocuments(
    mapsResult.value.map(m => convertToMeilisearchMap(m)),
    { primaryKey: 'id' },
  );

  await client.waitForTasks(
    [updateRanking, updateSearch, updateFilters, updateSorts, addData].map(t => t.taskUid),
  );
  console.log('Done!');
})();
