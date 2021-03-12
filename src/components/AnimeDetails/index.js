import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { ChevronBackOutline, SearchOutline } from 'react-ionicons';
import { fetchAnimeDetail, setFavoriteAnime } from '../../actions';
import './AnimeDetails.style.css';

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
    <div className="detail-container">
      <h1 className="d-flex">
        <Link to="/">
          <ChevronBackOutline
            color="#00000"
            height="25px"
            width="25px"
          />
        </Link>
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
        favorites.includes(Number(id)) ? <button type="button" className="favorite-button-base favorite-desable " disabled> Mark as favorite</button>
          : <button type="button" onClick={handleFavorite} className="favorite-button-base">Mark as favorite</button>
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
