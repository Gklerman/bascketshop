import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCarrito } from "./CartContext"
import ItemCart from "./ItemCart"


const Carrito = () => {

    const {carrito, precioTotal} = useCarrito()
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")


    const handleClick = (e) => {
        const compra = {
            usuario: {
                nombre: "",
                email: "",
                telefono: ""
            },
            productos: [],
            fecha: serverTimestamp()
        }
        const sellsCollection = collection(db,"sells")
        const pedido = addDoc(sellsCollection, compra)

        pedido
        .then((response) => {
            console.log(response.id)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    if(carrito.length === 0) {
        return (

            <div>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Ir a catálogo</Link>
            </div>

        )
    }

    return (
        <div>
            <div>
                {carrito.map(product => <ItemCart key={product.id} product={product} />)}
            </div>
            <div>
                <input type="text" onChange={handleChangeName} placeholder="Nombre" />
            </div>
            <div>
                <input type="text" onChange={handleChangeEmail} placeholder="Email" />
            </div>
            <button onClick={handleClick}>Terminar compra</button>
        </div>
    )

}

export default Carrito