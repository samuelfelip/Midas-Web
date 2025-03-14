import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardContent from "@/components/dashboard/DashboardContent";
import { cn } from "@/lib/utils";

type UserRole = "admin" | "teacher" | "student";

interface DashboardProps {
  userRole?: UserRole;
  username?: string;
  notificationCount?: number;
}

const Dashboard = ({
  userRole = "student",
  username = "John Doe",
  notificationCount = 3,
}: DashboardProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("overview");
  const [currentRole, setCurrentRole] = useState<UserRole>(userRole);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        userRole={currentRole}
        collapsed={sidebarCollapsed}
        onToggleCollapse={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <DashboardHeader
          username={username}
          role={currentRole}
          notificationCount={notificationCount}
          onMenuToggle={toggleSidebar}
        />

        {/* Content Area */}
        <main
          className={cn(
            "flex-1 overflow-auto transition-all duration-300",
            sidebarCollapsed ? "ml-0" : "ml-0",
          )}
        >
          <DashboardContent
            userRole={currentRole}
            selectedMenuItem={selectedMenuItem}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
