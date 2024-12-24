// import model Pengguna
import User from '../model/UserModels.js';

// asyncrhonous function untuk menemukan data pengguna
export const infoUsers = async(req, res) => {
    // try catch statement
    try {
        // lakukan pencarian pengguna
        const ParaPengguna = await User.find();
        // parsing data yang telah ditemukan menjadi format json
        res.json(ParaPengguna);
    } catch (error) {
        // jika tdak ada atau error maka tampilkan
        res.status(500).json({message:error.message});
    }
}

// asyncrhonous function untuk menemukan data pengguna
export const infoUsersById = async(req, res) => {
    // try catch statement
    try {
        // lakukan pencarian pengguna
        const ParaPenggunaById = await User.findById(req.params.id);
        // parsing data yang telah ditemukan menjadi format json
        res.json(ParaPenggunaById);
    } catch (error) {
        // jika tdak ada atau error maka tampilkan
        res.status(500).json({message:error.message});
    }
}

// asyncrhonous function untuk menemukan data pengguna
export const SaveInfoUsers = async(req, res) => {
    // inisialisasi pengguna baru
    const pengguna = new User(req.body);
    // try catch statement
    try {
        // lakukan pencarian pengguna
        const SaveParaPengguna = await pengguna.save();
        // parsing data yang telah ditemukan menjadi format json
        res.status(201).json(SaveParaPengguna);
    } catch (error) {
        // jika tdak ada atau error maka tampilkan
        res.status(500).json({message:error.message});
    }
}

export const UpdateInfoUsers = async(req, res) => {

    // try catch statement
    try {
        // update data
        const UpdateParaPengguna = await User.updateOne({_id:req.params.id},{$set:req.body});
        // parsing data yang telah ditemukan menjadi format json
        res.status(200).json(UpdateParaPengguna);
    } catch (error) {
        // jika tdak ada atau error maka tampilkan
        res.status(500).json({message:error.message});
    }
}

export const DeleteInfoUsers = async(req, res) => {

    // try catch statement
    try {
        // lakukan delete pengguna
        const DeleteParaPengguna = await User.deleteOne({_id:req.params.id});
        // parsing data yang telah ditemukan menjadi format json
        res.status(200).json(DeleteParaPengguna);
    } catch (error) {
        // jika tdak ada atau error maka tampilkan
        res.status(500).json({message:error.message});
    }
}