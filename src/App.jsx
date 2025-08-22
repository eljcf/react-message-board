import { Routes, Route, Link } from "react-router-dom";
import NewPost from "./pages/NewPost";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";

function Home() {
  return <h2>这是首页</h2>;
}
function About() {
  return <h2>这是关于页</h2>;
}

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",   // 水平居中
        minHeight: "100vh",         // 占满高度
        background: "#f5f5f5",      // 背景色
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 600,             // 限制内容宽度
          background: "#fff",        // 白色卡片背景
          padding: 20,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <Link to="/">首页</Link>
          <Link to="/new">发布留言</Link>
          <Link to="/list">留言列表</Link>
          <Link to="/about">关于</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/list" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/:id/edit" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}
