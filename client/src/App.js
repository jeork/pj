import { Route, Routes } from "react-router-dom";
import Board from "./components/Body/Board";
import Food from "./components/Body/Food";
import Map from "./components/Body/Map";
import Workout from "./components/Body/Workout";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Body/Workout/*" element={<Workout />} />
        <Route path="/Body/Food" element={<Food />} />
        <Route path="/Body/Board" element={<Board />} />
        <Route path="/Body/Map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
