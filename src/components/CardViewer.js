import React from 'react';



function CardViewer({cards}) {
  return (
    <div>
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Front</th>
      <th scope="col">Back</th>
    </tr>
  </thead>
  <tbody>
  {cards.map((card)=>{
      return <tr>
      <th scope="row">{card.id}</th>
      <td>{card.front}</td>
      <td>{card.back}</td>
      
    </tr>
  })}
    
  </tbody>
</table>

    </div>
  );
}

export default CardViewer;
