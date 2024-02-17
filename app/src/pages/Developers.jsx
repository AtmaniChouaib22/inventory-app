import { useState, useEffect } from "react";
const Developers = () => {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    const fetchDevs = async () => {
      const response = await fetch("http://localhost:3000/api/developers");
      if (response.ok) {
        const json = await response.json();
        setDevs(json);
      }
    };
    fetchDevs();
  }, []);
  return (
    <div className="flex flex-col items-center pt-10 gap-5">
      <h1 className="text-3xl font-bold text-indigo-600">All Genres</h1>
      <ul className="flex flex-col gap-3 items-start">
        {devs.map((dev) => (
          <li key={dev.developerId} className="font-semibold">
            <span className="text-lg font-bold">{dev.developerName}</span>:{" "}
            {dev.gameCount} Games
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Developers;
