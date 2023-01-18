import Item from "./Item";

const ItemList = ({productos}) => {

    return (
        <div className="row">
            {Array.isArray(productos) ? productos.map((producto, index) => {
                return (
                    <Item producto={producto} key={index} />
                )
            })
            : null}
        </div>
    )
}

export default ItemList;