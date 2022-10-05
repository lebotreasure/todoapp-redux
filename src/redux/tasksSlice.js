import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;

            const todo = state.find((todo) => todo.id === id);
            todo.text = text;
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;