import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Beer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [beer, setBeer] = useState(null);

  const getBeer = async () => {
    try {
      const res = await fetch(`https://api.sampleapis.com/beers/ale/${id}`);
      const data = await res.json();
      setBeer(data);
    } catch (error) {
      console.error("Error fetching beer:", error);
    }
  };

  useEffect(() => {
    getBeer();
  }, [id]);

  return (
    <div className="beer-details">
      {beer ? (
        <div className="beer-container">
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <img src={beer.image} alt={beer.name} />
          <br />
          <button onClick={() => navigate(-1)}>Volver Atrás</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Beer;
