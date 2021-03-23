import React from "react";

const ListadoPersonajes = () => {
  return (
    <section className="listado">
      <table className="personajes table table-bordered">
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Edad aprox.</th>
            <th>Gif</th>
          </tr>
        </thead>
        <tbody>
          <tr className="personaje">
            <td>Marge Simpson</td>
            <td>Menos de 50 años</td>
            <td><img className="gif" src="https://media4.giphy.com/media/26tjZvLX08nC7KTpm/giphy.gif?cid=8f9de43ba14aa7caf8bb1ec6fd2f035977fd22568b8a82a8&rid=giphy.gif&ct=g" alt="Marge Simpson" /></td>
          </tr>
          <tr className="personaje">
            <td>Lisa Simpson</td>
            <td>Menos de 10 años</td>
            <td><img className="gif" src="https://media2.giphy.com/media/3orieTkwE82zCJ6qFa/giphy.gif?cid=8f9de43b16d3e357ec0cf4301aa33ffb259ab268473454b8&rid=giphy.gif&ct=g" alt="Lisa Simpson" /></td>
          </tr>
          <tr className="personaje">
            <td>Mr Burns</td>
            <td>Menos de 110 años</td>
            <td><img className="gif" src="img/nubes.jpg" alt="Mr Burns" /></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default ListadoPersonajes;
