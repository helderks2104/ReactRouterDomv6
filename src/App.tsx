import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Menu } from "./components/menu";
import { Posts } from "./components/posts";
import { Redirect } from "./components/Redirect";
import { NotFound } from "./components/NotFound";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          {/*     <Route path="/posts/:id" element={<Posts />} />  */}
          <Route path="/posts" element={<Posts />}>
            <Route path=":id" element={<Post />} />
          </Route>
          <Route path="/redirect" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
