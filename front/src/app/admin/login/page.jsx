'use client'
import axios from 'axios';
import { useState } from 'react';
import Alert from '../../components/Alert';
import Swal from 'sweetalert2';

export default function AdminLogin() {
    const [credentials, setCredentials] = useState({
        user: "",
        password: "",
        zone: 1,
    });
    const [alert, setAlert] = useState({
        open: false,
        icon: "",
        title: "",
        text: "",
        location: "",
        confirmButtonText: "Finalizar",
        secondButtonText: null,
    });

    const authAdmin = async (e) => {
        e.preventDefault();
    }

    const handleSecondButton = () => {
        setAlert((prev) => ({
            ...prev,
            open: false,
        }));
    };
    const closeAlert = () => {
        setAlert((prev) => ({
            ...prev,
            open: false,
        }));
    };

    const validateUser = async () => {
        console.log('Validando usuario');
        Swal.fire({
            title: "Validando usuario",
            timerProgressBar: true,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        try {
            const { data } = await axios.post('/api/authAdmin', credentials);
            console.log("hola")
            console.log(data);
            Swal.close()
            setAlert((prev) => ({
                ...prev,
                icon: "success",
                title: "Usuario validado",
                text: "Puede ingresar a la zona",
                open: true,
                secondButtonText: null,
                confirmButtonText: "Ingresar",
                location: "/admin",
            }));
        } catch (err) {
            Swal.close()
            console.log(err);
            setAlert((prev) => ({
                ...prev,
                icon: "error",
                title: "Error",
                text: "Usuario no valido",
                open: true,
                secondButtonText: null,
                confirmButtonText: "Finalizar",
                location: "/admin/login",
            }));
        }
    }

    const userChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            user: e.target.value,
        }));
    }

    const pasChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            password: e.target.value,
        }));
    }



    return (
        <>
            {alert.open && (
                <Alert
                    icon={alert.icon}
                    title={alert.title}
                    text={alert.text}
                    location={alert.location}
                    closeAlert={closeAlert}
                    confirmButtonText={alert.confirmButtonText}
                    secondButtonText={alert.secondButtonText}
                    handleSecondButton={handleSecondButton}
                />
            )}
            <main className="relative w-full h-[100vh]">
                <div className="absolute inset-0">
                    <img style={{ filter: 'brightness(50%)' }} className="w-full h-full" src="/bg.jpg" alt="" />
                </div>
                <div className="absolute left-[50%] top-[50%] z-10 w-[50%] h-[80%] rounded-lg bg-white" style={{ transform: 'translate(-50%, -50%)' }}>
                    <form onSubmit={authAdmin} action="" className='flex flex-col items-center justify-center pt-16 p-8 gap-8 text-black'>
                        <h1 className='font-bold text-3xl text-center'>Modulo de Administrador</h1>
                        <h4 className='text-lg font-medium p-6 text-center'>Ingresa el usuario y la contraseña</h4>
                        <input type="text" placeholder='User' onChange={userChange} value={credentials.user} className='h-12 w-[80%] text-center border-2'></input>
                        <input type="password" placeholder='Password' onChange={pasChange} value={credentials.password} className='h-12 w-[80%] text-center border-2'
                        />

                        <button onClick={() => validateUser()} type="submit" style={{
                            backgroundImage: `linear-gradient(to right, #0034e3, #00006d)`,
                        }} className="w-72 h-20 text-white rounded-full font-semibold border-white border-2 mt-6">Ingresar</button>
                    </form>

                </div>
            </main >

        </>
    )
}