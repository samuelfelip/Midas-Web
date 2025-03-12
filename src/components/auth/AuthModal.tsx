import React, { useState } from "react";
import { Mail, Lock, User, UserPlus, LogIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AuthModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultTab?: "login" | "register";
}

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(["student", "teacher", "admin"], {
    required_error: "Please select a role",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

const AuthModal = ({
  isOpen = true,
  onClose = () => {},
  defaultTab = "login",
}: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "student",
    },
  });

  const onLoginSubmit = (data: LoginFormValues) => {
    console.log("Login data:", data);
    // Handle login logic here
    onClose();
  };

  const onRegisterSubmit = (data: RegisterFormValues) => {
    console.log("Register data:", data);
    // Handle registration logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {activeTab === "login" ? "Welcome Back" : "Create an Account"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {activeTab === "login"
              ? "Sign in to access your account"
              : "Join Midas Trading Academy today"}
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value as "login" | "register")}
          className="w-full mt-4"
        >
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6 space-y-4">
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button
                    variant="link"
                    className="px-0 font-normal text-sm"
                    type="button"
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="register" className="mt-6 space-y-4">
            <Form {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>I want to join as</FormLabel>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={
                            field.value === "student" ? "default" : "outline"
                          }
                          className="w-full"
                          onClick={() => field.onChange("student")}
                        >
                          Student
                        </Button>
                        <Button
                          type="button"
                          variant={
                            field.value === "teacher" ? "default" : "outline"
                          }
                          className="w-full"
                          onClick={() => field.onChange("teacher")}
                        >
                          Teacher
                        </Button>
                        <Button
                          type="button"
                          variant={
                            field.value === "admin" ? "default" : "outline"
                          }
                          className="w-full"
                          onClick={() => field.onChange("admin")}
                        >
                          Admin
                        </Button>
                      </div>
                      <FormDescription>
                        Select your role in the Midas Trading Academy.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
          <div className="text-sm text-center text-muted-foreground w-full">
            {activeTab === "login" ? (
              <span>
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 font-semibold"
                  onClick={() => setActiveTab("register")}
                >
                  Sign up
                </Button>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 font-semibold"
                  onClick={() => setActiveTab("login")}
                >
                  Sign in
                </Button>
              </span>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
