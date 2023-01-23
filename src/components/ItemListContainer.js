import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    /* Tambien te falta en el ItemListContainer usar el useParams 
    para poder filtrar por categoría desde el nav. sino siempre 
    te tira el total de los items. */
    
    const [load,setLoad] = useState(false)
    const [productos,setProductos] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2f53c76f67msh7e1f5e8e9e68b76p1c81ddjsn14f8b040bbd7',
		        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        const pedido = fetch(`https://free-nba.p.rapidapi.com/teams/`, options)

        //const pedido = fetch('https://swapi.dev/api/people/')

        pedido
        .then((response) => {
            const productos = response.json()
            return productos
        })
        .then((productos) => {
            //const filteredCategory = categoryId.filter((category) => category.conference === 'East')
            setProductos(productos.data)
            setLoad(true)
        })
        .catch((err) => {
            console.error(err)
        });

    },[])

    return (

        /*filteredCategory.map((category) => (
            <div key={category.conference}>{category.conference}</div>
        )),*/

        <div>
            {load ? 'Productos Cargados' : 'Cargando... '}
            <ItemList productos={productos} key={productos}/>

        </div>
        
    )
}

export default ItemListContainer;