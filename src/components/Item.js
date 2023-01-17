import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <article key={producto.id}>
            <h3>{producto.full_name}</h3>
            <p>{producto.name}</p>
            <Link to={"/item/" + producto.id}>Ver más</Link>
        </article>
    )
}

export default Item;