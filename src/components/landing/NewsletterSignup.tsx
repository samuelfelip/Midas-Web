import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  backgroundImage?: string;
}

const NewsletterSignup = ({
  title = "Stay Updated with Midas Trading Academy",
  description = "Subscribe to our newsletter for exclusive trading insights, market analysis, and special course offers.",
  buttonText = "Subscribe",
  onSubmit = () => {},
  className,
  backgroundImage = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      onSubmit(email);
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section
      className={cn(
        "w-full py-16 px-4 md:px-8 bg-background relative overflow-hidden",
        className,
      )}
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full"
              disabled={isSubmitting}
              aria-label="Email address"
            />
            {error && (
              <p className="text-destructive text-sm mt-1 absolute">{error}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-w-[120px] gap-2"
          >
            {isSubmitting ? "Subscribing..." : buttonText}
            {!isSubmitting && <ArrowRight className="h-4 w-4" />}
          </Button>
        </form>

        {isSuccess && (
          <div className="mt-4 text-center text-sm text-primary font-medium animate-fade-in">
            Thank you for subscribing! Check your inbox for confirmation.
          </div>
        )}

        <div className="mt-6 text-center text-sm text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
