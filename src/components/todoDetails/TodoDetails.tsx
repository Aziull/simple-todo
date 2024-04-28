import { useEffect, useState } from "react";
import { Todo, toggleDeleteTodo } from "../../features/todos/todosSlice";
import './todoDetails.css';
import { useAppDispatch } from "../../app/hooks";

export type Props = {
    todo?: Todo;
    save: (text: string) => void;
}

export const TodoDetails = ({ todo, save }: Props) => {
    const [text, setText] = useState('');

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        setText('');
        save(text);
    };

    useEffect(() => {
        if (!todo) return;
        setText(todo.title);
    }, [todo])

    const toggleStatus = () => {
        if (!todo) return
        dispatch(toggleDeleteTodo(todo.id))
    }

    return (
        <>
            <h2>TODO</h2>
            <form id="todo-form" onSubmit={handleSubmit}>
                <textarea className="todo-textarea" value={text} onChange={e => setText(e.target.value)} placeholder="Опис TODO" />
                <br />
                <button type="submit" className="todo-save">Зберегти</button>
                {todo && !todo.isDeleted && <button type="button" onClick={toggleStatus} className="todo-delete">Видалити</button>}
                {todo && todo.isDeleted && <button type="button" onClick={toggleStatus} className="todo-restore">Відновити</button>}
            </form>
        </>
    );
};