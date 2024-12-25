// module
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

// css & js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const EditUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Laki laki");
  const [kelas, setClass] = useState("");
  const [telepon, setPhone] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    getPenggunaById();

  },[]);

  const getPenggunaById = async() => {
    const response = await axios.get(`http://localhost:5000/pengguna/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setClass(response.data.kelas);
    setPhone(response.data.telepon);
}

  const editPengguna = async(e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pengguna/${id}`,{
          name,
          email,
          gender,
          kelas,
          telepon
      });
      navigate("/");
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
    <main className='p-5 bg-dark'>
    <div className='position-relative m-5'>
      {/* form  */}
      <form onSubmit={editPengguna}>
      <div className='container-fluid'>
        {/* nama */}
      <div class="input-group mb-3">
        <span class="input-group-text text-primary" id="basic-addon1">Nama Lengkap</span>
        <input 
        type="text" 
        value={name} 
        onChange={(e)=> setName(e.target.value)}
        className="form-control" 
        placeholder="Nama lengkap" 
        aria-label="Username" 
        aria-describedby="basic-addon1"
        />
      </div>
      {/* ./nama */}
      {/* email */}
      <div class="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-primary">Email address</label>
        <input
        value={email} 
        onChange={(e)=> setEmail(e.target.value)} 
        type="email" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="nama@gmail.com" />
      </div>
      {/* ./email */}
      {/* gender */}
      <label for="GenderDataList" className="form-label text-primary">Jenis Kelamin</label>
        <input 
        className="form-control" 
        value={gender} 
        onChange={(e)=> setGender(e.target.value)} 
        list="datalistGender" 
        id="GenderDataList" 
        placeholder="gender" 
        />
        <datalist id="datalistGender">
          <option value="Laki laki"/>
          <option value="Perempuan"/>
        </datalist>
      {/* ./gender */}
      {/* kelas */}
      <label for="JurusanDataList" className="form-label text-primary">Jurusan/Kelas</label>
        <input 
        className="form-control" 
        value={kelas} 
        onChange={(e)=> setClass(e.target.value)} 
        list="datalistJurusan" 
        id="JurusanDataList" 
        placeholder="Jurusan" 
        />
        <datalist id="datalistJurusan">
          <option value="Informatika A"/>
          <option value="Informatika B"/>
          <option value="Informatika C"/>
          <option value="Informatika D"/>
          <option value="Informatika E"/>
          <option value="Informatika F"/>
        </datalist>
      {/* ./kelas */}
       {/* telepon */}
       <div class="input-group my-3">
        <span class="input-group-text" id="basic-addon1 text-primary">No. Handphone</span>
        <input 
        type="phone" 
        value={telepon} 
        onChange={(e)=> setPhone(e.target.value)}
        className="form-control" 
        placeholder="Telepon" 
        aria-label="Username" 
        aria-describedby="basic-addon1"
        />
      </div>
      {/* telepon */}
      </div>

      {/* submit */}
       <button className='btn btn-sm btn-success' type='submit'>Update</button>
      {/* ./form */}
      </form>
     
    </div>
    </main>
    </>
  )
}

export default EditUser;
