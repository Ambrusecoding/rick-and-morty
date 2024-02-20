import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RouterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default RouterLayout;
