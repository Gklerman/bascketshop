import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    
    const [load,setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2f53c76f67msh7e1f5e8e9e68b76p1c81ddjsn14f8b040bbd7',
		        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        const pedido = fetch('https://free-nba.p.rapidapi.com/teams', options)
        
        pedido
        .then((response) => {
            const productos = response.json()
            return productos
        })
        .then((productos) => {
            //console.log(productos)
            setProductos(productos.data)
            setLoad(true)
        })
        .catch((err) => {
            console.error(err)
        });
    },[])

    return (

        <div>
            {load ? 'Productos Cargados' : 'Cargando... '}
            <ItemList productos={productos}/>   
        </div>
        
    )
}

export default ItemListContainer;