import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchAnimeDetail, setFavoriteAnime } from '../actions';

const AnimeDetails = ({
  match, animeDetails, user, setFavoriteAnime, favorites,
  fetchAnimeDetail,
}) => {
  const { id } = match.params;
  const { title, url_image: imageUrl, description } = animeDetails;

  const handleFavorite = () => {
    setFavoriteAnime({ userId: user.id, animeId: id });
  };

  useEffect(() => {
    fetchAnimeDetail(id);
  }, [fetchAnimeDetail]);

  if (!user.loggedIn) return <Redirect to="/" />;

  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} className="anime-image" />
      <p>{description}</p>
      {
        favorites.includes(Number(id)) ? <button type="button" disabled> it is in your favorites</button>
          : <button type="button" onClick={handleFavorite}>Mark as favorite</button>
      }
    </div>
  );
};

AnimeDetails.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  animeDetails: PropTypes.instanceOf(Object).isRequired,
  setFavoriteAnime: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  favorites: PropTypes.instanceOf(Array).isRequired,
  fetchAnimeDetail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites,
  animeDetails: state.animeDetails,
});

export default connect(mapStateToProps, { fetchAnimeDetail, setFavoriteAnime })(AnimeDetails);
