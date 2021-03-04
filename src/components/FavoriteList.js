import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const FavoriteList = ({ favorites, user, animes }) => {
  const myfavorites = animes.filter(anime => favorites.includes(anime.id));

  if (!user.loggedIn) return <Redirect to="/" />;

  return (
    <div>
      <h1>
        My favorite List:
      </h1>
      <ul>
        {
        myfavorites.map(anime => (
          <li key={anime.id}>
            <img src={anime.url_image} alt={anime.title} className="anime-image" />
          </li>
        ))
      }
      </ul>
    </div>
  );
};

const mapStateToprops = state => ({
  favorites: state.favorites,
  user: state.user,
  animes: state.animes,
});

FavoriteList.propTypes = {
  favorites: PropType.instanceOf(Array).isRequired,
  animes: PropType.instanceOf(Array).isRequired,
  user: PropType.instanceOf(Object).isRequired,
};

export default connect(mapStateToprops)(FavoriteList);
