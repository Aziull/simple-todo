import { Outlet, useNavigate } from "react-router"
import { NavLink } from "react-router-dom";

export const Layout = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={`/todos`} >Всі</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/active`}>Активні</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/deleted`}>Видалені</NavLink>
                        </li>
                        <li>
                            <button onClick={() => navigate('new')}>Сторити Нове TODO</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"><Outlet /></div>
        </>)
}