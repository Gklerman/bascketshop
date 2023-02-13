import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {

    const[contador, setContador] = useState(1)

    const handleSumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const handleRestar = () => {
        setContador(contador - 1)
    }

    const handleConfirm = () => {
        onAdd(contador)
    }

    const handleReset = () => {
        setContador(1)
    }

    return (

        <div>
            <button onClick={handleReset}>Reset</button>
            <button disabled={contador >= stock} onClick={handleSumar}>+</button>
            <p>Cantidad: {contador}</p>
            <button disabled={contador <= 1} onClick={handleRestar}>-</button>
            <button onClick={handleConfirm}>Confirm</button>
        </div>

    )
}

export default ItemCount;