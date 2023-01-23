import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <div className="col-3">
            <article key={producto.id} className="card">
                <div className="card-body">
                    <h3 className="card-title">{producto.full_name}</h3>
                </div>
                <p>{producto.conference}</p>
                <p>{producto.division}</p>
                
                <Link to={`/item/${producto.full_name}`}>Ver más</Link>
            </article>
        </div>      
    )
}

export default Item;

/*
<p>
                    <li>{producto.species}</li>
                    <li>{producto.birth_year}</li>
                    <li>{producto.homeworld}</li>
                    <li>{producto.starships}</li>
                    <li>{producto.vehicles}</li>
</p>
*/