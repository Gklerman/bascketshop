import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>        
        </main>
    )
}

export default Main;