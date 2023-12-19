import React, { useState } from "react";

const Voiture = ({ voiture, age }) => {
  const [showAge, setShowAge] = useState(false);

  const afficherage = () => {
    setShowAge(!showAge);
  };

  return (
    <tr>
      <td>{voiture.id}</td>
      <td>{voiture.marque}</td>
      <td>{voiture.couleur}</td>
      <td>{voiture.annee}</td>
      <td>{showAge ? age + " ans" : null}</td>
      <td>
        <button className="btn btn-primary" onClick={afficherage}>
          {showAge ? "Cacher" : "Afficher"}
        </button>
      </td>
    </tr>
  );
};

export default Voiture;
