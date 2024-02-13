import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
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
