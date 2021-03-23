import Formulario from "./Componentes/Formulario";
import ListadoPersonajes from "./Componentes/ListadoPersonajes";
import TotalPersonajes from "./Componentes/TotalPersonajes";
import { ContextoTotal } from "./contextos/ContextoTotal";
import { useState } from "react";

function App() {
  const [totalPersonajes,  setTotalPersonajes] = useState([]);
  return (
    <>
    <ContextoTotal.Provider value={{totalPersonajes, setTotalPersonajes}}>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Personajes de Los Simpsons</h1>
        </header>

        <Formulario />

        <section className="listado">

          <TotalPersonajes />
          <ListadoPersonajes />

        </section>
      </div>
      </ContextoTotal.Provider>
    </>
  );
}

export default App;
