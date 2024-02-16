import { Link } from "react-router-dom";
const Game = ({ title, image }) => {
  return (
    <div className="w-52 bg-slate-400 border-4 ">
      <Link>
        <div className="bg-red-400">
          <div className="flex justify-center items-center">
            <img src={image} alt="img" className="h-28 w-full" />
          </div>
          <div>{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
