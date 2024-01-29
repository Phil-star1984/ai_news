import React from "react";
import "./App.css";
import FooterNews from "./components/FooterNews";
import { Routes, Route, Navigate } from "react-router-dom";
/* import AuthPage from "./pages/AuthPage.jsx"; */
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing";
import NavBar from "./components/NavBar.jsx";
import { NewsProvider } from "./context/NewsContext.jsx";
import CourseUpload from "./pages/CoursesUpload.jsx";
import Courses from "./pages/Courses.jsx";
import Course from "./components/Course.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Impressum from "./components/Impressum.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
/* import { AuthProvider, useAuth } from "./context/AuthContext.jsx"; */

function App() {
  /* const { isLoggedIn } = useAuth(); */

  return (
    <>
      <NewsProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/courses" element={<PrivateRoute />}>
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<Course />} />
          </Route>

          <Route path="/courses" element={<AdminRoute />}>
            <Route path="/courses/upload" element={<CourseUpload />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <FooterNews />
      </NewsProvider>
    </>
  );
}

export default App;
