import { useRouteError } from "react-router-dom";
import './errorPage.css'

export const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Ойой!</h1>
            <p>Виникла помилка</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage