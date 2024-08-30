import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import "./Header.css";

function TopNav() {
  return (
    <div id="topNavDiv">
      <div id="titleDiv">
        <h1>
          <Link to="/">Title</Link>
        </h1>
      </div>
      <div id="loginDiv">
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="../Body/Workout">
            <span className="nav-span">운 동</span>
          </NavLink>
          <div className="dropdown-menu">
            <NavLink to="../Body/Workout/Guide">가이드</NavLink>
            <NavLink to="../Body/Workout/RoutineCreation">루틴 만들기</NavLink>
            <NavLink to="../Body/Workout/MyRoutine">나의 루틴</NavLink>
            <NavLink to="../Body/Workout/MyGoals">나의 목표</NavLink>
          </div>
        </li>
        <li>
          <NavLink to="../Body/Food">
            <span className="nav-span">영 양</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="../Body/Board">
            <span className="nav-span">게시판</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="../Body/Map">
            <span className="nav-span">헬스장 추천</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <div>
      <TopNav />
      <Nav />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export default Header;
