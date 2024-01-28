import React, { useState, useContext } from 'react';
import { FavoritesContext } from '../FavoriteContext';

const SongItem = ({ item }) => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const isAdded = favorites.some((el) => el.id === item.id);

  const addToFavorites = () => {
    if (!isAdded) {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };

  const removeFromFavorites = () => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((el) => el.id !== item.id)
    );
  };

  return (
    <div className="row" key={item.id}>
      <div className="top">
        <div>{item.title}</div>
        <button
          onClick={() => (isAdded ? removeFromFavorites() : addToFavorites())}
          className="btn add"
        >
          {isAdded ? 'remove from favorites' : 'add to favorites'}
        </button>
      </div>
      <div>
        {item['artist-credit'].map((el, index) => (
          <p key={index}>{el.name}</p>
        ))}
      </div>
    </div>
  );
};

export default SongItem;
