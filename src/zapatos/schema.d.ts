/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos (v4.0.3), and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2021 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 102 }

  /* === schema: public === */

  /* --- enums --- */


  /* --- tables --- */

  export namespace difficulties {
    export type Table = 'difficulties';
    export interface Selectable {
      /**
      * **difficulties.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id: string;
      /**
      * **difficulties.difficulty**
      * - `int4` in database
      * - Nullable, no default
      */
      difficulty: number | null;
      /**
      * **difficulties.difficulty_name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      difficulty_name: string;
    }
    export interface JSONSelectable {
      /**
      * **difficulties.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id: string;
      /**
      * **difficulties.difficulty**
      * - `int4` in database
      * - Nullable, no default
      */
      difficulty: number | null;
      /**
      * **difficulties.difficulty_name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      difficulty_name: string;
    }
    export interface Whereable {
      /**
      * **difficulties.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **difficulties.difficulty**
      * - `int4` in database
      * - Nullable, no default
      */
      difficulty?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **difficulties.difficulty_name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      difficulty_name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **difficulties.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **difficulties.difficulty**
      * - `int4` in database
      * - Nullable, no default
      */
      difficulty?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      /**
      * **difficulties.difficulty_name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      difficulty_name: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **difficulties.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **difficulties.difficulty**
      * - `int4` in database
      * - Nullable, no default
      */
      difficulty?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **difficulties.difficulty_name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      difficulty_name?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = never;
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = db.GenericSQLExpression | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Table | Whereable | Column;
    export type SQL = SQLExpression | SQLExpression[];
  }

  export namespace favorites {
    export type Table = 'favorites';
    export interface Selectable {
      /**
      * **favorites.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id: string;
      /**
      * **favorites.user_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      user_id: string;
      /**
      * **favorites.favorited_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      favorited_date: Date;
    }
    export interface JSONSelectable {
      /**
      * **favorites.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id: string;
      /**
      * **favorites.user_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      user_id: string;
      /**
      * **favorites.favorited_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      favorited_date: db.TimestampString;
    }
    export interface Whereable {
      /**
      * **favorites.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **favorites.user_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      user_id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **favorites.favorited_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      favorited_date?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **favorites.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **favorites.user_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      user_id: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **favorites.favorited_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      favorited_date: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **favorites.map_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      map_id?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **favorites.user_id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      user_id?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **favorites.favorited_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      favorited_date?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment>;
    }
    export type UniqueIndex = never;
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = db.GenericSQLExpression | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Table | Whereable | Column;
    export type SQL = SQLExpression | SQLExpression[];
  }

  export namespace maps {
    export type Table = 'maps';
    export interface Selectable {
      /**
      * **maps.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id: string;
      /**
      * **maps.submission_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      submission_date: Date;
      /**
      * **maps.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title: string;
      /**
      * **maps.artist**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      artist: string;
      /**
      * **maps.author**
      * - `varchar` in database
      * - Nullable, no default
      */
      author: string | null;
      /**
      * **maps.uploader**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      uploader: string;
      /**
      * **maps.description**
      * - `text` in database
      * - Nullable, no default
      */
      description: string | null;
      /**
      * **maps.album_art**
      * - `text` in database
      * - Nullable, no default
      */
      album_art: string | null;
      /**
      * **maps.complexity**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      complexity: number;
    }
    export interface JSONSelectable {
      /**
      * **maps.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id: string;
      /**
      * **maps.submission_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      submission_date: db.TimestampString;
      /**
      * **maps.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title: string;
      /**
      * **maps.artist**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      artist: string;
      /**
      * **maps.author**
      * - `varchar` in database
      * - Nullable, no default
      */
      author: string | null;
      /**
      * **maps.uploader**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      uploader: string;
      /**
      * **maps.description**
      * - `text` in database
      * - Nullable, no default
      */
      description: string | null;
      /**
      * **maps.album_art**
      * - `text` in database
      * - Nullable, no default
      */
      album_art: string | null;
      /**
      * **maps.complexity**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      complexity: number;
    }
    export interface Whereable {
      /**
      * **maps.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.submission_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      submission_date?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.artist**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      artist?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.author**
      * - `varchar` in database
      * - Nullable, no default
      */
      author?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.uploader**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      uploader?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.description**
      * - `text` in database
      * - Nullable, no default
      */
      description?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.album_art**
      * - `text` in database
      * - Nullable, no default
      */
      album_art?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **maps.complexity**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      complexity?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **maps.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **maps.submission_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      submission_date: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment;
      /**
      * **maps.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **maps.artist**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      artist: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **maps.author**
      * - `varchar` in database
      * - Nullable, no default
      */
      author?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **maps.uploader**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      uploader: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **maps.description**
      * - `text` in database
      * - Nullable, no default
      */
      description?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **maps.album_art**
      * - `text` in database
      * - Nullable, no default
      */
      album_art?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **maps.complexity**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      complexity: number | db.Parameter<number> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **maps.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **maps.submission_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      submission_date?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment>;
      /**
      * **maps.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **maps.artist**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      artist?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **maps.author**
      * - `varchar` in database
      * - Nullable, no default
      */
      author?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **maps.uploader**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      uploader?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **maps.description**
      * - `text` in database
      * - Nullable, no default
      */
      description?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **maps.album_art**
      * - `text` in database
      * - Nullable, no default
      */
      album_art?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **maps.complexity**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      complexity?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
    }
    export type UniqueIndex = 'maps_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = db.GenericSQLExpression | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Table | Whereable | Column;
    export type SQL = SQLExpression | SQLExpression[];
  }

  export namespace users {
    export type Table = 'users';
    export interface Selectable {
      /**
      * **users.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id: string;
      /**
      * **users.creation_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      creation_date: Date;
      /**
      * **users.account_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      account_status: string;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username: string;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.email_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      email_status: string;
      /**
      * **users.password**
      * - `bytea` in database
      * - `NOT NULL`, no default
      */
      password: Buffer;
      /**
      * **users.password_updated**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      password_updated: Date;
    }
    export interface JSONSelectable {
      /**
      * **users.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id: string;
      /**
      * **users.creation_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      creation_date: db.TimestampString;
      /**
      * **users.account_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      account_status: string;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username: string;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.email_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      email_status: string;
      /**
      * **users.password**
      * - `bytea` in database
      * - `NOT NULL`, no default
      */
      password: db.ByteArrayString;
      /**
      * **users.password_updated**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      password_updated: db.TimestampString;
    }
    export interface Whereable {
      /**
      * **users.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.creation_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      creation_date?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.account_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      account_status?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.email_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      email_status?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.password**
      * - `bytea` in database
      * - `NOT NULL`, no default
      */
      password?: (db.ByteArrayString | Buffer) | db.Parameter<(db.ByteArrayString | Buffer)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.ByteArrayString | Buffer) | db.Parameter<(db.ByteArrayString | Buffer)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.password_updated**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      password_updated?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **users.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.creation_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      creation_date: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment;
      /**
      * **users.account_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      account_status: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.email_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      email_status: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.password**
      * - `bytea` in database
      * - `NOT NULL`, no default
      */
      password: (db.ByteArrayString | Buffer) | db.Parameter<(db.ByteArrayString | Buffer)> | db.SQLFragment;
      /**
      * **users.password_updated**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      password_updated: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **users.id**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.creation_date**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      creation_date?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment>;
      /**
      * **users.account_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      account_status?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.email_status**
      * - `bpchar` in database
      * - `NOT NULL`, no default
      */
      email_status?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.password**
      * - `bytea` in database
      * - `NOT NULL`, no default
      */
      password?: (db.ByteArrayString | Buffer) | db.Parameter<(db.ByteArrayString | Buffer)> | db.SQLFragment | db.SQLFragment<any, (db.ByteArrayString | Buffer) | db.Parameter<(db.ByteArrayString | Buffer)> | db.SQLFragment>;
      /**
      * **users.password_updated**
      * - `timestamp` in database
      * - `NOT NULL`, no default
      */
      password_updated?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment>;
    }
    export type UniqueIndex = 'users_email_key' | 'users_pkey' | 'users_username_key';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = db.GenericSQLExpression | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Table | Whereable | Column;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* === cross-table types === */

  export type Table = difficulties.Table | favorites.Table | maps.Table | users.Table;
  export type Selectable = difficulties.Selectable | favorites.Selectable | maps.Selectable | users.Selectable;
  export type JSONSelectable = difficulties.JSONSelectable | favorites.JSONSelectable | maps.JSONSelectable | users.JSONSelectable;
  export type Whereable = difficulties.Whereable | favorites.Whereable | maps.Whereable | users.Whereable;
  export type Insertable = difficulties.Insertable | favorites.Insertable | maps.Insertable | users.Insertable;
  export type Updatable = difficulties.Updatable | favorites.Updatable | maps.Updatable | users.Updatable;
  export type UniqueIndex = difficulties.UniqueIndex | favorites.UniqueIndex | maps.UniqueIndex | users.UniqueIndex;
  export type Column = difficulties.Column | favorites.Column | maps.Column | users.Column;
  export type AllTables = [difficulties.Table, favorites.Table, maps.Table, users.Table];
  export type AllMaterializedViews = [];


  export type SelectableForTable<T extends Table> = {
    difficulties: difficulties.Selectable;
    favorites: favorites.Selectable;
    maps: maps.Selectable;
    users: users.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    difficulties: difficulties.JSONSelectable;
    favorites: favorites.JSONSelectable;
    maps: maps.JSONSelectable;
    users: users.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    difficulties: difficulties.Whereable;
    favorites: favorites.Whereable;
    maps: maps.Whereable;
    users: users.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    difficulties: difficulties.Insertable;
    favorites: favorites.Insertable;
    maps: maps.Insertable;
    users: users.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    difficulties: difficulties.Updatable;
    favorites: favorites.Updatable;
    maps: maps.Updatable;
    users: users.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    difficulties: difficulties.UniqueIndex;
    favorites: favorites.UniqueIndex;
    maps: maps.UniqueIndex;
    users: users.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    difficulties: difficulties.Column;
    favorites: favorites.Column;
    maps: maps.Column;
    users: users.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    difficulties: difficulties.SQL;
    favorites: favorites.SQL;
    maps: maps.SQL;
    users: users.SQL;
  }[T];

}
