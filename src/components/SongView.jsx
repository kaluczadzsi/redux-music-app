import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SongList from './SongList';

const SongView = () => {
  const song = useSelector((state) => state.song);
  const groups = song.songs['release-groups'];

  return (
    <div className="m-16">
      {song.loading && <div>Loading...</div>}
      {!song.loading && song.error && (
        <div className="error">Error: {song.error}</div>
      )}
      {!song.loading && Object.keys(song.songs).length ? (
        <SongList groups={groups} />
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default SongView;
