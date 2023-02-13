import { collection, getDoc, doc} from "firebase/firestore"
import { db } from "../firebase"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(() => {

        const queryDb = collection(db, "products")
        const queryDoc = doc(queryDb, id)
        getDoc(queryDoc)
            .then(res => setProducto({id: res.id, ...res.data()}))
            .catch((error) => {
                console.log(error)
        })

    },[id])

    return (
        <ItemDetail producto={producto} />
    )

}

export default ItemDetailContainer;