import CardPersona from "./CardPersona";

async function loadPerson() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/Personas/`,);
  const personas = await res.json();
  return personas;
}

async function ListPersonas() { 
  const personas = await loadPerson();

  return ( 
    <div className="w-1/3 ml-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Listado de Personas</h2>
          <ul className="divide-y divide-gray-200">
            {personas.map((persona) => (
              <CardPersona persona={persona} key={persona.id}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListPersonas;
