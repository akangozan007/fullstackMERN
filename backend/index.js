import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import UserRoutes from "./routes/UserRoutes.js";

const app = express();

// debugging connection mongoose
// parameter koneksi
mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});
// command koneksi
const db = mongoose.connection;
// debugging jika error 
db.on('error', (error) => console.log(error));
//  debugging jika berhasil terkoneksi
db.once('open', () => console.log('Database Connected .. '));
// middleware data
app.use(cors());
// data yang terekam di middleware dikembalikan dalam format json
app.use(express.json());
// memanggil kontroller
app.use(UserRoutes);


app.listen(5000,()=> console.log("server sudah jalan .."));



