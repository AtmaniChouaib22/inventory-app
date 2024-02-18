import { useState, useEffect } from "react";
const FullGame = () => {
  const [game, setGame] = useState();
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
  return (
    <div className=" pt-10">
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
    </div>
  );
};

export default FullGame;
