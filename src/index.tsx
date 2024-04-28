import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { DeletedTodosPage } from './pages/DeletedTodosPage';
import { TodoDetailsPage } from './pages/TodoDetailsPage';
import AddTodoPage from './pages/AddTodoPage';
import { ActiveTodosPage } from './pages/ActiveTodosPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import { Layout } from './layout/Layout';
import { AllTodosPage } from './pages/AllTodosPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: async () => redirect('/active'),
      },
      {
        path: "active",
        Component: ActiveTodosPage,
      },
      {
        path: "new",
        Component: AddTodoPage,
      },
      {
        path: "todos",
        Component: AllTodosPage,
        children: [
          {
            path: ":id",
            Component: TodoDetailsPage
          }
        ]
      },
      {
        path: "deleted",
        Component: DeletedTodosPage,
      },
    ]
  },

]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
