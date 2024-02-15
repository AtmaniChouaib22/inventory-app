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
    <div className="flex flex-col items-center">
      <div>all games</div>
      <div className="sm:flex sm:flex-shrink-0 sm:gap-5 sm:items-center px-10">
        {games.map((game) => (
          <Game
            key={game._id}
            title={game.title}
            image={`../uploads/${game.picture}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Games;
