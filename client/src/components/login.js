import React from 'react'
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=2bb574410c7f4e1bb11e1a9d4d8908a3&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const Login = () => {
    return (
        <div>
            <div className="">
                <a href={AUTH_URL} className="bg-black rounded-full text-white px-5 py-1"> Login with spotify</a>
            </div>
        </div>
    )
}

export default Login
