import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UpdateForm from "../pages/UpdateForm";

const FullGame = () => {
  const [game, setGame] = useState();
  const [deleted, setDeleted] = useState(false);
  const [rendered, setRendered] = useState(false);
  const arr = window.location.pathname.split("/");
  const id = arr[3];

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`http://localhost:3000/api/games/${id}`);
      if (response.ok) {
        const json = await response.json();
        setGame(json);
        setRendered(true);
      }
    };
    fetchGame();
  }, [id]);

  const handleDelete = async () => {
    try {
      axios.delete(`http://localhost:3000/api/games/${id}`).then((response) => {
        console.log(response.data);
        console.log("deleted");
        setDeleted(true);
        setRendered(false);
      });
    } catch (error) {
      console.log("cant find item");
    }
  };

  return (
    <div className=" pt-10">
      {deleted && (
        <div className=" flex justify-center items-center gap-5">
          <div className="text-2xl font-bold">Game Deleted</div>
          <Link to="/api/games" className="text-lg font-bold" />
        </div>
      )}
      {rendered && (
        <div className="flex justify-center items-center gap-10 bg-indigo-200 py-5">
          <div className="flex flex-col gap-2 w-80 ">
            <div className="text-xl font-bold">{game.title}</div>
            <div>
              Developer:
              <span className="font-semibold text-lg pl-2">
                {game.developer.name}
              </span>
            </div>
            <div>
              Genre:
              <span className="font-semibold text-lg pl-2">
                {game.genre.name}
              </span>
            </div>
            <div className="flex flex-col gap-2 border-t-2">
              <span className="text-lg font-semibold">Description</span>
              <span>{game.description}</span>
            </div>
            <button
              onClick={handleDelete}
              className="py-3 w-40 bg-red-600 rounded-lg font-semibold text-lg text-white hover:scale-105 hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in"
            >
              Delete
            </button>
          </div>
          <div>
            <img
              src={`/uploads/${game.picture}`}
              alt="game"
              className="sm:w-80"
            />
          </div>
        </div>
      )}
      <UpdateForm />
    </div>
  );
};

export default FullGame;
