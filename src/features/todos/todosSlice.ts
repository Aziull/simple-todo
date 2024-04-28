import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit'
export interface Todo {
    id: string;
    title: string;
    isDeleted: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTask = {
                id: nanoid(),
                title: action.payload,
                isDeleted: false,
            };
            state.todos = [...state.todos, newTask];
            console.log('state', state.todos);
            
        },
        editTodo: (state, action: PayloadAction<{ id: string; newText: string }>) => {
            const { id, newText } = action.payload;
            const task = state.todos.find(task => task.id === id);
            if (task) {
                task.title = newText;
            }
        },
        toggleDeleteTodo: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(task => task.id === action.payload);
            if (task) {
                task.isDeleted = !task.isDeleted;
            }
        }
    },

});

export const { addTodo, editTodo, toggleDeleteTodo } = todosSlice.actions;
export default todosSlice.reducer;