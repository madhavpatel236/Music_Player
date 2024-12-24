import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Home() {
  const token = useSelector((store) => store?.token);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/playlist')
  }

  const rapidAPI = async () => {
    const url =
      "https://spotify23.p.rapidapi.com/search/?q=arijit&type=multi&offset=0&limit=10&numberOfTopResults=5";

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f0a4b14204msh41c012695b40bfcp1a466ejsn39d3cbd66996",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    rapidAPI();
  }, []);

  return (
    <div className="flex-col text-center  bg-red-950 w-auto h-[100vh]">
      <div className="text-white pt-64 mb-4 font-semibold font-serif text-4xl">
        Turn up the vibe
      </div>
      <button onClick={handleClick} className="text-white boder border shadow-white shadow-md p-2 rounded-xl  transition hover:scale-110">Explore the Library</button>
    </div>
  );
}

export default Home;
