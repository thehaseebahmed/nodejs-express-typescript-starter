import ITodo from "@models/todos-model";
import db from "@repos/fake-db";

// Constants
const DEFAULT_PAGE_COUNT = Number(process.env.DEFAULT_PAGE_COUNT);

// Functions
async function createAsync() {}

async function deleteAsync() {}

async function readAsync(
  page: number = 1,
  count: number = DEFAULT_PAGE_COUNT
): Promise<ITodo[]> {
  const start = (page - 1) * count;
  const end = start + count;

  return db.todos.slice(start, end);
}

async function readOneAsync(id: number): Promise<ITodo> {
  const todo = db.todos.find((t) => t.id === id);
  if (!todo) {
    throw new Error();
  }

  return todo;
}

async function updateAsync() {}

// Exports
export default {
  createAsync,
  deleteAsync,
  readAsync,
  readOneAsync,
  updateAsync,
};
