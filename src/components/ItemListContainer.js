import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    
    const [load,setLoad] = useState(false)
    const [productos,setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2f53c76f67msh7e1f5e8e9e68b76p1c81ddjsn14f8b040bbd7',
		        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        const pedido = fetch(`https://free-nba.p.rapidapi.com/teams/`, options)

        pedido
        .then((response) => {
            const productos = response.json()
            return productos
        })
        .then((productos) => {
            if(categoryId === undefined) {
                setProductos(productos.data)
                setLoad(true)
            } else {
                const filteredCategory = productos.data.filter((category) => category.conference === categoryId)
                setProductos(filteredCategory)
                setLoad(true)
            }
            
        })
        .catch((err) => {
            console.error(err)
        });

    },[categoryId])

    return (

        <div>
            {load ? 'Productos Cargados' : 'Cargando... '}
            <ItemList productos={productos} key={productos}/>

        </div>
        
    )
}

export default ItemListContainer;