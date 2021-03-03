import React from 'react';
import PropType from 'prop-types';

const AnimeCard = ({ title, imageUrl }) => (
  <div>
    <h1>
      {title}
    </h1>
    <img src={imageUrl} alt={title} />
    <button type="button">See description</button>
  </div>
);
AnimeCard.propTypes = {
  title: PropType.string.isRequired,
  imageUrl: PropType.string.isRequired,
};

export default AnimeCard;
