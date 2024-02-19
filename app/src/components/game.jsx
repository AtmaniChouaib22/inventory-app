import { Link } from "react-router-dom";
const Game = ({ title, image, url }) => {
  return (
    <div className="w-52 bg-indigo-600 rounded-lg font-semibold text-lg hover:scale-105 hover:bg-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
      <Link to={url}>
        <div className="bg-white px-4 py-2 rounded-sm h-40">
          <div className="flex justify-center items-center ">
            <img src={image} alt="img" className="h-28 w-full" />
          </div>
          <div className="flex items-center text-lg font-semibold pl-1 text-wrap truncate py-2">
            <div className="text-lg font-bold truncate">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
