const { default: axios } = require("axios");
const { useState, useEffect } = require("react")
const { useParams } = require("react-router-dom")

const Product = (props) => {
    const [aProduct, setAProduct] = useState({})
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {setAProduct(res.data)})
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <div>Product: {aProduct.name}</div>
            <div>Description: {aProduct.description}</div>
            <div>Price: ${aProduct.price}</div>
        </div>
    )
}

export default Product;