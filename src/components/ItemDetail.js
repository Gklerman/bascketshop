import ItemCount from './ItemCount';
import { useCarrito } from './CartContext';

const ItemDetail = ({producto}) => {

    const{agregarProducto} = useCarrito()

    const onAdd = (cantidad) => {
        agregarProducto(producto, cantidad)
    }

    return (
        <div className="col-3 p-2">
            <article className="card d-flex justify-content-center align-items-center text-center">
                <div className="card-body">
                    <h3 className="card-title text-center">{producto.title}</h3>
                </div>
                <img className="card-logo" src={producto.image} alt="" />
                <p>Category: {producto.category}</p>
                <p className="pb-3">Division: {producto.division}</p>
                <p>Price: <b>{producto.price}</b></p>
                <ItemCount stock={producto.stock} onAdd={onAdd} />
            </article>
        </div>
    )
}

export default ItemDetail;