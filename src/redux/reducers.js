import { createSlice, current } from "@reduxjs/toolkit";

import tasks from "../data/tasks.json";

export const initialState = { tasks, status: "all" };

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        createTask: (state, action) => {
            const newId = current(state.tasks).at(-1) ? current(state.tasks).at(-1) + 1 : 1;
            
        },
        changeCompeleted: (state, action) => {
            const oldTasks = current(state.tasks)
            const newTasks = oldTasks.map((task) => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            });

            state.tasks = newTasks
        },
        changeStatus: (state, action) => { },
        deleteTask: (state, action) => {
            const newTasks = current(state.tasks).filter((t) => t.id !== action.payload);

            state.tasks = newTasks;
        },
    },
});

export const {
    createTask,
    changeCompeleted,
    changeStatus,
    deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;