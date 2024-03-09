"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CardPersona({ persona }) {
  const [edit, setEdit] = useState(false);

  const router = useRouter();
  
  const [formData, setFormData] = useState({
    cedula: persona.cedula,
    primer_nombre: persona.primer_nombre,
    segundo_nombre: persona.segundo_nombre,
    sexo: persona.sexo,
    edad: persona.edad,
    email: persona.email,
    direccion: persona.direccion,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Personas/${id}/`,
      {
        method: "PUT",
        body: JSON.stringify(formData ),
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
    const data = await res.json();
    setEdit(!edit)
    router.refresh()
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro quieres eliminar este registro?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Personas/${id}/`,
        {
          method: "DELETE",
        }
      );
      if (res.status === 204) {
        router.refresh();
      }
    }
  };

  return (
    <>
      <li key={persona.cedula} className="flex-col py-2">
        {!edit ? (
          <div>
            <span className="block">Cedula: {persona.cedula}</span>
            <span className="block">
              Primer Nombre: {persona.primer_nombre}
            </span>
            <span className="block">
              Segundo Nombre: {persona.segundo_nombre}
            </span>
            <span className="block">Sexo: {persona.sexo}</span>
            <span className="block">Edad: {persona.edad}</span>
            <span className="block">Email: {persona.email}</span>
            <span className="block">Direccion: {persona.direccion}</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <input
              type="number"
              name="cedula"
              placeholder={persona.cedula}
              value={formData.cedula}
              onChange={handleChange}
              className="block border border-gray-300 rounded p-1 mb-2"
            />
            <input
              type="text"
              name="primer_nombre"
              placeholder={persona.primer_nombre}
              value={formData.primer_nombre}
              onChange={handleChange}
              className="block border border-gray-300 rounded p-1 mb-2"
            />
            <input
              type="text"
              name="segundo_nombre"
              placeholder={persona.segundo_nombre}
              value={formData.segundo_nombre}
              onChange={handleChange}
              className="block border border-gray-300 rounded p-1 mb-2"
            />
            <input
              type="text"
              name="sexo"
              placeholder={persona.sexo}
              value={formData.sexo}
              onChange={handleChange}
              className="block border border-gray-300 rounded p-1 mb-2"
            />
            <input
              type="text"
              name="edad"
              placeholder={persona.edad}
              value={formData.edad}
              onChange={handleChange}
              className="block border border-gray-300 rounded p-1 mb-2"
            />
            <input
              type="text"
              name="email"
              placeholder={persona.email}
              value={formData.email}
              onChange={handleChange}
              className="block border border-gray-300 rounded p-1 mb-2"
            />
            <input
              type="text"
              name="direccion"
              placeholder={persona.direccion}
              value={formData.direccion}
              onChange={handleChange}
              className="block border border-gray-300 rounded p-1 mb-2"
            />
            <div className="inline-block ml-0">
             <button className="bg-gray-500 text-white py-1 px-1 rounded my-2" onClick={() => handleUpdate(persona.id)}>Cambiar</button>
             </div>
          </div>
         
        )}
        <div className="flex">
          <button
            className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
            onClick={() => setEdit(!edit)}
          >
            Modificar
          </button>
          <button
            className="bg-red-500 text-white py-1 px-2 rounded"
            onClick={() => handleDelete(persona.id)}
          >
            Borrar
          </button>
        </div>
      </li>
    </>
  );
}

export default CardPersona;
