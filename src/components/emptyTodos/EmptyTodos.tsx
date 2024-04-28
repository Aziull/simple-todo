import { Link } from "react-router-dom"
import './emptyTodos.css';

export const EmptyTodos = () => {
    return <div id="zero-state">
        Немає жодного TODO <Link to='/new' >Створіть свій перший TODO</Link>
    </div>
}