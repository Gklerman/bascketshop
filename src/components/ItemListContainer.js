import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    
    const [load, setLoad] = useState(false)
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()


    useEffect(() => {

        const productosCollection = collection(db, "products")

        if(categoryId) {
            const filtro = query(productosCollection, where("category", "==", categoryId))
            getDocs(filtro)
                .then(response => setProductos(response.docs.map(doc => ({ ...doc.data(), id: doc.id}))))
                setLoad(true)
        } else {
            getDocs(productosCollection)
                .then(response => setProductos(response.docs.map(doc => ({ ...doc.data(), id: doc.id}))))
                setLoad(true)
        }

    }, [categoryId])

    return (

        <div>
            {load ? null : 'Cargando... '}
            <ItemList productos={productos} />

        </div>
        
    )
}

export default ItemListContainer;