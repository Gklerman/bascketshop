import Item from "./Item";

const ItemList = ({productos}) => {

    return (
    
        <div>
            {Array.isArray(productos) ? productos.map(producto => {
                return (
                    <Item producto={producto} key={producto.id} />
                )
            })
            : null}
        </div>
    )
}

export default ItemList;