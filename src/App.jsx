import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import India from "./pages/India";
import World from "./pages/World";
import UPSC from "./pages/UPSC";
import NTA from "./pages/NTA";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<India />} />
        <Route path="/world" element={<World />} />
        <Route path="/upsc" element={<UPSC />} />
        <Route path="/nta" element={<NTA />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;