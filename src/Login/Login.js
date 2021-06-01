import React from 'react'
import { loginUrl } from '../spotify'
import "./Login.css"

const Login = () => {
    return (
        <div className="login">
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" alt="spotify logo" />

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
