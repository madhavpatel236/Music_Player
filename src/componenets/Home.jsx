import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import logo from "../images/logo.png";
import nextBtn from "../images/nextBtn.png";
import prevBtn from "../images/previousBtn.png";
import pauseBtn from "../images/playBtn.png";
import ContentPage from "./ContentPage";
import AudioCard from "./AudioCard";
import { addPlaylist } from "../utils/Slice/userPlaylistSlice";

function Home() {
  const dispatch = useDispatch();

  const token = useSelector((store) => store?.token?.tokenData);

  const selector = useSelector((store) => store.userPlaylists.userPlaylist);
  const [playlistData, setPlaylistData] = useState([]);
  const [songs, setSongs] = useState([]);

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
    // console.log(playlistData);
    // dispatch(addPlaylist(responce?.data?.items));
  };

  const fetchData = async () => {
    const data = await axios.get(
      `https://api.spotify.com/v1/playlists/3HAEv4Xj6FcXlQxeae9qIh`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const songs = data?.data?.tracks?.items;
    setSongs(songs);
    const listOfSongData = songs.map((eachSongData) =>
      // console.log(eachSongData?.track)
      dispatch(addPlaylist(eachSongData?.track))
    );
  };

  const playlistPhoto = playlistData[0]?.images[1]?.url;
  const playlistName = playlistData[0]?.name;
  // console.log(playlistName);

  useEffect(() => {
    data();
    fetchData();
  }, []);

  // console.log(songs);

  return (
    <div className="">
      {/* tablet and laptop screen  */}
      <div className="hidden md:text-white md:flex md:w-screen md:min-h-screen md:bg-red-950 ">
        {/* left side navigation bar */}
        <section className="md:flex-col md:flex md: md:items-center md:h-screen md:bg-black  md:w-2/12">
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

        {/* middle part of the Home screen */}
        <ContentPage playlist={playlistData} playlistSongs={songs} />

        {/* right side of the screen media player */}
        <section className="xl:flex-col xl:mr-10 xl:flex xl xl:items-center xl:h-screen xl:bg-red-950  xl:w-3/12">
          <AudioCard />
        </section>
      </div>

      {/* mobile screen */}
      <div className="md:hidden bg-red-800 flex flex-col pt-5 flex-wrap justify-start items-center gap-3 w-[100vw] min-h-[100vh]">
        <article className="w-60 h-60 mt-3">
          <img
            src={playlistPhoto}
            alt="playlist photo"
            className="rounded-2xl"
          />
        </article>

        <article className="text-white mt-3 mb-2 font-bold text-2xl">
          <div>{playlistName}</div>
        </article>

        <article className="flex justify-center gap-x-2 items-center align-middle w-screen mb-2 rounded-lg ">
          <img src={prevBtn} className="w-14 h-14  " />
          <img src={pauseBtn} className="w-16 h-16 " />
          <img src={nextBtn} className="w-14 h-14" />
        </article>

        <article className="bg-red-950 p-3 flex flex-col h-auto rounded-xl text-white max-w-[90vw]">
          {songs.map((eachSong) => (
            // console.log(eachSong?.track?.album?.images[0].url)

            <button
              key={eachSong?.track?.id}
              className="flex bottom-0 gap-3 mb-4 "
            >
              <img
                src={eachSong?.track?.album?.images[0].url}
                className="w-10 h-10x rounded-md mr-3"
              />
              <span className="flex justify-between w-full p-1 ">
                <span className="flex flex-col text-start">
                  <span className=" line-clamp-1 font-semibold ">
                    {eachSong?.track?.name}
                  </span>
                  <span className=" line-clamp-1 text-sm ">
                    {eachSong?.track?.artists[0].name}
                  </span>
                </span>
                <span className="mr-2 flex items-end mb-1 min-w-16">
                  {(eachSong?.track?.duration_ms / 60000).toFixed(2) +
                    " " +
                    "min"}
                </span>
              </span>
            </button>
          ))}
        </article>
      </div>
    </div>
  );
}

export default Home;
