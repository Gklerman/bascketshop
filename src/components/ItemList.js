import Item from "./Item";

const ItemList = ({productos}) => {

    return (
        <div className="row">
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


/*{productos.filter(e => e.category === category).map((category, index) => (
    <div key={index}>
        <h1>{category.full_name}</h1>
        <p>{category.conference}</p>
        <p>{category.division}</p>
    </div>
))}*/