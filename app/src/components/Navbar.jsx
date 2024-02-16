import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";
import ListIcon from "../icons/ListIcon";

const Links = () => {
  const [dropDown, setDrop] = useState(false);
  return (
    <div className="hidden sm:block sm:absolute sm:right-2">
      <ul className="flex gap-5 items-center pr-5 flex-nowrap ">
        <Link to="/api/games" className="w-full">
          Games
        </Link>

        <Link to="/api/genres" className="w-full">
          Genres
        </Link>

        <Link to="/api/developers" className="w-full">
          Developers
        </Link>

        <div className="relative">
          <button className="relative w-32 " onClick={() => setDrop(!dropDown)}>
            add
          </button>
          {dropDown && (
            <div className="absolute bg-slate-400 z-50 w-full top-10 text-wrap">
              <ul className="flex flex-col justify-center items-start px-3 flex-nowrap text-nowrap gap-3 py-3">
                <Link to="/api/games/addgame">add game</Link>
                <Link to="/api/genres/addgenre">add genre</Link>
                <Link to="/api/developers/adddev">add developer</Link>
              </ul>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

const NavMob = () => {
  return (
    <ul className="flex flex-col items-center gap-3 px-9 py-2 w-full">
      <Link to="/api/games" className="w-full border-b-2">
        Games
      </Link>
      <Link to="/api/developers" className="w-full border-b-2">
        Developers
      </Link>
      <Link to="/api/genres" className="w-full border-b-2">
        Genres
      </Link>
      <Link to="/api/genres/addgenre" className="w-full border-b-2">
        Add Genre
      </Link>
      <Link to="/api/games/addgame" className="w-full border-b-2">
        Add Game
      </Link>
      <Link to="/api/developers/adddev" className="w-full border-b-2">
        Add developer
      </Link>
    </ul>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="sm:flex w-full shadow-lg flex-col py-3 bg-indigo-700 text-lg text-white font-semibold">
        <div className="flex">
          <div className="pl-5 w-full">Games Inventory</div>
          <div className="">
            <Links />
          </div>
          <button
            onClick={() => setNav(!nav)}
            className="sm:hidden flex justify-end items-center w-full pr-5"
          >
            {nav ? <CloseIcon /> : <ListIcon />}
          </button>
        </div>

        {nav && (
          <div className="flex justify-center sm:hidden">
            <NavMob />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
