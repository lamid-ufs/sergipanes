import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Access from "../pages/Access";
import GameTeam1 from "../pages/GameTeam1";
import EndGameScreen from "../pages/EndGame";
import NewGameForm from "../pages/AddTeamForm";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sergipanes" element={<Access />} />
        <Route path="/new-game" element={<NewGameForm />} />
        <Route path="/gameTeam01" element={<GameTeam1 />} />
        <Route path="/endgame" element={<EndGameScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
