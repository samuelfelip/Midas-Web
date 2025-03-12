import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  price: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

interface FeaturedCoursesProps {
  courses?: CourseProps[];
  title?: string;
  description?: string;
}

const FeaturedCourses = ({
  courses = [
    {
      id: "1",
      title: "Forex Trading Fundamentals",
      description:
        "Learn the basics of forex trading with our comprehensive course designed for beginners.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      instructor: "Sarah Johnson",
      price: 99.99,
      duration: "4 weeks",
      level: "Beginner",
    },
    {
      id: "2",
      title: "Technical Analysis Mastery",
      description:
        "Master the art of technical analysis and chart patterns to make informed trading decisions.",
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80",
      instructor: "Michael Chen",
      price: 149.99,
      duration: "6 weeks",
      level: "Intermediate",
    },
    {
      id: "3",
      title: "Advanced Trading Strategies",
      description:
        "Take your trading to the next level with advanced strategies used by professional traders.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      instructor: "David Rodriguez",
      price: 199.99,
      duration: "8 weeks",
      level: "Advanced",
    },
  ],
  title = "Featured Courses",
  description = "Explore our most popular trading courses and start your journey to financial success.",
}: FeaturedCoursesProps) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button className="gap-2">
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface CourseCardProps {
  course: CourseProps;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const levelColorMap = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{course.title}</CardTitle>
          <span
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              levelColorMap[course.level],
            )}
          >
            {course.level}
          </span>
        </div>
        <CardDescription className="line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
              alt={course.instructor}
              className="h-6 w-6 rounded-full mr-2"
            />
            <span className="text-sm">{course.instructor}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>{course.duration}</span>
            <span className="font-bold">${course.price.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCourses;
