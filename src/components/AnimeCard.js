import React from 'react';
import PropType from 'prop-types';
import './AnimeCard.style.css';

const AnimeCard = ({ anime }) => {
  const { title, imageUrl, id } = anime;
  const handleFavorite = () => {
    console.log(`Marking ---${title}--- as favorite with id of ${id}`);
  };
  return (
    <div>
      <h1>
        {title}
      </h1>
      <img src={imageUrl} alt={title} className="anime-image" />
      <button type="button" onClick={handleFavorite}>Mark as favorite</button>
    </div>
  );
};
AnimeCard.propTypes = {
  anime: PropType.instanceOf(Object).isRequired,
};

export default AnimeCard;
