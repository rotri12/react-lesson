import { Outlet } from "react-router-dom";
import HeaderBar from "../components/AppBar";

export default function Root() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}
