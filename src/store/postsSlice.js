import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],     // 每条：{ id, content, createdAt }
  filter: ""     // 搜索关键字
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
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
    },
    // ⭐ 新增：编辑功能需要的 reducer
    updatePost(state, action) {
      const { id, content } = action.payload;
      const it = state.items.find(p => p.id === id);
      if (it) it.content = content;
    }
  }
});

// 这些要导出给组件用
export const { addPost, removePost, setFilter, updatePost } = postsSlice.actions;

// 默认导出 reducer，供 store 组合
export default postsSlice.reducer;
