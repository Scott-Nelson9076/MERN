import {Link} from 'react-router-dom';
const { default: axios } = require("axios");
const { useEffect } = require("react");


const ProductList = (props) => {
    const {products, setProducts} = props;
    const remove = prodId => {
        setProducts(products.filter(aProduct => aProduct._id !== prodId))
    }
    const deleteProduct = (prodId) => {
        axios.delete('http://localhost:8000/api/product/' + prodId)
            .then(res => remove(prodId))
            .catch(err => console.log(err))
    }

    useEffect(()=> {axios.get("http://localhost:8000/api/products").then((res)=> {setProducts(res.data)}).catch((err)=>{console.log(err);})}, [])


return (
    <div>
        {products.map((product, index) => { return <p key = {index} className = "bg-success, container-md"><Link to = {'/product/' + product._id}>{product.name}</Link><div>{product.description}</div><div>${product.price}</div><div><button onClick={(e)=>deleteProduct(product._id)}>Delete</button><Link to = {"/product/edit/" + product._id}>Edit</Link></div></p>})}
    </div>
)
}

export default ProductList