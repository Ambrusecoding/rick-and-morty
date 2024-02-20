import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/index";
import CharacterPage from "./pages/characters/index";
import Episodes from "./pages/episodes";
import RouterLayout from "./common/RouterLayout";
const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/episodes" element={<Episodes />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
