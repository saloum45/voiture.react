// const Voiture = ({ voitures }) => {
//    return (
//     <table>
//       <thead>
//         <tr>
//           <th>Marque</th>
//           <th>Couleur</th>
//           <th>Année</th>
//         </tr>
//       </thead>
//       <tbody>
//         {voitures.map((voiture, index) => (
//           <tr key={index}>
//             <td>{voiture.marque}</td>
//             <td>{voiture.couleur}</td>
//             <td>{voiture.annee}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
// );
// }

// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Marque</th>
//       <th scope="col">Couleur</th>
//       <th scope="col">Annee de fabrication</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>

//   </tbody>
// </table>;

const Voiture = ({ voiture }) => {
  return (
    <tr>
      <td>{voiture.id}</td>
      <td>{voiture.marque}</td>
      <td>{voiture.couleur}</td>
      <td>{voiture.annee}</td>
    </tr>
  );
};

export default Voiture;
