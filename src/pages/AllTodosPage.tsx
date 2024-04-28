import { TodoList } from "../components/TodoList";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { Outlet, useLocation } from "react-router";

export const AllTodosPage = () => {
    const location = useLocation();
    const todos = useAppSelector((state: RootState) => state.todo.todos);

    const paramsCount = location.pathname.split('/').length;
    return (<>
        {
            paramsCount === 2 ? <TodoList title='Всі' todos={todos} /> : <Outlet />
        }
    </>

    );
}
