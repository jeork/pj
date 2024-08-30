import React from "react";
import { Route, Routes } from "react-router-dom";
import "./css/Workout.css";
import Guide from "./Workouts/Guide";
import MyGoals from "./Workouts/MyGoals";
import MyRoutine from "./Workouts/MyRoutine";
import RoutineCreation from "./Workouts/RoutineCreation";

function Workout() {
  return (
    <div>
      <Routes>
        <Route path="Guide" element={<Guide />} />
        <Route path="RoutineCreation" element={<RoutineCreation />} />
        <Route path="MyRoutine" element={<MyRoutine />} />
        <Route path="MyGoals" element={<MyGoals />} />
      </Routes>
    </div>
  );
}

export default Workout;
