import mongoose  from "mongoose";

const User = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    kelas:{
        type:String,
        required:true
    },
    telepon:{
        type:String,
        required: true,
        validate: {
            validator: function (v) {
                // Validasi pola nomor telepon
                return /^\+?\d{10,15}$/.test(v); // Mendukung nomor dengan atau tanpa '+' dan panjang 10-15 digit
            },
            message: props => `${props.value} bukan nomor telepon yang valid!`
        },
    },
    gender:{
        type:String,
        required:true,
    },
});

export default mongoose.model('Users', User);
