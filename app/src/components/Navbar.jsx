import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div>
        <Link to="/api/games">Games</Link>
      </div>
      <div>
        <Link to="/api/genres">Genres</Link>
      </div>
      <div>
        <Link to="/api/developpers">Developpers</Link>
      </div>
      <div>
        <Link to="/api/games/add">add game</Link>
      </div>
      <div>
        <Link to="/api/developpers/add">add developper</Link>
      </div>
      <div>
        <Link to="/api/genres/add">add genre</Link>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div>
      <div>icon</div>
      <Links />
    </div>
  );
};

export default Navbar;
