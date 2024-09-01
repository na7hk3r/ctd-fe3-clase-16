import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <h3>{data.name}</h3>
      <p>{data.tagline}</p>
      <img src={data.image} alt="beer-detail" />
      <Link to={`/beer/${data.id}`}>Ver más detalles</Link>
    </div>
  );
};

export default Card;