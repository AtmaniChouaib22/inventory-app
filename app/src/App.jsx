import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import GameForm from "./pages/GameForm";
import GenreForm from "./pages/GenreForm";
import Genres from "./pages/Genres";
import DevForm from "./pages/DevForm";
import Developers from "./pages/Developers";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/games" element={<Games />} />
        <Route path="/api/genres" element={<Genres />} />
        <Route path="/api/developers" element={<Developers />} />
        <Route path="/api/games/addgame" element={<GameForm />} />
        <Route path="/api/genres/addgenre" element={<GenreForm />} />
        <Route path="/api/developers/adddev" element={<DevForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
