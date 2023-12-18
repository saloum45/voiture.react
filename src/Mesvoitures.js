// MesVoitures.js
import React, { Component, useState } from "react";
import Voiture from "./Voiture"; // Import du composant Voiture

class MesVoitures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voitures: [
        { id: 1, image: "", marque: "Toyota", couleur: "Rouge", annee: 2020 },
        { id: 2, image: "", marque: "Honda", couleur: "Bleu", annee: 2019 },
        { id: 3, image: "", marque: "Ford", couleur: "Vert", annee: 2018 },
        { id: 4, image: "", marque: "BMW", couleur: "violet", annee: 2023 },
      ],
    };
  }
  // const {nom , setnom}= useState("bah")

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
            </tr>
          </thead>
          <tbody>
            {this.state.voitures.map((voiture, index) => (
              <Voiture voiture={voiture} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default MesVoitures;
