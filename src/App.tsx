import { Route, Routes } from "react-router-dom";
import "@/App";
import { About } from "@/pages/about";

function App() {
  return (
    <div className="flex flex-col gap-4 size-full">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/crafts" element={<Crafts />} /> */}
      </Routes>
    </div>
  );
}

export default App;
