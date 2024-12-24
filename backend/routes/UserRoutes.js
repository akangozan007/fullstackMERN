import express from 'express';
// import controller
import { infoUsers, infoUsersById, SaveInfoUsers, DeleteInfoUsers, UpdateInfoUsers } from '../controllers/UserControllers.js';
// menyimpan function Router()
const Router = express.Router();
//handling paramater endpoint get user secara keseluruhan
Router.get('/pengguna', infoUsers);
//handling paramater endpoint get user berdasarkan id user
Router.get('/pengguna/:id', infoUsersById);
//handling paramater endpoint post user
Router.post('/pengguna', SaveInfoUsers);
//handling paramater endpoint delete user
Router.delete('/pengguna/:id', DeleteInfoUsers);
//handling paramater endpoint update user
Router.patch('/pengguna/:id', UpdateInfoUsers);
// export 
export default Router;