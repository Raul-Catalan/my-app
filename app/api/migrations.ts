import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
        CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        );
      `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("tasks table created successfully.");
      }
    );
  });
};
