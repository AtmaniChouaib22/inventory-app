import { Link } from "react-router-dom";
const Game = ({ title, image }) => {
  return (
    <div className="w-52 ">
      <Link>
        <div className="bg-white px-4 py-2 rounded-sm">
          <div className="flex justify-center items-center ">
            <img src={image} alt="img" className="h-28 w-full" />
          </div>
          <div className="flex items-center text-lg font-semibold pl-1 text-wrap">
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
