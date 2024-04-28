import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Todo, toggleDeleteTodo } from '../../features/todos/todosSlice';
import './todoItem.css'

interface TodoItemProps {
    id: string;
    todo: Todo;
}

export function TodoItem({ id, todo }: TodoItemProps) {
    const dispatch = useDispatch();

    const handleToggleDelete = () => {
        dispatch(toggleDeleteTodo(id));
    };

    return (
        <div className="todo-item">
            <NavLink to={`/todos/${id}`} className="todo-link">{todo.title}</NavLink>
            <button
                onClick={handleToggleDelete}
                className={`todo-button ${todo.isDeleted ? 'restore' : 'delete'}`}
            >
                {todo.isDeleted ? 'Відновити' : 'Видалити'}
            </button>
        </div>
    );
}
