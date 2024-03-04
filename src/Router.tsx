import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterComponent from "./pages/characters/index";
import RouterLayout from "./common/RouterLayout";
import BasicTabs from "./pages/testTab";
const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<BasicTabs value={0} />} />
        <Route path="/characters/:id" element={<CharacterComponent />} />
        <Route path="/episodes" element={<BasicTabs value={1} />} />
        <Route path="/favorites" element={<BasicTabs value={2} />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
