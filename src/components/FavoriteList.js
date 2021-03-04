import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import animeList from './constans';

const FavoriteList = ({ favorites, user }) => {
  const myfavorites = animeList.filter(anime => favorites.includes(anime.id));

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
            <img src={anime.imageUrl} alt={anime.title} className="anime-image" />
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
});

FavoriteList.propTypes = {
  favorites: PropType.instanceOf(Array).isRequired,
  user: PropType.instanceOf(Object).isRequired,
};

export default connect(mapStateToprops)(FavoriteList);
