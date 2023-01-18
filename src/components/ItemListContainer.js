import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    /* Tambien te falta en el ItemListContainer usar el useParams 
    para poder filtrar por categoría desde el nav. sino siempre 
    te tira el total de los items. */
    
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

        const pedido = fetch('https://free-nba.p.rapidapi.com/teams/', options)

        //const pedido = fetch('https://swapi.dev/api/people/')
        
        pedido
        .then((response) => {
            const productos = response.json()
            return productos
        })
        .then((productos) => {
            console.log(productos.data)
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