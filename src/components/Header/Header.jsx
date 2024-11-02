import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <h2>My Web Site</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/contact">Contact US</NavLink>
            <NavLink to="/users">Users</NavLink>
        </nav>
    );
};

export default Header;