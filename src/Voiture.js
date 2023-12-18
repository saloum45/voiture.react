const Voiture = ({ voiture, age }) => {
  return (
    <tr>
      <td>{voiture.id}</td>
      <td>{voiture.marque}</td>
      <td>{voiture.couleur}</td>
      <td>{voiture.annee}</td>
      <td>{age} ans</td>
      <td>
        <button className="btn btn-primary">Afficher/Cacher</button>
      </td>
    </tr>
  );
};

export default Voiture;
