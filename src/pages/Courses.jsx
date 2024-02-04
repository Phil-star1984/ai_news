import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function Courses() {
  /* Load Courses with useEffect */
  /* API Endpoint req with axios http://localhost:5005/api/courses/ */
  /* display/map courses in Frontend */
  const [courses, setCourses] = useState([]);
  const { isLoggedIn, userData } = useAuth();
  const [hasAdminRights, setHasAdminRights] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}api/courses/`,
          {},
          { withCredentials: true }
        );
        setCourses(response.data);
        if (isLoggedIn && userData.role === "Admin") {
          setHasAdminRights(true);
        }
      } catch (error) {
        console.error(error.response?.data?.message || "No courses available");
      }
    };

    fetchCourses();
  }, [isLoggedIn, userData]);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}api/courses/${id}`,
        {},
        { withCredentials: true }
      );
      setCourses((prev) => prev.filter((course) => course._id !== id));
      alert("Course deleted");
    } catch (error) {
      console.error("Course could not be deleted", error);
    }
  };

  /* const deleteCourse = (id) => {
    console.log(id);
  }; */

  return (
    <div className="courses_container_outer">
      <div className="courses_container_inner">
        {courses.map((course) => (
          <div key={course._id} className="courses_cards">
            <Link to={course._id}>
              <div
                className="courses_cards_keyvisual"
                style={{
                  backgroundImage: `url(${
                    course.image?.secure_url || "placeholder.jpg"
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="courses_cards_description">
                <h2>{course.title}</h2>
                <p>
                  {course.description.length > 25
                    ? course.description
                    : "This is the short description of the course that you will take part in."}
                </p>
                <div className="courses_subinfo_container">
                  <div className="courses_subinfo">
                    <p>Author: {course.author}</p>
                  </div>
                  <div className="courses_subinfo">
                    <p>Duration: {course.duration}</p>
                  </div>
                  {hasAdminRights && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
