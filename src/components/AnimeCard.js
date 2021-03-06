import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import './AnimeCard.style.css';
import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  const { title, url_image: imageUrl, id } = anime;

  return (
    <li className="anime-card">
      <h1>
        {title}
      </h1>
      <img src={imageUrl} alt={title} className="anime-image" />
      <Link to={`/animes/${id}`}> See more </Link>
    </li>
  );
};
AnimeCard.propTypes = {
  anime: PropType.instanceOf(Object).isRequired,
};

const mapStateToprops = state => ({
  user: state.user,
  favorites: state.favorites,
});

export default connect(mapStateToprops)(AnimeCard);
