import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Playlist from "./Playlist";
import logo from "../images/logo.png";
import { addPlaylist } from "../utils/Slice/userPlaylistSlice";

function Home() {
  const dispatch = useDispatch();

  const token = useSelector((store) => store?.token?.tokenData);

  const selector = useSelector((store) => store.userPlaylists.userPlaylist);
  const [playlistData, setPlaylistData] = useState([]);

  const data = async () => {
    const responce = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    await setPlaylistData(responce?.data?.items);
    console.log(playlistData);
    // dispatch(addPlaylist(responce?.data?.items));
  };

  const playlistPhoto = playlistData[0]?.images[1]?.url;
  const playlistName = playlistData[0]?.name
  console.log(playlistName)

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <div className="hidden  md:text-white bg-red-950  h-[100vh]">
        <section className="hidden md:flex-col md:flex md: md:items-center  md:bg-black  md:w-3/12">
          <section className="md:h-1/4 md:flex md:flex-col md:justify-between">
            <div className="md:mt-10 md:mb-16">
              <img
                src={logo}
                alt="logo"
                className="md:w-16 md:h-16  md:rounded-full "
              />
            </div>
            <div className="md:flex md:flex-col md:gap-2">
              <div className="md:text-gray-500 md:items-start">MENU</div>
              <button className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Home</span>
              </button>
              <button className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">trends</span>
              </button>
              <button className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Library</span>
              </button>
              <button className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Discover</span>
              </button>
            </div>
          </section>
          <section className="md:h-3/4 md:mb-10 md:flex md:flex-col md:justify-end gap-3">
            <div className="md:hover:underline">Setting</div>
            <div className="md:hover:underline">Logout</div>
          </section>
        </section>

        <section className="hidden">
          <div></div>
        </section>
      </div>

      {/* mobile screen */}
      <div className="bg-red-950 flex flex-col pt-5 flex-wrap justify-start items-center gap-3 h-[100vh]">
        <div className="w-60 bg-red-300 h-60">
          <img src={playlistPhoto} alt="playlist photo" />
        </div>
        
        <article className="text-white font-bold text-2xl">
          <div>{playlistName}</div>
        </article>


        <article></article>
        <article></article>
      </div>
    </div>
  );
}

export default Home;

// import React from 'react'

// function Home() {
//   return (
// <div className="flex-col text-center  bg-red-950 w-auto h-[100vh]">
//   <div className="text-white pt-64 mb-4 font-semibold font-serif text-4xl">
//     Turn up the vibe
//   </div>
//   <button
//     onClick={handleClick}
//     className="text-white boder border shadow-white shadow-md p-2 rounded-xl  transition hover:scale-110"
//   >
//     Explore the Library
//   </button>
// </div>
//   )
// }

// export default Home
