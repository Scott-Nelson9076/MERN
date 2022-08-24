const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, "Product Name Must be At Least 3 Characters"], required: [true, "Product Name Is A Required Field"]},
    price: {type: Number, required: [true, "Product Price Is A Required Field"]},
    description :{type:String, minlength: [5, "Product Description Must Be At Least 5 Characters"], required: [true, "Product Description Is A Required Field"]}
}, {timestamps:true});

module.exports = mongoose.model('Product', ProductSchema);