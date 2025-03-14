import React from "react";
import {
  BookOpen,
  Award,
  Clock,
  Calendar,
  BarChart2,
  ChevronRight,
  Download,
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
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title?: string;
  progress?: number;
  lastAccessed?: string;
  image?: string;
  onClick?: () => void;
}

const CourseCard = ({
  title = "Forex Trading Fundamentals",
  progress = 65,
  lastAccessed = "2 days ago",
  image = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
  onClick = () => {},
}: CourseCardProps) => (
  <Card className="overflow-hidden hover:shadow-md transition-shadow">
    <div className="relative h-40 w-full">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <Badge className="absolute top-3 right-3">{progress}% Complete</Badge>
    </div>
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        <span>Last accessed {lastAccessed}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="pb-2">
      <Progress value={progress} className="h-2" />
    </CardContent>
    <CardFooter>
      <Button onClick={onClick} className="w-full">
        Continue Learning
      </Button>
    </CardFooter>
  </Card>
);

interface AssessmentCardProps {
  title?: string;
  dueDate?: string;
  status?: "completed" | "pending" | "overdue";
  onClick?: () => void;
}

const AssessmentCard = ({
  title = "Market Analysis Quiz",
  dueDate = "Oct 15, 2023",
  status = "pending",
  onClick = () => {},
}: AssessmentCardProps) => {
  const statusColors = {
    completed: "bg-green-100 text-green-800 border-green-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    overdue: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div
            className={cn(
              "px-2 py-1 rounded-md text-xs font-medium border",
              statusColors[status],
            )}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
        <CardDescription className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>Due: {dueDate}</span>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          onClick={onClick}
          variant={status === "completed" ? "outline" : "default"}
          className="w-full"
        >
          {status === "completed" ? "Review" : "Start Assessment"}
        </Button>
      </CardFooter>
    </Card>
  );
};

interface AchievementProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  earned?: boolean;
}

const Achievement = ({
  title = "First Course Completed",
  description = "Successfully completed your first trading course",
  icon = <Award className="h-8 w-8" />,
  earned = true,
}: AchievementProps) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
    <div
      className={cn(
        "p-3 rounded-full",
        earned
          ? "bg-primary/10 text-primary"
          : "bg-muted text-muted-foreground",
      )}
    >
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {earned && (
      <Badge variant="secondary" className="ml-auto">
        Earned
      </Badge>
    )}
  </div>
);

interface StudentDashboardProps {
  studentName?: string;
  enrolledCourses?: CourseCardProps[];
  upcomingAssessments?: AssessmentCardProps[];
  achievements?: AchievementProps[];
  overallProgress?: number;
}

const StudentDashboard = ({
  studentName = "John Doe",
  enrolledCourses = [
    {
      title: "Forex Trading Fundamentals",
      progress: 65,
      lastAccessed: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
    },
    {
      title: "Technical Analysis Mastery",
      progress: 32,
      lastAccessed: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=500&q=80",
    },
    {
      title: "Risk Management Strategies",
      progress: 89,
      lastAccessed: "Yesterday",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    },
    {
      title: "Advanced Candlestick Patterns",
      progress: 12,
      lastAccessed: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&q=80",
    },
  ],
  upcomingAssessments = [
    {
      title: "Market Analysis Quiz",
      dueDate: "Oct 15, 2023",
      status: "pending" as const,
    },
    {
      title: "Trading Strategy Assignment",
      dueDate: "Oct 10, 2023",
      status: "completed" as const,
    },
    {
      title: "Risk Management Test",
      dueDate: "Oct 5, 2023",
      status: "overdue" as const,
    },
  ],
  achievements = [
    {
      title: "First Course Completed",
      description: "Successfully completed your first trading course",
      icon: <Award className="h-8 w-8" />,
      earned: true,
    },
    {
      title: "Perfect Score",
      description: "Achieved 100% on an assessment",
      icon: <Award className="h-8 w-8" />,
      earned: true,
    },
    {
      title: "Trading Master",
      description: "Complete all advanced trading courses",
      icon: <Award className="h-8 w-8" />,
      earned: false,
    },
  ],
  overallProgress = 42,
}: StudentDashboardProps) => {
  return (
    <div className="w-full h-full bg-background p-6 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {studentName}</h1>
            <p className="text-muted-foreground">
              Continue your learning journey where you left off
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Download Materials</span>
            </Button>
            <Button className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Browse Courses</span>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Enrolled Courses
              </CardTitle>
              <CardDescription className="text-2xl font-bold">
                {enrolledCourses.length}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Completed Courses
              </CardTitle>
              <CardDescription className="text-2xl font-bold">
                {
                  enrolledCourses.filter((course) => course.progress === 100)
                    .length
                }
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Overall Progress
              </CardTitle>
              <CardDescription className="text-2xl font-bold">
                {overallProgress}%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={overallProgress} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Continue Learning</h2>
            <Button variant="ghost" className="flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {enrolledCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>

        {/* Upcoming Assessments */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Upcoming Assessments</h2>
            <Button variant="ghost" className="flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingAssessments.map((assessment, index) => (
              <AssessmentCard key={index} {...assessment} />
            ))}
          </div>
        </div>

        {/* Learning Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Learning Progress</h2>
              <Button variant="ghost" className="flex items-center gap-1">
                <span>Detailed Report</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>
                  Your learning activity over the past week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-end justify-between gap-2">
                  {/* Placeholder for chart - in a real app, use a charting library */}
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day, i) => (
                      <div
                        key={day}
                        className="flex flex-col items-center gap-2"
                      >
                        <div
                          className="bg-primary w-10 rounded-t-md"
                          style={{
                            height: `${Math.max(20, Math.floor(Math.random() * 150))}px`,
                          }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {day}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Achievements</h2>
              <Button variant="ghost" className="flex items-center gap-1">
                <span>View All</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <Achievement key={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
