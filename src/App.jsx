import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css";


// Components
import Particle from "./components/Particle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Mindscape from "./pages/tech/Mindscape";
import Mysticode from "./pages/tech/Mysticode";
import GreyScale from "./pages/tech/GreyScale";
import Puzzlebytes from "./pages/nontech/Puzzlebytes";
import CyberSleuth from './pages/tech/CyberSleuth'
import SnapSeek from "./pages/nontech/SnapSeek";
import FilmFrency from "./pages/nontech/FilmFrency";
import ApexConquest from "./pages/nontech/ApexConquest";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Particle />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/mindscapes-unfold" element={<Mindscape />} />
          <Route path="/event/mysticode" element={<Mysticode />} />
          <Route path="/event/greyscale" element={<GreyScale />} />
          <Route path="/event/puzzlebytes" element={<Puzzlebytes />} />
          <Route path="/event/cyber-sleuth" element={<CyberSleuth />} />
          <Route path="/event/snap-seek" element={<SnapSeek />} />
          <Route path="/event/film-frency" element={<FilmFrency />} />
          <Route path="/event/apex-conquest" element={<ApexConquest />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
