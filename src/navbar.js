import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>krishnas blog</h1>
             <div className="links">
                
                
                <Link to="/All">All</Link>
                <Link to="/Custom">Custom</Link>
                <Link to="/ICP">ICP</Link>
                <Link to="/Mission">Mission</Link>
                <Link to="/Product">Product</Link>
                <button><Link to="/create" >Newblog</Link></button>
            </div>
        </nav>
    );
}
 
export default Navbar;