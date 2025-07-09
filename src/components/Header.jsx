import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <h1>Sheet2Web</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}

export default Header;
