import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { ChevronBackOutline, SearchOutline } from 'react-ionicons';
import { fetchAnimeDetail, setFavoriteAnime } from '../../actions';
import './AnimeDetails.style.css';

const AnimeDetails = ({
  match, animeDetails, user, setFavoriteAnime, favorites,
  fetchAnimeDetail,
}) => {
  const { id } = match.params;
  const { title, url_image: imageUrl, description } = animeDetails;
  const history = useHistory();

  const handleFavorite = () => {
    setFavoriteAnime({ userId: user.id, animeId: id });
  };

  useEffect(() => {
    fetchAnimeDetail(id);
    history.goBack();
  }, [fetchAnimeDetail]);

  if (!user.loggedIn) return <Redirect to="/" />;

  return (
    <div className="detail-container">
      <h1 className="d-flex">
        <ChevronBackOutline
          color="#00000"
          height="25px"
          width="25px"
          onClick={() => history.goBack()}
        />
        {title}
        <SearchOutline
          color="#00000"
          height="25px"
          width="25px"
        />
      </h1>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      {
        favorites.includes(Number(id)) ? '' : <button type="button" onClick={handleFavorite} className="favorite-button-base">Mark as favorite</button>
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
