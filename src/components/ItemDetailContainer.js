import { useParams } from "react-router-dom"
//import { useEffect, useState } from "react";
//import ItemList from "./ItemList"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const params = useParams()
    console.log(params.id)

    return (
        <div>
            {/*load ? 'Productos Cargados' : 'Cargando... '*/}
            <ItemDetail params={params.id}/>
        </div>
    )
}

export default ItemDetailContainer;

/*import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const{id} = useParams();
    const [load, setLoad] = useState(false)
    const [detalle,setDetalle] = useState([])
    

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2f53c76f67msh7e1f5e8e9e68b76p1c81ddjsn14f8b040bbd7',
		        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        const pedido = fetch('https://free-nba.p.rapidapi.com/teams/', options)
        
        //const pedido = fetch('https://swapi.dev/api/')

        pedido
        .then((response) => {
            const detalle = response.json()
            return detalle
        })
        .then((detalle) => {
            console.log(detalle.data)
            setDetalle(detalle.id)
            setLoad(true)
        })
        .catch((err) => {
            console.error(err)
        });
    },[])

    return (        
        <div>
            {load ? 'Detalle Producto' : 'Cargando...'}
                <ItemList productos={detalle}/>
                {console.log(detalle.id)}
        </div>
    )
    
}

export default ItemDetailContainer;*/