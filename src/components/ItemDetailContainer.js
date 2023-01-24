import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const params = useParams()

    return (
        <div>
            <ItemDetail params={params.id}/>
        </div>
    )
}

export default ItemDetailContainer;