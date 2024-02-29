import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterComponent from "./pages/characters/index";
import RouterLayout from "./common/RouterLayout";
import BasicTabs from "./pages/testTab";
import EpisodeComponent from "./pages/internalEpisode";
const AppRouter: React.FC = () => {
  const ROUTES = {
    ALL_EPISODES: "/episodes",
    EPISODE: "/episode/:id",
    CHARACTER_ID: "/characters/:id",
  };
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<BasicTabs value={0} />} />
        <Route path={ROUTES.CHARACTER_ID} element={<CharacterComponent />} />
        <Route path={ROUTES.ALL_EPISODES} element={<BasicTabs value={1} />} />
        <Route path={ROUTES.EPISODE} element={<EpisodeComponent />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
