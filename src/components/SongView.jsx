import React from 'react';
import { useSelector } from 'react-redux';

const SongView = () => {
  const song = useSelector((state) => state.song);
  const groups = song.songs['release-groups'];

  return (
    <div className="m-16">
      {song.loading && <div>Loading...</div>}
      {!song.loading && song.error && <div>Error: {song.error}</div>}
      {!song.loading && Object.keys(song.songs).length ? (
        <div className="song-container">
          {groups.map((item) => (
            <div className="row" key={item.id}>
              <div>{item.title}</div>
              <div>
                {item['artist-credit'].map((el, index) => (
                  <p key={index}>{el.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default SongView;
