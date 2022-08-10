const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/product_db", {useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => console.log("DB Connected"))
    .catch(err => console.log("Cant Connect To DB", err))