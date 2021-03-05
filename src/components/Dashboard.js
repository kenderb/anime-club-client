import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import AnimeCard from './AnimeCard';
import { getUserFavorites } from '../actions';

const animeList = [
  {
    id: 1,
    title: 'Fullmetal Alchemist: Brotherhood',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
  },
  {
    id: 2,
    title: 'Shingeki no Kyojin: The Final Season',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
  },
  {
    id: 3,
    title: 'Steins;Gate',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg',
  },
  {
    id: 4,
    title: 'Hunter x Hunter (2011)',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/11/33657.jpg',
  },
  {
    id: 5,
    title: 'Mob Psycho 100 II',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1918/96303.jpg',
  },
];
const Dashboard = ({ user, favorites, getUserFavorites }) => {
  if (!user.loggedIn) return <Redirect to="/" />;

  useEffect(() => {
    getUserFavorites({ userId: user.id });
  }, []);

  console.log(favorites);
  return (
    <div>
      <h1>
        Hello
        {' '}
        {user.name}
      </h1>
      {animeList.map(anime => (
        <AnimeCard
          key={anime.id}
          anime={anime}
        />
      ))}
    </div>
  );
};
const mapStateToprops = state => ({
  user: state.user,
  favorites: state.favorites,
});

Dashboard.propTypes = {
  user: PropType.instanceOf(Object).isRequired,
  getUserFavorites: PropType.func.isRequired,
  favorites: PropType.instanceOf(Array).isRequired,
};

export default connect(mapStateToprops, { getUserFavorites })(Dashboard);
