import React, { useState } from "react";
import { Card } from "../ui/card";

type UserRole = "admin" | "teacher" | "student";

interface DashboardContentProps {
  userRole?: UserRole;
  selectedMenuItem?: string;
}

const DashboardContent = ({
  userRole = "admin",
  selectedMenuItem = "overview",
}: DashboardContentProps) => {
  const [activeRole, setActiveRole] = useState<UserRole>(userRole);

  // For demonstration purposes, allow switching between roles
  const handleRoleChange = (role: UserRole) => {
    setActiveRole(role);
  };

  // Placeholder components for each dashboard type
  const AdminDashboardContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Total Users
          </h3>
          <p className="text-2xl font-bold">1,245</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Active Courses
          </h3>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            New Enrollments
          </h3>
          <p className="text-2xl font-bold">128</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Revenue
          </h3>
          <p className="text-2xl font-bold">$12,450</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recent User Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium">User Name {item}</p>
                  <p className="text-sm text-gray-500">
                    Completed Course Registration
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TeacherDashboardContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Teacher Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            My Courses
          </h3>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Total Students
          </h3>
          <p className="text-2xl font-bold">156</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Avg. Completion Rate
          </h3>
          <p className="text-2xl font-bold">78%</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">My Courses</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h4 className="font-medium">
                  Advanced Trading Strategies {item}
                </h4>
                <p className="text-sm text-gray-500">42 students enrolled</p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
                Manage
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const StudentDashboardContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Student Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Enrolled Courses
          </h3>
          <p className="text-2xl font-bold">4</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Completed
          </h3>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-500 dark:text-gray-400">
            Overall Progress
          </h3>
          <p className="text-2xl font-bold">65%</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">My Learning</h3>
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-2">
              <div className="flex justify-between">
                <h4 className="font-medium">
                  Forex Trading Fundamentals {item}
                </h4>
                <span className="text-sm text-gray-500">75% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-end">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
      {/* Role switcher for demonstration purposes */}
      <div className="mb-6 flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Demo Role Switcher:
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => handleRoleChange("admin")}
            className={`px-3 py-1 text-sm rounded-md ${activeRole === "admin" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
          >
            Admin
          </button>
          <button
            onClick={() => handleRoleChange("teacher")}
            className={`px-3 py-1 text-sm rounded-md ${activeRole === "teacher" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
          >
            Teacher
          </button>
          <button
            onClick={() => handleRoleChange("student")}
            className={`px-3 py-1 text-sm rounded-md ${activeRole === "student" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
          >
            Student
          </button>
        </div>
      </div>

      {/* Main content area */}
      <Card className="w-full h-full p-6 shadow-sm">
        {activeRole === "admin" && <AdminDashboardContent />}
        {activeRole === "teacher" && <TeacherDashboardContent />}
        {activeRole === "student" && <StudentDashboardContent />}
      </Card>
    </div>
  );
};

export default DashboardContent;
