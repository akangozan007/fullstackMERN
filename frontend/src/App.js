import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./components/Userlist";
import Adduser from "./components/TambahUser";
import Edituser from "./components/EditUser";


function App() {
  return (
    <>
    {/* data user */}
    <BrowserRouter>
      <div className="container-fluid bg-light">
          <Routes>
            {/* list user */}
            <Route path="/" element={<Userlist/>} />
            {/* tambah user */}
            <Route path="tambahUSer" element={<Adduser/>} />
            {/* edit user */}
            <Route path="editUser/:id" element={<Edituser/>} />
          </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
