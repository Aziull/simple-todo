import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const selectAllTodos = (state: RootState) => state.todo.todos;

export const getTodoById = createSelector(
    [selectAllTodos, (_: RootState, todoId: string) => todoId],
    (todos, todoId) => todos.find(todo => todo.id === todoId)
);

export const getActiveTodos = createSelector(
    [selectAllTodos],
    (todos) => todos.filter(todo => !todo.isDeleted)
);


export const getDeletedTodos = createSelector(
    [selectAllTodos],
    (todos) => todos.filter(todo => todo.isDeleted)
);