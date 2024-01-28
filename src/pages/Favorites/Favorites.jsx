import React, { useContext } from 'react';
import { FavoritesContext } from '../../FavoriteContext';

const Favorites = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const removeSong = (song) => {
    setFavorites(favorites.filter((el) => el.id !== song.id));
  };

  return (
    <div>
      {favorites.map((item) => (
        <div className="row" key={item.id}>
          <div className="top">
            <div>{item.title}</div>
            <button onClick={() => removeSong(item)} className="btn remove">
              remove from favorites
            </button>
          </div>
          <div>
            {item['artist-credit'].map((el, index) => (
              <p key={index}>{el.name}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
