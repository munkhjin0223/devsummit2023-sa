import { Prisma } from '@prisma/client';
import prisma from '.';

export async function getTodos() {
  const todos = await prisma.todo.findMany();

  return { todos };
}

export async function createTodo(todo: Prisma.TodoCreateInput) {
  try {
    const todoFromDB = await prisma.todo.create({ data: todo });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(id: string, todo: Prisma.TodoUpdateInput) {
  try {
    const todoFromDB = await prisma.todo.update({ where: { id }, data: todo });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function deleteTodo(id: string) {
  try {
    const todoFromDB = await prisma.todo.delete({ where: { id } });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: string) {
  try {
    const todoFromDB = await prisma.todo.findUnique({ where: { id } });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}
