import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./conponent/About";
import Home from "./conponent/Home";
import Navbar from "./conponent/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
