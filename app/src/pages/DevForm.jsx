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
    <div className="pt-10 flex justify-center items-center">
      {error && <div>adding failed {error}</div>}
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col bg-indigo-200 items-center sm:gap-10 gap-5 justify-center sm:py-14 sm:px-24 py-8 px-5 rounded-xl"
      >
        <div className="text-3xl text-center font-bold">Add a Developer</div>
        <div className="flex sm:flex-row gap-5 items-center flex-col">
          <label htmlFor="name" className="text-xl font-semibold">
            Developer
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
            className="py-1 w-full rounded-lg px-2 outline-0"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-indigo-600 rounded-lg font-semibold text-lg text-white hover:scale-105 hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500 transition duration-150 ease-out hover:ease-in"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default DevForm;
