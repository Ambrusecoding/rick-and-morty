import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterComponent from "./pages/characters/index";
import RouterLayout from "./common/RouterLayout";
import BasicTabs from "./pages/testTab";
import EpisodeComponent from "./pages/internalEpisode";
const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<BasicTabs value={0} />} />
        <Route path="/characters/:id" element={<CharacterComponent />} />
        <Route path="/episodes" element={<BasicTabs value={1} />} />
        <Route path="/episode/:id" element={<EpisodeComponent />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
