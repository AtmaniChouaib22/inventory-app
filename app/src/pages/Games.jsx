import { useEffect, useState } from "react";
import Game from "../components/game";

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("http://localhost:3000/api/games");
      if (response.ok) {
        const json = await response.json();
        setGames(json);
      }
    };
    fetchGames();
  }, []);
  return (
    <div className="flex flex-col items-center pt-5 pb-20 ">
      <div className="pt-2 pb-4 text-3xl font-bold">All Games</div>
      <div className="sm:flex  sm:gap-7 sm:items-center  sm:px-10 sm:flex-wrap  p-3 grid grid-cols-1 gap-4">
        {games.map((game) => (
          <Game
            key={game._id}
            title={game.title}
            image={`../uploads/${game.picture}`}
            url={game.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Games;
