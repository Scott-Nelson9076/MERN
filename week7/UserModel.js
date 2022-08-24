const UserSchema = new mongoose.Schema({
    firstName: {type:String, minlength :[2, "First Name Must Be At Least 2 Characters"], required:[true,"First Name Is A Required Field"]},
    lastName:{type:String, minlength :[2, "Last Name Must Be At Least 2 Characters"], required:[true,"Last Name Is A Required Field"]},
    birthday:{type:Date, required:[true, "Birthday Is A Required Field"]},
    email:{type:String, required:[true,"First Name Is A Required Field"]},
    password:{type:String, required:[true,"Password Is A Required Field"], minlength:[8,"Password Must Be At Least 8 Characters"], maxlength:[12,"Password Must Be Less Than 12 Characters"]}
})