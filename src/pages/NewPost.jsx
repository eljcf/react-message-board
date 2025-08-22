import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/postsSlice";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = () => {
    const v = text.trim();
    if (!v) return;
    dispatch(addPost(v)); // 写入全局
    setText("");
    nav("/list");        // 发布后跳转列表
  };

  return (
    <div>
      <h2>发布留言</h2>
      <textarea
        rows={4}
        style={{ width: "100%", maxWidth: 520 }}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="写点什么……"
      />
      <div style={{ marginTop: 8 }}>
        <button onClick={submit}>提交</button>
      </div>
    </div>
  );
}
