import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/students/Home";
import CoursesList from "./pages/students/CoursesList";
import CourseDetails from "./pages/students/CourseDetails";
import MyEnrollment from "./pages/students/MyEnrollment";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educators/Educators";
import Dashboard from "./pages/educators/Dashboard";
import AddCourse from "./pages/educators/AddCourse";
import MyCourses from "./pages/educators/MyCourses";
import StudentsEnrolled from "./pages/educators/StudentsEnrolled";
import Navbar from "./components/students/Navbar";

const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
        <Route path="/courses-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollment" element={<MyEnrollment />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        <Route path="/educator" element={<Educator />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
