import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
const { useState } = require("react");



const Main = (props) => {
    const [products, setProducts] = useState([]);

    return (
        <div>
            <ProductForm products = {products} setProducts = {setProducts}/>
            <div>
                <ProductList products = {products} setProducts = {setProducts}/>
            </div>
        </div>
    )
}

export default Main;