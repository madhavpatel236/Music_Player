import React from 'react'

function Login() {

  const handleClick = async () => {
    const client_id = "ad72028e41d549128a554688bdf2acb0";
    const redirect_uri = "http://localhost:5173/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div>
      <button onClick={handleClick} className='bg-red-400 flex justify-center items-center'> Click Here </button>
    </div>
  )
}

export default Login
