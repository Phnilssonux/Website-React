import {Link} from 'react-router-dom';
import './nav.css';

function Navbar() {
    return (
    <div className="nav-bar">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;