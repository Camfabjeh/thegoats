import React from "react";
import { Outlet } from "react-router-dom";

// mettre la navbaradmin avant le outlet

function UserLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default UserLayout;
