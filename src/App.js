import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./conponent/About";
import Home from "./conponent/Home";
import Navbar from "./conponent/Navbar";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </NoteState>
  );
}

export default App;
