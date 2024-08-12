import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Todo } from "../types";
//
// interface TodoState {
//   todos: Todo[];
// }
//
// const initialState: TodoState = {
//   todos: [],
// };
//
// const todosSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<Todo>) => {
//       state.todos.push(action.payload);
//     },
//     deleteTodo: (state, action: PayloadAction<number>) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });
//
// export const { addTodo, deleteTodo } = todosSlice.actions;
// export default todosSlice.reducer

export interface Task {
  id: number;
  text: string;
}

const initialState: Task[] = [];

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload });
      // state = [...state, { id: Date.now(), text: action.payload }];
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      //
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
