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
        <Marquee pauseOnHover className="">
          👉iPhone 15 Pro: Premium Apple phone with powerful chip and excellent
          camera performance. 👉Samsung Galaxy S24: Advanced Android phone with
          AI features and smooth display experience. 👉 Xiaomi Redmi Note 13: 
          Budget friendly phone offering good camera and long lasting battery
           👉OnePlus 12:  High performance smartphone with fast charging and
          smooth gaming experience
        </Marquee>
      </div>

      <Books />
      <BlogPage />
      <AnimatedSection/>
    </div>
  );
};

export default HomePage;
