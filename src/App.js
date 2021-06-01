import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);


      spotify.setAccessToken(_token);

      spotify.getMe()
        .then(user => {
          dispatch({
            type: "SET_USER",
            user: user,
          })
        })
    }

  }, [dispatch])

  console.log(user);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
