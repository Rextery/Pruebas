"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function FormPersonas() {
  const [formData, setFormData] = useState({
    cedula: "",
    primer_nombre: "",
    segundo_nombre: "",
    sexo: "",
    edad: "",
    email: "",
    direccion: "",
  });
  const router = useRouter()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Personas/`,
      {
        method: "POST",
        body: JSON.stringify(formData ),
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
    const data = await res.json();
    router.refresh()
    resetForm()
  };

  const resetForm = () => {
    setFormData({
      cedula: "",
      primer_nombre: "",
      segundo_nombre: "",
      sexo: "",
      edad: "",
      email: "",
      direccion: "",
    });
  };

  return (
    <div className="w-1/3">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Agregar personas
        </h1>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="cedula"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Cédula:
            </label>
            <input
              type="text"
              id="cedula"
              name="cedula"
              pattern="[0-9]+" 
              title="Ingrese solo números"
              value={formData.cedula}
              onChange={handleChange}
              className="border p-2 w-full"
              required
              maxLength="10"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="primer_Nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Primer nombre:
            </label>
            <input
              type="text"
              id="primer_nombre"
              name="primer_nombre"
              pattern="[A-Za-z\s]+" 
              title="Ingrese solo letras y espacios"
              value={formData.primer_nombre}
              onChange={handleChange}
              className="border p-2 w-full"
              required
              maxLength="20"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="segundo_nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Segundo nombre:
            </label>
            <input
              type="text"
              id="segundo_nombre"
              name="segundo_nombre"
              pattern="[A-Za-z\s]+" 
              title="Ingrese solo letras y espacios"
              value={formData.segundo_nombre}
              onChange={handleChange}
              className="border p-2 w-full"
              maxLength="20"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="sexo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Sexo:
            </label>
            <select
              id="sexo"
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            >
              <option value="">Seleccione...</option>
              <option value="H">Hombre</option>
              <option value="M">Mujer</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="edad"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Edad:
            </label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="border p-2 w-full"
              required
              max="110"
              min="0"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
              required
              maxLength="30"
              pattern="[-a-zA-Z0-9~!$%^&*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?"
              
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="direccion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Dirección:
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="border p-2 w-full"
              required
              maxLength="30"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPersonas;
