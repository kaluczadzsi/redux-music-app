import React from 'react';
import SongItem from './SongItem';

const SongList = ({ groups }) => {
  return (
    <div className="song-container">
      {groups.map((item) => (
        <SongItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SongList;
