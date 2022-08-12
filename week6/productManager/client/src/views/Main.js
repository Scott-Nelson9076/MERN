import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
const { useState } = require("react");



const Main = (props) => {
    const [products, setProducts] = useState([]);
    const remove = prodId => {
        setProducts(products.filter(product => product._id != prodId))
    }

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