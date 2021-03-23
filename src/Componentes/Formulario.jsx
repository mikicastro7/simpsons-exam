import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextoTotal } from "../contextos/ContextoTotal";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");

  const contextoTotal = useContext(ContextoTotal);

  const setNombreHandler = (valor) => {
    setNombre(valor);
  };
  const setApellidoHandler = (valor) => {
    setApellido(valor);
  };
  const setEdadHandler = (valor) => {
    setEdad(valor);
  };

  const crearPersonaje = () => {

  };

  return (
    <section className="crear-personaje row">
      <form className="col" onSubmit={crearPersonaje}>
        <div className="form-group row align-items-center">
          <label htmlFor="nombre" className="col-1">Nombre: </label>
          <input value={nombre} onChange={(e) => setNombreHandler(e.target.value)} type="text" className="form-control col-4" id="nombre" />
          <label htmlFor="apellido" className="col-1">Apellido: </label>
          <input value={apellido} onChange={(e) => setApellidoHandler(e.target.value)} type="text" className="form-control col" id="apellido" />
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="edad" className="col-1">Edad: </label>
          <select onChange={(e) => setEdadHandler(e.target.value)} value={edad} id="edad" className="form-control col-4">
            <option value="">Selecciona edad</option>
            <option value="menos de 5 años">menos de 5 años</option>
            <option value="menos de 10 años">menos de 10 años</option>
            <option value="menos de 20 años">menos de 20 años</option>
            <option value="menos de 40 años">menos de 40 años</option>
            <option value="menos de 60 años">menos de 60 años</option>
            <option value="menos de 80 años">menos de 80 años</option>
            <option value="menos de 100 años">menos de 100 años</option>
            <option value="menos de 110 años">menos de 110 años</option>
          </select>
          <button className="btn btn-info col" type="submit">Añadir personaje</button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
