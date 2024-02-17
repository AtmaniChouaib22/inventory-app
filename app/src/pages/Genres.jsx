import { useState, useEffect } from "react";
const Genres = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch("http://localhost:3000/api/genres");
      if (response.ok) {
        const json = await response.json();
        setGenres(json);
      }
    };
    fetchGenres();
  }, []);
  return (
    <div className="flex flex-col items-center pt-10 gap-5">
      <h1 className="text-3xl font-bold text-indigo-600">All Genres List </h1>
      <ul className="flex flex-col gap-3 items-start">
        {genres.map((genre) => (
          <li key={genre.genreId} className="font-semibold">
            <span className="text-lg font-bold">{genre.genreName}</span>:{" "}
            {genre.gameCount} Games
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
