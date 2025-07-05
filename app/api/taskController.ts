import { Database, Statement } from "sqlite";

class TaskController {
  constructor(private db: Database) {}

  async createTask(task: Task): Promise<Task> {
    const { title, desctription } = task;
    const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";
  }
}
