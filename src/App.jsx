import React, { useState } from "react";
import "./App.css";
import FooterNews from "./components/FooterNews";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing";
import NavBar from "./components/NavBar.jsx";
import { NewsProvider } from "./context/NewsContext.jsx";
import CourseUpload from "./pages/CoursesUpload.jsx";
import Courses from "./pages/Courses.jsx";
import Course from "./components/Course.jsx";

function App() {
  return (
    <>
      <NewsProvider>
        <NavBar />

        <Routes>
          <Route path="/auth" elment={<AuthPage />} />
          <Route path="/" element={<Home />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/courses/upload" element={<CourseUpload />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />} />
        </Routes>
        <FooterNews />
      </NewsProvider>
    </>
  );
}

export default App;
