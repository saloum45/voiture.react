// MesVoitures.js
import React, { Component, useState } from "react";
import Voiture from "./Voiture"; // Import du composant Voiture

class MesVoitures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voitures: [
        { id: 1, image: "", marque: "Toyota", couleur: "Rouge", annee: 1986 },
        { id: 2, image: "", marque: "Honda", couleur: "Bleu", annee: 2002 },
        { id: 3, image: "", marque: "Ford", couleur: "Vert", annee: 2014 },
        { id: 4, image: "", marque: "BMW", couleur: "violet", annee: 2020 },
      ],
    };
  }

  getAge = (anneeFabrication) => {
    const ActuelleDate = new Date().getFullYear();
    const Age = ActuelleDate - anneeFabrication;
    return Age;
  };

  render() {
    return (
      <div className="Mesvoitures w-75 m-auto">
        <h1 id="contentVoiture">Liste des Voitures</h1>
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Marque</th>
              <th scope="col">Couleur</th>
              <th scope="col">Année</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.voitures.map((voiture, index) => (
              <Voiture voiture={voiture} age={this.getAge(voiture.annee)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default MesVoitures;
