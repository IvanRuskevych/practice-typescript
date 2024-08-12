import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types.ts";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload });
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
