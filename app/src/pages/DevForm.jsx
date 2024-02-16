import { useState } from "react";

const DevForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const developper = { name };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/developers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(developper),
      });
      const json = await response.json();

      if (response.ok) {
        setName("");
        setError(null);
      }
      if (!response.ok) {
        setError(json.err);
      }
    } catch (error) {
      console.error("Error adding developer:", error.message);
    }
  };
  return (
    <div>
      {error && <div>adding failed {error}</div>}
      <form onSubmit={handleSubmit} method="post">
        <div>Add a Developper</div>
        <div>
          <label htmlFor="name">developper</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DevForm;
