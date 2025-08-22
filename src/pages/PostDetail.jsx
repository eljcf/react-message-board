import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "../store/postsSlice";

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  // 在全局状态里按 id 找到对应留言
  const post = useSelector(s => s.posts.items.find(p => p.id === id));

  if (!post) {
    return (
      <div>
        <h2>未找到这条留言</h2>
        <Link to="/list">返回列表</Link>
      </div>
    );
  }

  const del = () => {
    dispatch(removePost(post.id));
    nav("/list");
  };

  return (
    <div>
      <h2>留言详情</h2>
      <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{post.content}</p>
      <p style={{ opacity: 0.6 }}>
        创建时间：{new Date(post.createdAt).toLocaleString()}
      </p>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={del}>删除</button>
        <Link to="/list">返回列表</Link>
      </div>
    </div>
  );
}
