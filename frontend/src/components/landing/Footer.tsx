import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface FooterProps {
  logoUrl?: string;
  companyName?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

const Footer = ({
  logoUrl = "/public/images/Midas_isotipo.png",
  companyName = "Midas Trading Academy",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contactInfo = {
    email: "contact@midastrading.com",
    phone: "+1 (555) 123-4567",
    address: "123 Trading Street, Financial District, New York, NY 10005",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Academy",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Instructors", href: "/instructors" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Courses",
      links: [
        { label: "Forex Trading", href: "/courses/forex" },
        { label: "Stock Market", href: "/courses/stocks" },
        { label: "Cryptocurrency", href: "/courses/crypto" },
        { label: "Options Trading", href: "/courses/options" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Market Analysis", href: "/analysis" },
        { label: "Trading Tools", href: "/tools" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoUrl} alt={companyName} className="h-8 w-8" />
              <h2 className="text-xl font-bold">{companyName}</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering traders with professional education and market insights
              to achieve financial freedom.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.email && (
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400" />
                <span className="text-gray-400">{contactInfo.email}</span>
              </div>
            )}
            {contactInfo.phone && (
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400" />
                <span className="text-gray-400">{contactInfo.phone}</span>
              </div>
            )}
            {contactInfo.address && (
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-gray-400" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400">
                Get the latest trading insights and academy updates
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none w-full md:w-64"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {currentYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
