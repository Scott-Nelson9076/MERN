import {Link} from 'react-router-dom';
const { default: axios } = require("axios");
const { useEffect } = require("react");


const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(()=> {axios.get("http://localhost:8000/api/products").then((res)=> {setProducts(res.data)}).catch((err)=>{console.log(err);})}, [])


return (
    <div>
        {products.map((product, index) => { return <p key = {index}><Link to = {'/product/' + product._id}>{product.name}</Link><div>{product.description}</div><div>${product.price}</div></p>})}
    </div>
)
}

export default ProductList