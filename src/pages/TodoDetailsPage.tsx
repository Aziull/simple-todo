import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { editTodo } from "../features/todos/todosSlice";
import { getTodoById } from "../features/todos/selectors";
import { RootState } from "../app/store";
import { TodoDetails } from "../components/todoDetails/TodoDetails";

export const TodoDetailsPage = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const todoId = location.pathname.split('/')[2] || '';
    const todo = useSelector((state: RootState) => getTodoById(state, todoId));

    console.log(todo, todoId, location);

    const update = (text: string) => {
        if (!todo) return;
        dispatch(editTodo({ id: todo.id, newText: text }));
        navigate('/active')
    }



    return (
        <TodoDetails todo={todo} save={update} />

    );
};