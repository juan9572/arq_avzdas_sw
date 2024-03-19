'use client'
import axios from 'axios';
import { useState } from 'react';

import Alert from './components/Alert';
import Swal from 'sweetalert2';
export default function Home() {

  const zonaAIngresar = process.env.NEXT_PUBLIC_ZONA_A_INGRESAR;
  const [alert, setAlert] = useState({
    open: false,
    icon: "",
    title: "",
    text: "",
    location: "",
    confirmButtonText: "Finalizar",
    secondButtonText: null,
  });


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
  //valida que el usuario tenga permisos para ingresar a la zona
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
      // const credentials = {Username:'admin_aeropuerto', Password:'adminpass', Zone:1};
      // const { data } = await axios.post('/api/authAdmin', credentials);
      const { data } = await axios.post('/api/auth');
      console.log(data);
      Swal.close()
      setAlert((prev) => ({
        ...prev,
        icon: "success",
        title: "Usuario validado",
        text: "Puede ingresar a la zona",
        open: true,
        secondButtonText: null,
        confirmButtonText: "Finalizar",
        location: "/",
      }));
    } catch (err) {
      Swal.close()
      console.log(err);
      setAlert((prev) => ({
        ...prev,
        icon: "error",
        title: "Error",
        text: "No se pudo validar el usuario",
        open: true,
        secondButtonText: null,
        confirmButtonText: "Finalizar",
      }));
    }
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
      <main className="relative w-full h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
          <img style={{ filter: 'brightness(50%)' }} className="w-full h-full" src="/bg.jpg" alt="" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-center">
            <img className="w-48 h-48" src="/logo.png" alt="Logo" />
          </div>
          <div className="flex flex-col gap-16 pt-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold">{zonaAIngresar}</h1>
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={validateUser}
                style={{
                  backgroundImage: `linear-gradient(to right, #0034e3, #00006d)`,
                }} className="w-64 h-24 text-white rounded-full font-semibold border-white border-2">Presiona acá para validar tus datos</button>
            </div>
            <div className="flex justify-center">
              <img className="w-48" src="/logocodecrafters.png" alt="Image" />
            </div>
          </div>
        </div>
      </main>

    </>
  )


}
