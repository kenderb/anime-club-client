import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import './AnimeCard.style.css';
import { setFavoriteAnime } from '../actions';

const AnimeCard = ({ user, anime, setFavoriteAnime }) => {
  const { title, imageUrl, id } = anime;
  const handleFavorite = () => {
    setFavoriteAnime({ userID: user.id, animeId: id });
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
  setFavoriteAnime: PropType.func.isRequired,
  user: PropType.instanceOf(Object).isRequired,
};

const mapStateToprops = state => ({
  user: state.user,
});

export default connect(mapStateToprops, { setFavoriteAnime })(AnimeCard);
