import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import './AnimeCard.style.css';
import { Link, useHistory } from 'react-router-dom';

const AnimeCard = ({ anime, onClickImage, previusPath }) => {
  const history = useHistory();
  const { title, url_image: imageUrl, id } = anime;
  const currentPath = previusPath === '/dashboard' ? 'Dashboard' : 'FavoriteList';

  return (
    <li className="anime-card" onClick={() => onClickImage(anime.id)} role="presentation">
      <img src={imageUrl} alt={title} className="anime-image" />
      <p>
        {title}
        <br />
        <Link to={`/animes/${id}`} onClick={() => history.push(`/animes/${id}`, { from: currentPath })}> See more </Link>
      </p>
    </li>
  );
};
AnimeCard.propTypes = {
  anime: PropType.instanceOf(Object).isRequired,
  previusPath: PropType.string,
  onClickImage: PropType.func,
};

AnimeCard.defaultProps = {
  onClickImage: () => {},
  previusPath: '',
};

const mapStateToprops = state => ({
  user: state.user,
  favorites: state.favorites,
});

export default connect(mapStateToprops)(AnimeCard);
