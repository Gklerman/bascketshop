import { useState, createContext, useContext } from "react";

const contexto = createContext()
const Provider = contexto.Provider


export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto, cantidad) => {
        if(estaEnCarrito(producto.id)) {
            setCarrito(carrito.map(product => {
                return product.id === producto.id ? { ...product, cantidad: product.cantidad + cantidad } : product
            }))
        } else {
            setCarrito([...carrito, { ...producto, cantidad}])
        }
    }

    const precioTotal = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }

    const totalProductos = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)

    const eliminarProducto = (id) => setCarrito(carrito.filter(product => product.id !== id))

    const vaciarCarrito = () => setCarrito([])

    const estaEnCarrito = (id) => carrito.find(product => product.id === id) ? true : false



    const valorDelContexto = {
        agregarProducto: agregarProducto,
        estaEnCarrito: estaEnCarrito,
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito,
        precioTotal: precioTotal,
        totalProductos: totalProductos,
        carrito

    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider

