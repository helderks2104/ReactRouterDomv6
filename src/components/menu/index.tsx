import "./index.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            {/* Uso em conjunto com o  useLocation */}
            <Link to="/" state={"This is state from home"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Post</Link>
          </li>
          <li>
            <Link to="/posts/10">Posts 10</Link>
          </li>
          <li>
            <Link to="/redirect">Redirect</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
