const { default: axios } = require("axios");
const { useState, useEffect } = require("react")
const { useParams, useNavigate, Link } = require("react-router-dom")

const Product = (props) => {
    const [aProduct, setAProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    const deleteAProduct = (prodId) => {
        axios.delete('http://localhost:8000/api/product/' + prodId)
            .then(navigate("/home"))
            .catch(err => console.log(err))
    }

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
            <button onClick={(e) => deleteAProduct(id)}>Delete</button>
            <div>
            <Link to = {"/product/edit/" + id}>Edit</Link>
            </div>
        </div>
    )
}

export default Product;