import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-3 px-3">
            <div className="container-fluid">
                <a href="index.js" className="navbar-brand">
                    <h1>Bascket<span className="shop">Shop</span></h1>
                </a>
                <button className="navbar-toggler btn-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                    <ul className="navbar-nav mb-2 ms-auto mb-lg-0 d-flex list-unstyled">
                        <li className="nav-item m-1 p-2"><a href="#">Crea tu cuenta</a></li>
                        <li className="nav-item m-1 p-2"><a href="#">Ingresa</a></li>
                        <li className="nav-item m-1 p-2"><a href="#">Mis compras</a></li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;