import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Courses() {
  /* Load Courses with useEffect */
  /* API Endpoint req with axios http://localhost:5005/api/courses/ */
  /* display/map courses in Frontend */
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:5005/api/courses/").then((res) => {
        /* console.log(res.data); */
        setCourses(res.data);
      });
    } catch (error) {
      /* console.log(error); */
    }
  }, []);

  return (
    <div className="courses_container_outer">
      <div className="courses_container_inner">
        {courses.map((course, index) => (
          <div key={index} className="courses_cards">
            <Link to={course._id}>
              {course.image ? <div
                className="courses_cards_keyvisual"
                style={{
                  backgroundImage: `url(${course.image.secure_url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
              </div> : "No Image Available"}
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
