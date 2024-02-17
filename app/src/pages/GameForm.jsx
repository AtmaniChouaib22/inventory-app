import { useState, useEffect } from "react";
import axios from "axios";

const GameForm = () => {
  const [genres, setGenres] = useState([]);
  const [devs, setDevs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    developer: "",
    picture: {},
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/games",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error adding developer:", error.message);
    }
  };
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    if (name === "picture") {
      setFormData((prevState) => ({
        ...prevState,
        picture: event.target.files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/api/genres/all"),
      axios.get("http://localhost:3000/api/developers/all"),
    ])
      .then(([response1, response2]) => {
        setGenres(response1.data);
        setDevs(response2.data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);
  return (
    <div className="sm:flex flex-col items-center pt-10">
      <form
        action="/api/games"
        method="post"
        encType="multipart/form-data"
        className="flex flex-col justify-center gap-3 items-center rounded-lg bg-indigo-200 py-5 px-5"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl font-bold ">Add a Game</div>
        <div className="grid">
          <label htmlFor="title" className="text-lg">
            title
          </label>
          <input
            type="text"
            id="title"
            className="w-full py-1 rounded-md"
            name="title"
            onChange={handleFormChange}
          />
        </div>
        <div className="grid">
          <label htmlFor="description" className="text-lg">
            description
          </label>
          <input
            type="text"
            id="description"
            className="w-full py-2 rounded-md"
            name="description"
            onChange={handleFormChange}
          />
        </div>
        <div className="flex justify-center bg-slate-100">
          <label htmlFor="picture">Picture</label>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handleFormChange}
          />
        </div>

        <div className="flex gap-2 flex-wrap ">
          <div>Genre</div>
          {genres.map((genre) => (
            <div key={genre._id}>
              <input
                type="radio"
                name="genre"
                id={genre._id}
                value={genre._id}
                className="cursor-pointer"
                onChange={handleFormChange}
              />
              <label htmlFor={genre._id}>{genre.name}</label>
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          <div>Developer</div>
          {devs.map((dev) => (
            <div key={dev._id}>
              <input
                type="radio"
                name="developer"
                id={dev._id}
                value={dev._id}
                className="cursor-pointer"
                onChange={handleFormChange}
              />
              <label htmlFor={dev._id}>{dev.name}</label>
            </div>
          ))}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default GameForm;
