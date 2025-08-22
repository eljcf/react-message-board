import { createSlice, nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],   // {id, content, createdAt}
    filter: ""   // 搜索关键字
  },
  reducers: {
    addPost: {
      prepare(content) {
        return { payload: { id: nanoid(), content, createdAt: Date.now() } };
      },
      reducer(state, action) {
        state.items.push(action.payload);
      }
    },
    removePost(state, action) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    }
  }
});

export const { addPost, removePost, setFilter } = postsSlice.actions;
export default postsSlice.reducer;
