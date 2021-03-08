import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import AnimeCard from '../AnimeCard';
import { getFavoritesList, getAllAnimes } from '../../actions';
import './Dashboard.style.css';

const Dashboard = ({
  user, getFavoritesList, animes, getAllAnimes,
}) => {
  const [currentNumber, setCurrentUser] = useState(1);

  useEffect(() => {
    getFavoritesList({ userId: user.id });
    getAllAnimes();
  }, []);

  const handleCurrentSelect = id => {
    setCurrentUser(id);
  };
  if (!user.loggedIn) return <Redirect to="/login" />;
  return (
    <div>
      <h1 className="dashboard-title">
        Animes
      </h1>
      <ul className="anime-wrapper d-flex">
        {animes.map(anime => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            onClickImage={() => handleCurrentSelect(anime.id)}
          />
        ))}
      </ul>
      <div className="anime-count-container">
        {currentNumber}
        /
        {animes.length}
      </div>
    </div>
  );
};
const mapStateToprops = state => ({
  user: state.user,
  animes: state.animes,
});

Dashboard.propTypes = {
  user: PropType.instanceOf(Object).isRequired,
  animes: PropType.instanceOf(Array),
  getFavoritesList: PropType.func.isRequired,
  getAllAnimes: PropType.func.isRequired,
};
Dashboard.defaultProps = {
  animes: [],
};
export default connect(mapStateToprops, { getFavoritesList, getAllAnimes })(Dashboard);
