import React, { useState } from 'react';

const formularioContactoJSON = {
  campos: [
    {
      tipo: 'text',
      nombre: 'name',
      etiqueta: 'Nombre',
      placeholder: 'Ej. Juan Pérez',
      clase: 'border-2 border-gray-300 p-2 mb-3 w-full',
    },
    {
      tipo: 'email',
      nombre: 'email',
      etiqueta: 'Email',
      placeholder: 'Ej. correo@example.com',
      clase: 'border-2 border-gray-300 p-2 mb-3 w-full',
    },
    {
      tipo: 'textarea',
      nombre: 'message',
      etiqueta: 'Mensaje',
      placeholder: 'Escriba su mensaje aquí...',
      clase: 'border-2 border-gray-300 p-2 mb-3 w-full',
    },
  ],
  boton: {
    tipo: 'submit',
    etiqueta: 'Enviar',
    clase: 'bg-blue-500 text-white px-4 py-2 rounded-md',
  },
};

function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <div className="flex flex-col items-center p-3">
      <h1 className="text-4xl font-bold mt-10 mb-6">Contacto</h1>
      <p className="text-lg mb-4">
        Puedes contactarnos vía <strong>pelicuranking@contacto.com</strong>.
      </p>
      <div className="flex flex-col items-center max-w-md w-full">
        <form className="flex flex-col items-stretch"> {/* Alinea y ocupa el mismo espacio */}
          {formularioContactoJSON.campos.map((campo, index) => (
            <div key={index} className="mb-3">
              <label className="text-lg font-semibold">{campo.etiqueta}</label>
              <input
                type={campo.tipo}
                name={campo.nombre}
                className={campo.clase}
                onChange={campo.onChange}
                placeholder={campo.placeholder}
              />
            </div>
          ))}
          <button
            type={formularioContactoJSON.boton.tipo}
            className={formularioContactoJSON.boton.clase}
          >
            {formularioContactoJSON.boton.etiqueta}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;


