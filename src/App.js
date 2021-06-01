import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

  }, [])

  return (
    <div className="app">
      {
        token ? (
          <h2>hi</h2>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
