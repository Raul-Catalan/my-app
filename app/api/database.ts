import path from "path";
import sqlite3 from "sqlite3";
import { migrate } from "./migrations";

// path from "path" is a built in modules used for modifying and resolving file paths
// For Example, path.join('/users', 'indvidual', filename) -> /users/individual/text.txt
// process.cwd() is used to get the current working directory, this can change? works on unix and windows
const db_path = path.join(process.cwd(), "database.db");

export const db = new sqlite3.Database(
  db_path,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Successfully Connnected to Database: database.db");
    migrate();
  }
);
