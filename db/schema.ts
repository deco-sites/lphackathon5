
/**
* The code snippet below is an example.
*/

/**
* import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
});
*/


import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const newsletter = sqliteTable("newsletter", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  about_project: text("about_project").notNull(),
});
