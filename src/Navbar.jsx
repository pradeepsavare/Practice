
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">React Hooks</h2>
      <ul className="nav-links">
        <li><Link to="/">useEffect</Link></li>
        <li><Link to="/useref">useRef</Link></li>
        <li><Link to="/usememo">useMemo</Link></li>
        <li><Link to="/usecallback">useCallback</Link></li>
        <li><Link to="/uselayout">useLayoutEffect</Link></li>
        <li><Link to="/usecontext">useContext</Link></li>
        <li><Link to="/usereducer">useReducer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
