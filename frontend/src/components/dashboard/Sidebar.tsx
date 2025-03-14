import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Mail,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  userRole?: "admin" | "teacher" | "student";
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  collapsed?: boolean;
  subItems?: { label: string; href: string }[];
}

const SidebarItem = ({
  icon,
  label,
  href,
  active = false,
  collapsed = false,
  subItems = [],
}: SidebarItemProps) => {
  const [open, setOpen] = useState(false);

  if (subItems.length > 0) {
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-full">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 px-3 py-2 hover:bg-accent",
              active && "bg-accent text-accent-foreground",
              collapsed ? "justify-center px-2" : "justify-start px-3",
            )}
          >
            {icon}
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{label}</span>
                {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </>
            )}
          </Button>
        </CollapsibleTrigger>
        {!collapsed && (
          <CollapsibleContent className="pl-9 pr-2">
            <div className="flex flex-col gap-1 pt-1">
              {subItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-md hover:bg-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        )}
      </Collapsible>
    );
  }

  return (
    <TooltipProvider delayDuration={collapsed ? 100 : 1000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 hover:bg-accent",
                active && "bg-accent text-accent-foreground",
                collapsed ? "justify-center px-2" : "justify-start px-3",
              )}
            >
              {icon}
              {!collapsed && <span>{label}</span>}
            </Button>
          </Link>
        </TooltipTrigger>
        {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = ({
  userRole = "student",
  collapsed = false,
  onToggleCollapse = () => {},
}: SidebarProps) => {
  // Define menu items based on user role
  const adminMenuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Users size={20} />,
      label: "User Management",
      href: "/dashboard/users",
      subItems: [
        { label: "All Users", href: "/dashboard/users" },
        { label: "Add New User", href: "/dashboard/users/new" },
        { label: "Role Assignments", href: "/dashboard/users/roles" },
      ],
    },
    {
      icon: <BookOpen size={20} />,
      label: "Course Management",
      href: "/dashboard/courses",
      subItems: [
        { label: "All Courses", href: "/dashboard/courses" },
        { label: "Add New Course", href: "/dashboard/courses/new" },
        { label: "Categories", href: "/dashboard/courses/categories" },
      ],
    },
    {
      icon: <FileText size={20} />,
      label: "Content Management",
      href: "/dashboard/content",
      subItems: [
        { label: "All Content", href: "/dashboard/content" },
        { label: "Add New Content", href: "/dashboard/content/new" },
      ],
    },
    {
      icon: <Mail size={20} />,
      label: "Newsletter",
      href: "/dashboard/newsletter",
      subItems: [
        { label: "Create Newsletter", href: "/dashboard/newsletter/new" },
        { label: "Subscribers", href: "/dashboard/newsletter/subscribers" },
        { label: "Analytics", href: "/dashboard/newsletter/analytics" },
      ],
    },
  ];

  const teacherMenuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <BookOpen size={20} />,
      label: "My Courses",
      href: "/dashboard/courses",
      subItems: [
        { label: "Assigned Courses", href: "/dashboard/courses" },
        { label: "Course Details", href: "/dashboard/courses/details" },
      ],
    },
    {
      icon: <FileText size={20} />,
      label: "Content",
      href: "/dashboard/content",
      subItems: [
        { label: "Create Content", href: "/dashboard/content/new" },
        { label: "My Content", href: "/dashboard/content" },
      ],
    },
    {
      icon: <Users size={20} />,
      label: "Students",
      href: "/dashboard/students",
      subItems: [
        { label: "Student List", href: "/dashboard/students" },
        { label: "Performance", href: "/dashboard/students/performance" },
      ],
    },
  ];

  const studentMenuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <BookOpen size={20} />,
      label: "My Courses",
      href: "/dashboard/courses",
    },
    {
      icon: <FileText size={20} />,
      label: "Learning Materials",
      href: "/dashboard/materials",
    },
    {
      icon: <Users size={20} />,
      label: "My Progress",
      href: "/dashboard/progress",
    },
  ];

  // Select menu items based on user role
  const menuItems = {
    admin: adminMenuItems,
    teacher: teacherMenuItems,
    student: studentMenuItems,
  }[userRole];

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-background border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64 lg:w-72",
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <div className="font-semibold text-lg">Midas Academy</div>
        )}
        {collapsed && (
          <div className="w-full flex justify-center">
            <span className="font-bold text-xl">M</span>
          </div>
        )}
      </div>

      <Separator />

      <ScrollArea className="flex-1 px-2 py-4">
        <div className="flex flex-col gap-1">
          {menuItems?.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              collapsed={collapsed}
              subItems={item.subItems}
            />
          ))}
        </div>
      </ScrollArea>

      <Separator />

      <div className="p-4 flex flex-col gap-2">
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          href="/dashboard/settings"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={<HelpCircle size={20} />}
          label="Help & Support"
          href="/dashboard/support"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={<LogOut size={20} />}
          label="Logout"
          href="/logout"
          collapsed={collapsed}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
