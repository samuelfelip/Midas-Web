import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatarUrl?: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([
    {
      quote:
        "Midas Trading Academy transformed my approach to trading. The strategies I learned helped me achieve consistent profits in just three months.",
      name: "Sarah Johnson",
      role: "Forex Trader",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "The instructors are actual professional traders who share real-world insights. This isn't theoretical knowledge - it's practical wisdom that works in today's markets.",
      name: "Michael Chen",
      role: "Day Trader",
      rating: 4,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      quote:
        "After trying several other trading courses, Midas Academy stands out for its personalized approach. The mentorship program was invaluable for my development.",
      name: "Jessica Williams",
      role: "Swing Trader",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    },
    {
      quote:
        "I was skeptical at first, but the risk management techniques I learned at Midas saved my portfolio during market volatility. Worth every penny.",
      name: "David Rodriguez",
      role: "Options Trader",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      quote:
        "The community of traders at Midas is supportive and collaborative. I've made connections that continue to help me grow as a trader.",
      name: "Emma Thompson",
      role: "Crypto Trader",
      rating: 4,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ]);

  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from traders who have transformed their approach to the markets
            with our academy's guidance.
          </p>
        </div>

        <div className="relative px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <RatingStars rating={testimonial.rating} />
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                          <AvatarImage
                            src={testimonial.avatarUrl}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </div>
          </Carousel>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join over 2,000+ traders who have elevated their trading with Midas
            Academy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
