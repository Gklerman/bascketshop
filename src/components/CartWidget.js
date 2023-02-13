import { NavLink } from "react-router-dom";
import { useCarrito } from './CartContext';

const CartWidget = () => {
    
    const { totalProductos } = useCarrito()

    return ( 

        <NavLink to="/carrito" className="contCarrito">
            <img src="/img/carrito-de-compras-blanco.fw.png" className="carrito" alt="" />
            <span className="badge text-bg-danger m-2">{totalProductos () || ''}</span>
        </NavLink>
     )
}
 
export default CartWidget;