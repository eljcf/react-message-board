import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

// ⭐ 从 localStorage 读取初始数据
function loadState() {
  try {
    const serialized = localStorage.getItem("reduxState");
    if (serialized === null) return undefined; // 没有存过
    return JSON.parse(serialized);
  } catch (e) {
    console.error("加载状态失败:", e);
    return undefined;
  }
}

// ⭐ 保存到 localStorage
function saveState(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("reduxState", serialized);
  } catch (e) {
    console.error("保存状态失败:", e);
  }
}

export const store = configureStore({
  reducer: { posts: postsReducer },
  preloadedState: loadState()  // 加载持久化的数据
});

// ⭐ 订阅 store，每次变化时保存
store.subscribe(() => {
  saveState(store.getState());
});
