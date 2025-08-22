import { useDispatch, useSelector } from "react-redux";
import { removePost, setFilter } from "../store/postsSlice";
import { Link } from "react-router-dom";

export default function PostList() {
  const { items, filter } = useSelector(s => s.posts);
  const dispatch = useDispatch();
  const show = items.filter(p => p.content.includes(filter));

  return (
    <div>
      <h2>留言列表</h2>

      <input
        placeholder="搜索内容"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        style={{ marginBottom: 12 }}
      />

      <ul style={{ paddingLeft: 16 }}>
        {show.map(p => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            {/* ⭐ 点击内容可进入详情 */}
            <Link to={`/post/${p.id}`}>
              {p.content.length > 20 ? p.content.slice(0, 20) + "..." : p.content || "(空)"}
            </Link>
            <span style={{ marginLeft: 8, opacity: .6 }}>
              {new Date(p.createdAt).toLocaleString()}
            </span>
            <button
              style={{ marginLeft: 8 }}
              onClick={() => dispatch(removePost(p.id))}
            >
              删除
            </button>
          </li>
        ))}
        {show.length === 0 && <i>暂无或无匹配</i>}
      </ul>

      <Link to="/new">去发布一条 →</Link>
    </div>
  );
}
