import { useNavigate, useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";

const ProductUpdate = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setName(res.data.name)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])
    
    const editProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            name,
            price,
            description
        })
            .then(res => {console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={editProduct}>
                <div>
                    <label>Name:</label>
                    <input type = "text" name = "name" value = {name} onChange = {(e) => {setName(e.target.value)}}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type = "text" name = "price" value = {price} onChange = {(e) => {setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type = "text" name = "description" value = {description} onChange = {(e) => {setDescription(e.target.value)}}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ProductUpdate;
