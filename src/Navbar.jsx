import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Yarkyai Shop
        </Link>
        <ul className="navbar-nav flex-row gap-3 ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              ลงทะเบียน
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sale">
              ขายของ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
