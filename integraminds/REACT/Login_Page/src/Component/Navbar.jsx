import { Link } from 'react-router-dom';
import "./NavBar.css";

export const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/useMemo">useMemo</Link></li>
        <li><Link to="/chatgpt">ChatGpt</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}
