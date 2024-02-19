import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/index";
import CharacterPage from "./pages/characters/index";
const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
    </Routes>
  );
};
export default AppRouter;
