import { Routes, Route, Link } from "react-router-dom";
import NewPost from "./pages/NewPost";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail"; 
function Home() {
  return <h2>这是首页</h2>;
}

function About() {
  return <h2>这是关于页</h2>;
}

export default function App() {
 
  return (
    <div style={{ padding: 16 }}>
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
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
         <Route path="/post/:id" element={<PostDetail />} />  {/* ← 就是这条 */}
  <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </div>
  );
}
