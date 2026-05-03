import Banner from "@/components/home/Banner";
import Books from "@/components/home/Books";
import AnimatedSection from "@/components/shared/Animated";
import BlogPage from "@/components/shared/Bloge";
import React from "react";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="bg-[url('/hero.jpg')] bg-cover">
        <Banner />
      </div>

      <div className="py-10 bg-blue-50 px-4 sm:px-6 lg:px-8 text-black">
        <Marquee
          pauseOnHover
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 font-medium"
        >
          👉 Dear Debbie by Freida McFadden — A chilling thriller full of
          secrets and suspense. 👉 My Husband’s Wife by Alice Feeney — Dark
          twists and hidden truths in a gripping story. 👉 The Night We Met by
          Abby Jimenez — A heartfelt romance about love and second chances. 👉
          Project Hail Mary by Andy Weir — An astronaut’s thrilling mission to
          save humanity.
        </Marquee>
      </div>

      <Books />
      <BlogPage />
      <AnimatedSection />
    </div>
  );
};

export default HomePage;
