'use client'
import axios from 'axios';
import { useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';

export default function Admin() {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const [userInfo, setUserInfo] = useState([]);

    const fetchUserData = async (user, index) => {
        Swal.fire({
            title: "Obteniendo info del usuario",
            timerProgressBar: true,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        try {
            const body = {
                url: `8001/trackUser/?user_id=${index}`,
                method: "get",
            };
            Swal.close()
            const { data } = await axios.post("/api/general", body);
            console.log(data, "data");
            return data.data;
        } catch (error) {
            Swal.close()
            console.error(error);
            return null;
        }
    };

    const handleClickOpen = async (user, index) => {
        console.log(user, "USERRrr", index);
        setOpen(true);
        setUser(user);
        const userData = await fetchUserData(user, index);
        if (userData) {
            setUserInfo(userData);
        } else {
            console.log("No se pudo obtener la información del usuario");
        }
    };

    const handleClose = () => {
        setOpen(false);
    };


    const fetchData = async () => {
        try {
            const body = {
                url: "8000/users",
                method: "get",
            };

            const { data } = await axios.post("/api/general", body);
            const users = data.data
            console.log(users);
            setUsers(users);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <nav className="fixed w-full bg-[#0034e3] h-14 flex flex-row justify-between p-4 items-center" >
                <img className="w-14 h-14 flex" src="/logo.png" alt="" />
                <div className="flex items-center">
                    <a href="/admin/login">Cerrar sesión</a>
                </div>
            </nav>
            <div className="flex flex-row">
                <section className="fixed h-[100vh] mt-14 bg-[#00006d] w-48 flex flex-col items-start p-4 gap-8">
                    <div className="font-bold">
                        Home
                    </div>
                    <div className="flex flex-col pl-4 gap-6">
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/group.svg" alt="" />
                            <p>Usuarios</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/bell.svg" alt="" />
                            <p>Notifiaciones</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/graphic.svg" alt="" />
                            <p>Gráficos</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/user.svg" alt="" />
                            <p>Perfil</p>
                        </div>
                    </div>
                </section>

                <main className="bg-white text-black w-full min-h-[100vh] flex justify-center  pt-24">
                    <div className="w-full max-w-screen-md">
                        <h2 className="text-center mb-4 font-bold text-2xl">Listado de usuarios</h2>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Nombre</th>
                                    <th className="border px-4 py-2">Cédula</th>
                                    <th className="border px-4 py-2">Edad</th>
                                    <th className="border px-4 py-2">Correo electrónico</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td onClick={() => handleClickOpen(user, index)} className="border px-4 py-2 w-full hover:cursor-pointer hover:bg-gray-300">{user.name}</td>
                                        <td className="border px-4 py-2 w-full">{user.cedula}</td>
                                        <td className="border px-4 py-2">{user.age}</td>
                                        <td className="border px-4 py-2">{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                    fullWidth
                >
                    <DialogTitle
                        style={{ cursor: "move", textAlign: "center" }}
                        id="draggable-dialog-title"
                    >
                        <h4>Rastreo del usuario</h4>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            <section className='flex justify-center'>
                                <p>Nombre: {user.name}</p>
                            </section>
                            <div className='mt-6'>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">Nombre</th>
                                            <th className="border px-4 py-2">Zona</th>
                                            <th className="border px-4 py-2">Acceso</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userInfo.map((info, index) => (
                                            <tr key={index}>
                                                <td className="border px-4 py-2">{info.name}</td>
                                                <td className="border px-4 py-2">{info.zone_name}</td>
                                                <td className="border px-4 py-2">{info.status_access}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}