// Registrarse.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formularioRegistroJSON = {
  campos: [
    {
      tipo: 'text',
      nombre: 'nombre',
      etiqueta: 'Nombre',
      placeholder: 'Ej. Juan',
      clase: 'border-2 border-gray-300 p-2 mb-3 w-full',
    },
    {
      tipo: 'text',
      nombre: 'apellido',
      etiqueta: 'Apellido',
      placeholder: 'Ej. Pérez',
      clase: 'border-2 border-gray-300 p-2 mb-3 w-full',
    },
    {
      tipo: 'email',
      nombre: 'correo',
      etiqueta: 'Correo',
      placeholder: 'Ej. correo@example.com',
      clase: 'border-2 border-gray-300 p-2 mb-3 w-full',
    },
    {
      tipo: 'password',
      nombre: 'clave',
      etiqueta: 'Clave',
      placeholder: 'Escriba su contraseña...',
      clase: 'border-2 border-gray-300 p-2 mb-3 w-full',
    },
  ],
  boton: {
    tipo: 'submit',
    etiqueta: 'Registrarse',
    clase: 'bg-blue-500 text-white px-4 py-2 rounded-md mb-5',
  },
};

function Registrarse() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const [registroExitoso, setRegistroExitoso] = useState(false);
  
    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleApellidoChange = (e) => setApellido(e.target.value);
    const handleCorreoChange = (e) => setCorreo(e.target.value);
    const handleClaveChange = (e) => setClave(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setRegistroExitoso(true);
      setTimeout(() => {
        setNombre("");
        setApellido("");
        setCorreo("");
        setClave("");
        setRegistroExitoso(false);
        navigate('/');
      }, 2000);
    };
  
    return (
      <div className="contact-container bg-gray-200 border-2 border-black p-3 mt-10 max-w-md mx-auto rounded shadow mb-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mt-6 mb-2">Registrarse</h1>
          {registroExitoso && (
            <p className="text-green-500 mb-4">Te has registrado correctamente.</p>
          )}
          <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-stretch mb-16">
              {formularioRegistroJSON.campos.map((campo, index) => (
                <div key={index} className="mb-3">
                  <label className="text-lg font-semibold">{campo.etiqueta}</label>
                  <input
                    type={campo.tipo}
                    name={campo.nombre}
                    className={campo.clase}
                    onChange={
                      campo.nombre === 'nombre' ? handleNombreChange :
                      campo.nombre === 'apellido' ? handleApellidoChange :
                      campo.nombre === 'correo' ? handleCorreoChange : handleClaveChange
                    }
                    value={
                      campo.nombre === 'nombre' ? nombre :
                      campo.nombre === 'apellido' ? apellido :
                      campo.nombre === 'correo' ? correo : clave
                    }
                    placeholder={campo.placeholder}
                  />
                </div>
              ))}
              <button
                type={formularioRegistroJSON.boton.tipo}
                className={formularioRegistroJSON.boton.clase}
              >
                {formularioRegistroJSON.boton.etiqueta}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Registrarse;