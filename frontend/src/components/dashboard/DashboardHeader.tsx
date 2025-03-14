import React from "react";
import { Bell, Search, Menu, Settings, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

interface DashboardHeaderProps {
  username?: string;
  role?: "admin" | "teacher" | "student";
  notificationCount?: number;
  onMenuToggle?: () => void;
  logoUrl?: string;
}

const DashboardHeader = ({
  username = "John Doe",
  role = "student",
  notificationCount = 3,
  onMenuToggle = () => {},
  logoUrl = "/vite.svg",
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-20 bg-background border-b border-border flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Midas Trading Academy" className="h-8 w-8" />
          <h1 className="text-xl font-bold hidden md:block">
            Midas Trading Academy
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:flex items-center max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-background border border-input rounded-md py-2 pl-8 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    variant="destructive"
                  >
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {notificationCount > 0 ? (
                  Array(notificationCount)
                    .fill(0)
                    .map((_, i) => (
                      <DropdownMenuItem key={i} className="cursor-pointer py-3">
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">
                            New{" "}
                            {i === 0
                              ? "course"
                              : i === 1
                                ? "message"
                                : "update"}{" "}
                            available
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {i === 0
                              ? "A new trading course has been added to your dashboard."
                              : i === 1
                                ? "You have received a new message from your instructor."
                                : "The platform has been updated with new features."}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Just now
                          </p>
                        </div>
                      </DropdownMenuItem>
                    ))
                ) : (
                  <div className="py-4 text-center text-muted-foreground">
                    No new notifications
                  </div>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 h-9 px-2"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
                    alt={username}
                  />
                  <AvatarFallback>
                    {username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-left hidden md:block">
                  <span className="text-sm font-medium">{username}</span>
                  <span className="text-xs text-muted-foreground capitalize">
                    {role}
                  </span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
