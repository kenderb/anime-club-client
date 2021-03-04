import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import './AnimeCard.style.css';
import { setFavoriteAnime } from '../actions';

const AnimeCard = ({
  user, anime, setFavoriteAnime, favorites,
}) => {
  const { title, url_image: imageUrl, id } = anime;
  const handleFavorite = () => {
    setFavoriteAnime({ userId: user.id, animeId: id });
  };

  return (
    <div>
      <h1>
        {title}
      </h1>
      <img src={imageUrl} alt={title} className="anime-image" />
      {
        favorites.includes(id) ? <button type="button" disabled> it is in your favorites</button>
          : <button type="button" onClick={handleFavorite}>Mark as favorite</button>
      }
    </div>
  );
};
AnimeCard.propTypes = {
  anime: PropType.instanceOf(Object).isRequired,
  setFavoriteAnime: PropType.func.isRequired,
  user: PropType.instanceOf(Object).isRequired,
  favorites: PropType.instanceOf(Array).isRequired,
};

const mapStateToprops = state => ({
  user: state.user,
  favorites: state.favorites,
});

export default connect(mapStateToprops, { setFavoriteAnime })(AnimeCard);
