import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { useNavigate } from 'react-router';
import { TodoDetails } from '../components/todoDetails/TodoDetails';

const AddTodoPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (text: string) => {
    dispatch(addTodo(text))
    navigate('/active')
  };

  return (
    <>
      <TodoDetails save={handleSubmit} />
    </>

  );
};

export default AddTodoPage;