import { useState } from "react";
const GenreForm = () => {
  const [genreName, setgenreName] = useState("");
  const [error, setError] = useState();

  const genre = { genreName };

  const handleChange = (event) => {
    setgenreName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/genres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(genre),
      });
      const json = await response.json();

      if (response.ok) {
        setgenreName("");
        setError(null);
      }
      if (!response.ok) {
        setError(json.err);
      }
    } catch (error) {
      console.error("Error adding genre:", error.message);
    }
  };
  return (
    <div>
      {error && <div>adding failed {error}</div>}
      <form method="post" onSubmit={handleSubmit}>
        <div>Add Genre</div>
        <div>
          <label htmlFor="genreName">Genre</label>
          <input
            type="text"
            id="genreName"
            name="genreName"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default GenreForm;
