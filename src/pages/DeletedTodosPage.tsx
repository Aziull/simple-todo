import { useAppSelector } from "../app/hooks";
import { TodoList } from "../components/TodoList";
import { getDeletedTodos } from "../features/todos/selectors";

export const DeletedTodosPage = () => {
    const todos = useAppSelector(getDeletedTodos);
    return (
        <>
            <TodoList title='Видалені' todos={todos} />
        </>
    )
}