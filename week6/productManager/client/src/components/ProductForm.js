import React, {useState} from 'react'
import axios from 'axios';

const ProductForm = () => {
    const [name,setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const subProdHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {name,price,description})
            .then(res =>{console.log(res); console.log(res.data);})
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={subProdHandler}>
            <div>
                <label>Product Name</label><br/>
                <input type = "text" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Price</label><br/>
                <input type = "number" onChange={(e)=> setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label><br/>
                <input type = "text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

    
}

export default ProductForm;