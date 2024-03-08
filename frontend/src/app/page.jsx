import FormPersonas from "./components/FormPersonas";
import ListPersonas from "./components/ListPersonas";

export const dynamic = "force-dynamic"

function HomePage() {
  return (
    <>
    <h1 className="text-3xl font-bold mb-4">Mi App Personas</h1>
    <div className="container mx-auto ">
      <div className="container mx-auto p-4 flex justify-center">
      <FormPersonas />
      <ListPersonas />
      </div>
    </div>
    </>
  );
}

export default HomePage;
