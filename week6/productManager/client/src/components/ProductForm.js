import React, {useState} from 'react'
import axios from 'axios';


const ProductForm = (props) => {
    const [name,setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {products, setProducts} = props;
    const [errors, setErrors] = useState([]);

    const subProdHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {name,price,description})
            .then(res =>{console.log(res); console.log(res.data);setProducts([...products,res.data])})
            .catch(err => {const errorResponse = err.response.data.errors; const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errors)
            })
    }

    return(
        <form onSubmit={subProdHandler} className = "bg-danger" >
            {errors.map((err,index) => <div key = {index}>{err}</div>)}
            <div className='form-group'>
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
                <button className='btn-success'>Submit</button>
            </div>
        </form>
    )

    
}

export default ProductForm;