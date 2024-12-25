import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function UserList() {
    const [users, setUsers] = useState([]); // Inisialisasi state dengan array kosong

    useEffect(() => {
        getPengguna();
    }, []); // Hanya menjalankan sekali saat komponen dimuat

    const getPengguna = async () => {
        try {
            const response = await axios.get('http://localhost:5000/pengguna');
            setUsers(response.data); // Mengupdate state dengan data pengguna
        } catch (error) {
            console.error('Error fetching data: ', error); // Menangani kesalahan jika permintaan gagal
        }
    }

    const hapusPengguna = async (id) =>{
        try {
            await axios.delete(`http://localhost:5000/pengguna/${id}`);
            getPengguna();
        } catch (error) {
            
        }
    }

    return (
      <>
        <div className='container mt-5'>
            <h1 className='text-center'>Data Siswa & Siswi</h1>
            <div>
            <Link to="tambahUser" className='btn btn-lg btn-primary'> 
             Tambah User
            </Link>
            </div>
            </div>
            <br/>
        <div className='table-responsive'>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Telephone</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.kelas}</td>
                            <td>{user.telepon}</td>
                            <td>{user.gender}</td>
                            <td>
                                <Link to={`EditUser/${user._id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button 
                                onClick={
                                    () => 
                                        hapusPengguna(user._id)
                                    } 
                                className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

  
      </>       
    )
}

export default UserList;
