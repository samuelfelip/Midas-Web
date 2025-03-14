import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  backgroundImage?: string;
  logoUrl?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSection = ({
  title = "Master Trading with Midas Academy",
  subtitle = "Learn professional trading strategies from industry experts and transform your financial future",
  ctaPrimaryText = "Get Started",
  ctaSecondaryText = "View Courses",
  backgroundImage = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80",
  logoUrl = "/public/images/Midas_isotipo.png",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center z-10">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logoUrl}
            alt="Midas Trading Academy"
            className="h-20 w-20 bg-white p-4 rounded-full shadow-lg"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button
            size="lg"
            className="text-base px-8 py-6 h-auto font-semibold"
            onClick={onPrimaryClick}
          >
            {ctaPrimaryText}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "text-base px-8 py-6 h-auto font-semibold",
              "bg-transparent text-white border-white hover:bg-white/10 hover:text-white",
            )}
            onClick={onSecondaryClick}
          >
            {ctaSecondaryText}
          </Button>
        </div>

        {/* Optional: Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
