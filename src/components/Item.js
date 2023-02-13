import { useContext } from "react";
import { Link } from "react-router-dom";
import CustomProvider from "./CartContext"

const Item = ({producto}) => {

    const product = useContext(CustomProvider)

    return (
        <div className="col-3 p-2">
            <article key={producto.id} className="card d-flex justify-content-center align-items-center text-center">
                <div className="card-body">
                    <h3 className="card-title">{producto.title}</h3>
                </div>
                <img className="card-logo" src={producto.image} alt={producto.title} />
                <p className="">Conference: {producto.category}</p>
                <p className="pb-3">Division: {producto.division}</p>
                
                <Link to={"/item/" + producto.id} className="btn btn-warning mb-2">Info</Link>
            </article>
        </div>      
    )
}

export default Item;