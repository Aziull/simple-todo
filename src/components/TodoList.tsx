import { TodoItem } from "./todoItem/TodoItem"
import { Todo } from "../features/todos/todosSlice"
import { EmptyTodos } from "./emptyTodos/EmptyTodos"
import React from "react"

export const TodoList = ({ title, todos }: { title: string, todos: Todo[] }) => {
    return (
        <>
            <h2>{`${title} TODO`}</h2>
            {!!todos.length ? Object.entries(todos).map(([_, todo]) => (
                <React.Fragment key={todo.id}>
                    <TodoItem id={todo.id} todo={todo} />
                </React.Fragment>
            )) : <EmptyTodos />
            }

        </>
    )
}