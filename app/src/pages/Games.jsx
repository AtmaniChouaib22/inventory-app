import { useEffect, useState } from "react";

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
  });
  return (
    <div>
      {games.map((game) => (
        <div key={game._id}>{game.title}</div>
      ))}
    </div>
  );
};

export default Games;
