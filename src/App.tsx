import { Route, Routes } from "react-router-dom";
import "@/App";
import { About } from "@/pages/about";

function App() {
  return (
    <div className="flex flex-col gap-4 size-full">
      {/* thin accent rule along the top edge, as on the resume */}
      <div
        className="fixed inset-x-0 top-0 h-1.5 bg-linear-to-r from-primary to-accent"
        aria-hidden
      />
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
