import React from "react";

function Login() {
  const handleClick = async () => {
    const client_id = "ad72028e41d549128a554688bdf2acb0";
    const redirect_uri = "https://madhav-music-player.netlify.app/";
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
    <div className="bg-red-950 justify-center flex w-screen h-screen text-white">
    <div className="  flex-col flex  items-center justify-center">
      <h1 className="mb-3 text-3xl font-medium font-serif"> Login for use the App</h1>
      <button
        onClick={handleClick}
        className="bg-red-300 py-2 text-black font-serif font-semibold text-lg hover:bg-red-400 hover:scale-110 px-20 rounded-lg"
      >
        {" "}
        Login{" "}
      </button>
    </div>
    </div>
      
  );
}

export default Login;
