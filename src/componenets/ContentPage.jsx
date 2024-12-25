import React from "react";

import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function ContentPage(playlist) {
  const data = playlist;
  //   console.log(data.playlistSongs);
  const playlistPhoto = data?.playlist[0]?.images[0]?.url;

  return (
    <div className="md:bg-red-950 md:w-9/12 md:flex-col md:flex ">
      {/* nav */}
      <section className="w-auto flex justify-evenly  md:mt-6  md:p-4">
        <Link className="pt-1">Music</Link>
        <Link className="pt-1">Podcast</Link>
        <Link className="pt-1">Live</Link>
        <Link className="pt-1">Radio</Link>
        <input
          placeholder="search"
          className="md:bg-red-950  border pl-5 w-52 border-white p-1 rounded-full"
        />
      </section>

      {/* photos  */}
      <section className="md:flex md:mt-10 md:justify-center  ">
        <section
          className="md:relative  md:bg-cover md:bg-center md:shadow-md md:shadow-current md:h-80 md:w-10/12 md:flex md:rounded-2xl md:items-center md:justify-center md:text-white"
          style={{
            backgroundImage: `url(${playlistPhoto})`,
          }}
        >
          <div className="md:absolute md:inset-0  md:bg-opacity-50"></div>
          <div className="md:relative md:z-10 md:text-center">
            <h1 className="md:text-6xl md:font-bold md:mb-4">
              {data?.playlist[0]?.name}
            </h1>
            <p className=" md:text-xl line-clamp-1">
              {data?.playlist[0]?.description}
            </p>
          </div>
        </section>
      </section>

      {/* songs list */}
      <section className="md:mt-7 md:mb-6">
        <article className="md:bg-red-950  md:flex md:flex-col  md:rounded-xl md:text-white ">
          {/* Playlist name  */}
          <div className="md:font-bold md:ml-2 md:text-2xl">
            Playlist- {data?.playlist[0]?.name}
          </div>
        </article>
      </section>
      <section>
        <div className="  md:p-2 md:flex md:text-gray-400">
          <span className="md:text-start w-1/12   ">#</span>
          <span className="md:text-start w-5/12  ">TITLE</span>
          <span className="w-3/12  md:pl-3">ALBUM</span>
          <span className="w-3/12  flex justify-center">DURATION</span>
        </div>
        <div className="w-auto border border-gray-500"></div>

        {data.playlistSongs.map((eachSong, index) => (
          // console.log(index+1)
          <div className="md:w-full text- md:mt-3 p-2 md:flex md:justify-between">
            <span className="md:text-start w-1/12  ">{index + 1}</span>
            <span className="hidden md:text-start md:flex  md:w-5/12  ">
              <img
                src={`${eachSong?.track?.album?.images[0]?.url}`}
                className="hidden lg:w-16 lg:h-16"
              />
              <span className="md:line-clamp-1">{eachSong?.track?.name}</span>
            </span>
            <span className="w-3/12  md:line-clamp-1 pl-3">
              {eachSong?.track?.album?.name}
            </span>
            <span className="w-3/12  flex justify-center">
              {(eachSong?.track?.duration_ms / 60000).toFixed(2) + " " + "min"}
            </span>
          </div>
        ))}
      </section>

    </div>
  );
}

export default ContentPage;

// {
//   data?.playlistSongs?.map((eachSong, index) => {
//     // <div>  {index} </div>
//     console.log(index + 1);
//   });
// }

// {
//   /* song heading */
// }
// <div className="md:w-full bg-gray-600 md:mt-3 md:ml-6 p-2 md:flex md:justify-between">
//   <span className="md:text-start w-2/12 bg-pink-600 ">#</span>
//   <span className="md:text-start w-4/12 bg-pink-200 ">TITLE</span>
//   <span className="w-3/12 bg-blue-600">ALBUM</span>
//   <span className="w-3/12 bg-orange-700">DURATION</span>
// </div>;

// {
//   /* song */
// }
// <div className="md:ml-6 md:mt-3">
//   {data.playlistSongs.map((eachSong, index) => (
//     // console.log((eachSong?.track?.duration_ms)/60000)
//     <button className=" md:mb-6 md:w-full md:justify-between md:flex ">
//       <span className="md:text-start md:pl-3 md:text-xl md:w-2/12 ">
//         {index + 1}
//       </span>
//       <span className=" md:line-clamp-1 md:text-start md:flex md:justify-start text-start md:w-4/12 ">
//         <img
//           src={`${eachSong?.track?.album?.images[0]?.url}`}
//           className="md:w-14 md:h-14"
//         />
//         <span className="md:line-clamp-1 md:pl-3 ">
//           {eachSong?.track?.name}
//         </span>
//       </span>
//       <span className="  md:text-start md:justify-center md:pl-20 md:w-3/12">
//         {eachSong?.track?.album?.name}
//       </span>
//       <span className=" md:text-end md:w-3/12">
//         {(eachSong?.track?.duration_ms / 60000).toFixed(2) + " " + "min"}
//       </span>
//     </button>
//   ))}
// </div>;
