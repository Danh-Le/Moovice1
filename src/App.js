import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
        <Link to="/">
          <button className="btn btn-outline-secondary fs-3">Home</button>
        </Link>
        <Link to="/favorites">
          <button className="btn btn-outline-secondary fs-3">Favorites</button>
        </Link>
        <Link to="/popular">
          <button className="btn btn-outline-secondary fs-3">Popular</button>
        </Link>
        <Link to="/weekly">
          <button className="btn btn-outline-secondary fs-3">Weekly</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
