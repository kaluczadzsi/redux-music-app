import { useDispatch } from 'react-redux';
import { fetchSongs } from '../../songSlice';
import store from '../../store/store';
import { useEffect, useState } from 'react';
import SongView from '../../components/SongView';

const Home = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      ></input>
      <button onClick={() => dispatch(fetchSongs(title))}>search</button>
      <SongView />
    </>
  );
};

export default Home;
