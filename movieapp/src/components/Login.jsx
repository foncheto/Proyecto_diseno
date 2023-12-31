import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const formularioLoginJSON = {
  campos: [
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
    etiqueta: 'Ingresar',
    clase: 'bg-blue-500 text-white px-4 py-2 rounded-md mb-5',
  },
};

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [loginExitoso, setLoginExitoso] = useState(false);

  const handleCorreoChange = (e) => setCorreo(e.target.value);
  const handleClaveChange = (e) => setClave(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginExitoso(true);
    setTimeout(() => {
      setCorreo('');
      setClave('');
      setLoginExitoso(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen"
    style={{marginTop: "0px"}}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-4xl font-bold mt-6 mb-2 items-center justify-center flex">Login</h1>
        {loginExitoso && <p className="text-green-500 mb-4">Has ingresado correctamente.</p>}
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-stretch mb-16">
            {formularioLoginJSON.campos.map((campo, index) => (
              <div key={index} className="mb-3">
                <label className="text-lg font-semibold">{campo.etiqueta}</label>
                <input
                  type={campo.tipo}
                  name={campo.nombre}
                  className={campo.clase}
                  onChange={campo.nombre === 'correo' ? handleCorreoChange : handleClaveChange}
                  value={campo.nombre === 'correo' ? correo : clave}
                  placeholder={campo.placeholder}
                />
              </div>
            ))}
            <button type={formularioLoginJSON.boton.tipo} className={formularioLoginJSON.boton.clase}>
              {formularioLoginJSON.boton.etiqueta}
            </button>
          </form>
        </div>
        <div className="items-center justify-center flex"
        style={{}}>
          Don't have an account?
          <Link to="/registrarse" className="font-bold text-blue-500 hover:text-blue-800" style={{ marginLeft: '5px' }}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
