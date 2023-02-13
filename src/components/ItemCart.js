import React from "react";
import { useCarrito } from "./CartContext";

const ItemCart = ({ product }) => {

    const { eliminarProducto } = useCarrito()

    return (

        <div className="col-3 p-2">
            <img className="card-logo" src={product.image} alt={product.title} />
            <div>
                <p className="card-title"><b>Titulo:</b> {product.title}</p>
                <p className="card-title"><b>Cantidad:</b> {product.cantidad}</p>
                <p className="card-title"><b>Precio:</b> {product.price}</p>
                <p className="card-title"><b>SubTotal:</b> U$S{product.cantidad * product.price}</p>
                <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
            </div>
        </div>

    )

}

export default ItemCart