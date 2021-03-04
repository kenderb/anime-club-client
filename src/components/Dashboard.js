import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import AnimeCard from './AnimeCard';
import animeList from './constans';
import { getFavoritesList } from '../actions';

const Dashboard = ({ user, getFavoritesList }) => {
  if (!user.loggedIn) return <Redirect to="/" />;

  useEffect(() => {
    getFavoritesList({ userId: user.id });
  }, []);

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
});

Dashboard.propTypes = {
  user: PropType.instanceOf(Object).isRequired,
  getFavoritesList: PropType.func.isRequired,
};
export default connect(mapStateToprops, { getFavoritesList })(Dashboard);
