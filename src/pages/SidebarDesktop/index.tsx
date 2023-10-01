import React from "react";
import SidebarDesktopHeader from "../../components/SidebarDesktopHeader";
import "./sidebar-desktop.scss";
import UsersList from "../../components/UsersList";

function SidebarDesktop() {
  return (
    <div className="sidebar">
      <SidebarDesktopHeader />
      <UsersList />
    </div>
  );
}

export default SidebarDesktop;
