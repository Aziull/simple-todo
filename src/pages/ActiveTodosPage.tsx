import { TodoList } from "../components/TodoList";
import { useAppSelector } from "../app/hooks";
import { getActiveTodos } from "../features/todos/selectors";

export const ActiveTodosPage = () => {
    const todos = useAppSelector(getActiveTodos);

    return (
        <TodoList title='Активні' todos={todos} />
    );
}
