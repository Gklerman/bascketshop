import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <div className="col-3 p-2">
            <article key={producto.id} className="card d-flex justify-content-center align-items-center text-center">
                <div className="card-body">
                    <h3 className="card-title">{producto.full_name}</h3>
                </div>
                <p className="">Conference: {producto.conference}</p>
                <p className="pb-3">Division: {producto.division}</p>
                
                <Link to={`/item/${producto.full_name}`} className="btn btn-warning mb-2">Info</Link>
            </article>
        </div>      
    )
}

export default Item;