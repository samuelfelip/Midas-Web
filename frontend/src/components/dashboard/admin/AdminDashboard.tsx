import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  Users,
  BookOpen,
  FileText,
  Mail,
  BarChart3,
  DollarSign,
  UserPlus,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Download,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  description = "From last month",
  trend = "neutral",
  trendValue = "0%",
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-primary/10 rounded-full">{icon}</div>
          <div className="flex items-center gap-1">
            {trend === "up" && (
              <span className="text-emerald-500 flex items-center text-sm">
                <ArrowUpRight size={16} />
                {trendValue}
              </span>
            )}
            {trend === "down" && (
              <span className="text-rose-500 flex items-center text-sm">
                <ArrowDownRight size={16} />
                {trendValue}
              </span>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-muted-foreground font-medium text-sm">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface UserRowProps {
  name: string;
  email: string;
  role: string;
  status: "active" | "pending" | "inactive";
  joinDate: string;
}

const UserRow = ({
  name = "John Doe",
  email = "john@example.com",
  role = "Student",
  status = "active",
  joinDate = "Jan 10, 2023",
}: UserRowProps) => {
  const statusClasses = {
    active: "bg-emerald-100 text-emerald-700",
    pending: "bg-amber-100 text-amber-700",
    inactive: "bg-gray-100 text-gray-700",
  };

  return (
    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full overflow-hidden bg-muted">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 text-sm">{role}</td>
      <td className="py-3 px-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>
      <td className="py-3 px-4 text-sm">{joinDate}</td>
      <td className="py-3 px-4 text-right">
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </td>
    </tr>
  );
};

interface CourseRowProps {
  title: string;
  category: string;
  students: number;
  revenue: string;
  completion: number;
}

const CourseRow = ({
  title = "Introduction to Trading",
  category = "Forex",
  students = 0,
  revenue = "$0",
  completion = 0,
}: CourseRowProps) => {
  return (
    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md overflow-hidden bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 text-sm">{students}</td>
      <td className="py-3 px-4 text-sm">{revenue}</td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          <Progress value={completion} className="h-2 w-24" />
          <span className="text-sm">{completion}%</span>
        </div>
      </td>
      <td className="py-3 px-4 text-right">
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Eye className="h-4 w-4" />
          View
        </Button>
      </td>
    </tr>
  );
};

interface AdminDashboardProps {
  username?: string;
  stats?: {
    totalUsers: number;
    activeCourses: number;
    newEnrollments: number;
    revenue: string;
    userGrowth: string;
    courseGrowth: string;
    enrollmentGrowth: string;
    revenueGrowth: string;
  };
}

const AdminDashboard = ({
  username = "Admin User",
  stats = {
    totalUsers: 1245,
    activeCourses: 24,
    newEnrollments: 128,
    revenue: "$12,450",
    userGrowth: "12%",
    courseGrowth: "8%",
    enrollmentGrowth: "24%",
    revenueGrowth: "18%",
  },
}: AdminDashboardProps) => {
  const recentUsers: UserRowProps[] = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "Student",
      status: "active",
      joinDate: "Jun 12, 2023",
    },
    {
      name: "Michael Chen",
      email: "michael.c@example.com",
      role: "Teacher",
      status: "active",
      joinDate: "May 28, 2023",
    },
    {
      name: "Emma Rodriguez",
      email: "emma.r@example.com",
      role: "Student",
      status: "pending",
      joinDate: "Jun 15, 2023",
    },
    {
      name: "David Kim",
      email: "david.k@example.com",
      role: "Student",
      status: "inactive",
      joinDate: "Apr 10, 2023",
    },
    {
      name: "Lisa Wang",
      email: "lisa.w@example.com",
      role: "Teacher",
      status: "active",
      joinDate: "Jun 02, 2023",
    },
  ];

  const popularCourses: CourseRowProps[] = [
    {
      title: "Advanced Forex Trading Strategies",
      category: "Forex",
      students: 342,
      revenue: "$8,550",
      completion: 78,
    },
    {
      title: "Stock Market Fundamentals",
      category: "Stocks",
      students: 256,
      revenue: "$6,400",
      completion: 85,
    },
    {
      title: "Cryptocurrency Investment",
      category: "Crypto",
      students: 189,
      revenue: "$4,725",
      completion: 62,
    },
    {
      title: "Technical Analysis Masterclass",
      category: "Analysis",
      students: 124,
      revenue: "$3,100",
      completion: 91,
    },
  ];

  return (
    <div className="w-full h-full bg-background text-foreground p-6 space-y-8 overflow-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button size="sm">New Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="h-5 w-5 text-primary" />}
          trend="up"
          trendValue={stats.userGrowth}
        />
        <StatCard
          title="Active Courses"
          value={stats.activeCourses}
          icon={<BookOpen className="h-5 w-5 text-primary" />}
          trend="up"
          trendValue={stats.courseGrowth}
        />
        <StatCard
          title="New Enrollments"
          value={stats.newEnrollments}
          icon={<UserPlus className="h-5 w-5 text-primary" />}
          trend="up"
          trendValue={stats.enrollmentGrowth}
        />
        <StatCard
          title="Total Revenue"
          value={stats.revenue}
          icon={<DollarSign className="h-5 w-5 text-primary" />}
          trend="up"
          trendValue={stats.revenueGrowth}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">Revenue Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Activity Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="text-center space-y-2">
                <Calendar className="h-12 w-12 mx-auto text-primary" />
                <p className="text-muted-foreground">Calendar Placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Tabs defaultValue="users">
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Users</CardTitle>
                <TabsList>
                  <TabsTrigger value="users">All</TabsTrigger>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="teachers">Teachers</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="users" className="mt-0 pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-sm text-muted-foreground">
                        <th className="text-left font-medium py-3 px-4">
                          User
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Role
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Status
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Joined
                        </th>
                        <th className="text-right font-medium py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user, index) => (
                        <UserRow key={index} {...user} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="students" className="mt-0 pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-sm text-muted-foreground">
                        <th className="text-left font-medium py-3 px-4">
                          User
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Role
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Status
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Joined
                        </th>
                        <th className="text-right font-medium py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers
                        .filter((user) => user.role === "Student")
                        .map((user, index) => (
                          <UserRow key={index} {...user} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="teachers" className="mt-0 pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-sm text-muted-foreground">
                        <th className="text-left font-medium py-3 px-4">
                          User
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Role
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Status
                        </th>
                        <th className="text-left font-medium py-3 px-4">
                          Joined
                        </th>
                        <th className="text-right font-medium py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers
                        .filter((user) => user.role === "Teacher")
                        .map((user, index) => (
                          <UserRow key={index} {...user} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        <Card>
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <CardTitle>Popular Courses</CardTitle>
              <Button variant="ghost" size="sm" className="gap-1">
                <BarChart3 className="h-4 w-4" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border text-sm text-muted-foreground">
                    <th className="text-left font-medium py-3 px-4">Course</th>
                    <th className="text-left font-medium py-3 px-4">
                      Students
                    </th>
                    <th className="text-left font-medium py-3 px-4">Revenue</th>
                    <th className="text-left font-medium py-3 px-4">
                      Completion
                    </th>
                    <th className="text-right font-medium py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {popularCourses.map((course, index) => (
                    <CourseRow key={index} {...course} />
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Newsletter Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Total Subscribers</p>
                  <p className="text-2xl font-bold">3,247</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <p>Open Rate</p>
                  <p className="font-medium">42%</p>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <p>Click Rate</p>
                  <p className="font-medium">28%</p>
                </div>
                <Progress value={28} className="h-2" />
              </div>
              <Button variant="outline" className="w-full gap-1">
                <Mail className="h-4 w-4" />
                Create Newsletter
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>User Acquisition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[220px] flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">
                Acquisition Chart Placeholder
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "New user registered",
                  user: "Alex Thompson",
                  time: "2 hours ago",
                },
                {
                  action: "Course published",
                  user: "Michael Chen",
                  time: "4 hours ago",
                },
                {
                  action: "Newsletter sent",
                  user: "Admin",
                  time: "6 hours ago",
                },
                {
                  action: "User role updated",
                  user: "Emma Rodriguez",
                  time: "8 hours ago",
                },
                {
                  action: "New content uploaded",
                  user: "Lisa Wang",
                  time: "12 hours ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
