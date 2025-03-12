import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Users,
  BarChart2,
  Calendar,
  Clock,
  Award,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Progress } from "../../ui/progress";
import { Button } from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { cn } from "@/lib/utils";

interface TeacherDashboardProps {
  teacherName?: string;
  courseCount?: number;
  studentCount?: number;
  completionRate?: number;
}

const TeacherDashboard = ({
  teacherName = "Sarah Johnson",
  courseCount = 8,
  studentCount = 156,
  completionRate = 78,
}: TeacherDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: "Advanced Forex Trading Strategies",
      students: 42,
      progress: 100,
      lastUpdated: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
    },
    {
      id: 2,
      title: "Technical Analysis Masterclass",
      students: 38,
      progress: 85,
      lastUpdated: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=500&q=80",
    },
    {
      id: 3,
      title: "Risk Management Fundamentals",
      students: 27,
      progress: 65,
      lastUpdated: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    },
    {
      id: 4,
      title: "Cryptocurrency Trading Essentials",
      students: 49,
      progress: 90,
      lastUpdated: "Yesterday",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&q=80",
    },
  ];

  // Mock data for upcoming schedule
  const schedule = [
    {
      id: 1,
      title: "Live Trading Session",
      course: "Advanced Forex Trading Strategies",
      date: "Today",
      time: "2:00 PM - 3:30 PM",
    },
    {
      id: 2,
      title: "Student Q&A",
      course: "Technical Analysis Masterclass",
      date: "Tomorrow",
      time: "10:00 AM - 11:00 AM",
    },
    {
      id: 3,
      title: "Course Content Review",
      course: "Risk Management Fundamentals",
      date: "May 15, 2023",
      time: "1:00 PM - 2:00 PM",
    },
  ];

  // Mock data for student performance
  const studentPerformance = [
    {
      id: 1,
      name: "Alex Thompson",
      course: "Advanced Forex Trading Strategies",
      progress: 92,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      id: 2,
      name: "Jamie Rodriguez",
      course: "Technical Analysis Masterclass",
      progress: 78,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
    },
    {
      id: 3,
      name: "Taylor Wilson",
      course: "Risk Management Fundamentals",
      progress: 65,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
    },
    {
      id: 4,
      name: "Morgan Lee",
      course: "Cryptocurrency Trading Essentials",
      progress: 88,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan",
    },
    {
      id: 5,
      name: "Jordan Smith",
      course: "Advanced Forex Trading Strategies",
      progress: 45,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    },
  ];

  return (
    <div className="w-full h-full bg-background p-6 overflow-auto">
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">Welcome back, {teacherName}</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your courses today.
          </p>
        </div>

        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">My Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courseCount}</div>
              <p className="text-xs text-muted-foreground">
                Active courses you're teaching
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentCount}</div>
              <p className="text-xs text-muted-foreground">
                Students enrolled in your courses
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Completion Rate
              </CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completionRate}%</div>
              <p className="text-xs text-muted-foreground">
                Average course completion rate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main content tabs */}
        <Tabs
          defaultValue="overview"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Recent Activity */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Upcoming Schedule</CardTitle>
                  <CardDescription>
                    Your upcoming sessions and events
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {schedule.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.course}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" /> {item.date}
                          </span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" /> {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Full Schedule
                  </Button>
                </CardFooter>
              </Card>

              {/* Top Performing Students */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Top Performing Students</CardTitle>
                  <CardDescription>
                    Students with highest completion rates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {studentPerformance.slice(0, 3).map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{student.name}</p>
                          <span className="text-sm">{student.progress}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {student.course}
                        </p>
                        <Progress value={student.progress} className="h-1" />
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Students
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">
                      {course.title}
                    </CardTitle>
                    <CardDescription>
                      {course.students} students enrolled
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Completion</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1" />
                    <p className="text-xs text-muted-foreground">
                      Last updated: {course.lastUpdated}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">Manage</Button>
                  </CardFooter>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-6 border-dashed border-2 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Create New Course</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Add a new course to your teaching portfolio
                </p>
                <Button>Create Course</Button>
              </Card>
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Performance</CardTitle>
                <CardDescription>
                  Track your students' progress across all courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {studentPerformance.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{student.name}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">{student.progress}%</span>
                            {student.progress >= 80 && (
                              <span className="flex items-center text-xs text-green-500">
                                <Award className="h-3 w-3 mr-1" /> Top performer
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {student.course}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Progress
                            value={student.progress}
                            className="flex-1 h-2"
                          />
                          <span className="text-xs text-muted-foreground w-12 text-right">
                            {student.progress < 50
                              ? "At risk"
                              : student.progress < 70
                                ? "Average"
                                : "Good"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Export Performance Data
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;
