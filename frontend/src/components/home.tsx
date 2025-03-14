import React from "react";
import Header from "./landing/Header";
import HeroSection from "./landing/HeroSection";
import FeaturedCourses from "./landing/FeaturedCourses";
import Testimonials from "./landing/Testimonials";
import NewsletterSignup from "./landing/NewsletterSignup";
import Footer from "./landing/Footer";
import AuthModal from "./auth/AuthModal";

const Home = () => {
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [authModalTab, setAuthModalTab] = React.useState<"login" | "register">(
    "login",
  );

  const handleOpenAuthModal = (tab: "login" | "register") => {
    setAuthModalTab(tab);
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handlePrimaryClick = () => {
    handleOpenAuthModal("register");
  };

  const handleSecondaryClick = () => {
    // Navigate to courses page
    console.log("Navigate to courses page");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuToggle={() => {}} isAuthenticated={false} />

      <main className="flex-grow">
        <HeroSection
          onPrimaryClick={handlePrimaryClick}
          onSecondaryClick={handleSecondaryClick}
        />

        <FeaturedCourses />

        <Testimonials />

        <NewsletterSignup />
      </main>

      <Footer />

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={handleCloseAuthModal}
          defaultTab={authModalTab}
        />
      )}
    </div>
  );
};

export default Home;
