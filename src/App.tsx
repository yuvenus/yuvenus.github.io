import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/nav";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Crafts } from "./pages/crafts";

function App() {
  return (
    <div className="flex flex-col gap-4 size-full">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/crafts" element={<Crafts />} />
      </Routes>
    </div>
  );
}

export default App;
