import React from "react";
import Hero from "../../components/students/Hero";
import Companies from "../../components/students/companies";
import CourseSection from "../../components/students/CourseSection";
import TestimonialSection from "../../components/students/TestimonialSection";
import CalltoAction from "../../components/students/CalltoAction";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CourseSection />
      <TestimonialSection /> 
      <CalltoAction /> 
    </div>
  );
};

export default Home;
