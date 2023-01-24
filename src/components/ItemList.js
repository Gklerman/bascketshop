import Item from "./Item";

const ItemList = ({productos}) => {

    return (
        <div className="row g-1">
            {Array.isArray(productos) ? productos.map((producto) => {
                return (
                    <Item producto={producto} key={producto.id} />
                )
            })
            : null}
        </div>
    )
}

export default ItemList;
