import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-3 px-3">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <h1>Basket<span className="shop">Shop</span></h1>
                </Link>
                <button className="navbar-toggler btn-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                    <ul className="navbar-nav mb-2 ms-auto mb-lg-0 d-flex list-unstyled">
                        <li className="nav-item m-1 p-2"><Link to={`/category/East`}>East</Link></li>
                        <li className="nav-item m-1 p-2"><Link to={`/category/West`}>West</Link></li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;