import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../store/postsSlice";
import { useState } from "react";

export default function EditPost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const post = useSelector(s => s.posts.items.find(p => p.id === id));
  const [text, setText] = useState(post?.content || "");

  if (!post) {
    return (
      <div>
        <h2>未找到这条留言</h2>
        <Link to="/list">返回列表</Link>
      </div>
    );
  }

  const save = () => {
    const v = text.trim();
    if (!v) return;
    dispatch(updatePost({ id, content: v }));
    nav(`/post/${id}`);
  };

  return (
    <div>
      <h2>编辑留言</h2>
      <textarea
        rows={6}
        style={{ width: "100%", maxWidth: 520 }}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <button onClick={save}>保存</button>
        <Link to={`/post/${id}`}>取消</Link>
      </div>
    </div>
  );
}
