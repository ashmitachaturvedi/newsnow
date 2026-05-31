import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <h2>NewsNow</h2>
            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/india">India</Link>
            <Link to="/world">World</Link>
            <Link to="/upsc">UPSC</Link>
            <Link to="/nta">NTA</Link>
            </div>
        </nav>
    );
}

export default Navbar;