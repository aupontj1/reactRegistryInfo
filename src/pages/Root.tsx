import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="container mx-auto p-20">
      <Header />
      <Outlet />
    </div>
  );
}
