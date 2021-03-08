import React, { useState } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Dashboard.style.css';
import AnimeCard from './AnimeCard';

const FavoriteList = ({ favorites, user, animes }) => {
  const myfavorites = animes.filter(anime => favorites.includes(anime.id));
  const [currentNumber, setCurrentUser] = useState(1);
  const handleCurrentSelect = id => {
    setCurrentUser(id);
  };
  if (!user.loggedIn) return <Redirect to="/" />;

  return (
    <div>
      <h1 className="dashboard-title">
        My favorite List:
      </h1>
      <ul className="anime-wrapper d-flex">
        {
        myfavorites.map(anime => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            onClickImage={() => handleCurrentSelect(anime.id)}
          />
        ))
      }
      </ul>
      <div className="anime-count-container">
        {currentNumber}
        /
        {myfavorites.length}
      </div>
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
