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
import { Link } from "react-router-dom";
import { showsongID } from "../utils/Slice/songIDSlice";
import { showSongInfo } from "../utils/Slice/currentSongInfoSlice";

function Home() {
  const dispatch = useDispatch();

  const token = useSelector((store) => store?.token?.tokenData);

  const currentPlaylist = useSelector(
    (store) => store.userPlaylists.userPlaylist
  );

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

  // highlight color for selected song

  const [select, setSelect] = useState();

  useEffect(() => {
    data();
    fetchData();
  }, []);

  // ---------------------------------------------------------------------

  //  for the mobile and tab music controll

  const [musicIndex, setMusicIndex] = useState();
  const [currentMusicIndex, setCurrentMusicIndex] = useState(false);
  const songInfo = useSelector((store) => store.currentSongInfo.apiData);

  // console.log(songInfo)

  const handlePrevBtn = () => {
    const currentIndex = currentPlaylist.findIndex(
      (currentPlaylist) => currentPlaylist.id === songInfo.id
    );
    // console.log("currentIndex: " + currentIndex);
    const prevIndex = currentIndex > 0 && currentIndex - 1; // Loop back to the last track if at the beginning
    // console.log("prevIndex: " + prevIndex);
    setMusicIndex(prevIndex);
    // console.log("index: " + musicIndex);
    dispatch(showSongInfo(currentPlaylist[prevIndex]));
  };

  const handlenextBtn = () => {
    const currentIndex = currentPlaylist.findIndex(
      (currentPlaylist) => currentPlaylist.id === songInfo.id
    );
    const nextIndex = currentIndex > 0 && currentIndex + 1; // Loop back to the last track if at the beginning
    setMusicIndex(nextIndex);
    // console.log("index: " + musicIndex);
    dispatch(showSongInfo(currentPlaylist[nextIndex]));
  };
  const currentMusic = useSelector((store) => store?.currentSongInfo?.apiData);
  const currentMusicID = currentMusic?.id;

  dispatch(showsongID(currentMusicID));

  const handleSong = (data) => {
    dispatch(showSongInfo(data));
  };
  // console.log(songInfo?.name);

  // -----------------------------------------------------------------
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
              <Link to="/commingsoon" className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Home</span>
              </Link>
              <Link to="/commingsoon" className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">trends</span>
              </Link>
              <Link to="/commingsoon" className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Library</span>
              </Link>
              <Link to="/commingsoon" className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Discover</span>
              </Link>
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
        {/* playlist name */}
        <article className="text-white mt-3 mb-2 font-bold text-2xl">
          <div> Playlist- {playlistName}</div>
        </article>

        {/* img */}
        <article className="w-60 h-60 mt-3">
          <img
            src={
              songInfo?.album?.images[0].url || playlistData[0]?.images[1]?.url
            }
            alt="photo"
            className="rounded-2xl"
          />
        </article>

        {/* song Name */}
        <article className="text-white mt-3 mb-2 max-w-[90vw] text-center line-clamp-2 font-semibold text-xl">
          <div>{songInfo?.name}</div>
        </article>

        {/* next, prev btn */}
        <article className="flex justify-center gap-x-2 items-center align-middle w-screen mb-2 rounded-lg ">
          <button onClick={handlePrevBtn}>
            <img src={prevBtn} className="w-14 h-14  " />
          </button>
          <button>
            <img src={pauseBtn} className="w-16 h-16 " />
          </button>
          <button onClick={handlenextBtn}>
            <img src={nextBtn} className="w-14 h-14" />
          </button>
        </article>

        {/* list of songs */}
        <article className="bg-red-950 p-3 flex flex-col h-auto rounded-xl text-white max-w-[90vw]">
          {songs.map((eachSong) => (
            // console.log(songs)

            <button
              onClick={() => handleSong(eachSong?.track)}
              key={eachSong?.track?.id}
              className="flex bottom-0 gap-3 mb-4   "
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
