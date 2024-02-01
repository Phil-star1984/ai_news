import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Course() {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5005/api/courses/${courseId}`
        );

        setCourse(result.data[0]);
        console.log(result.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();
  }, [courseId]);

  return (
    <div className="course_outer_container">
      {course.image ? (
        <div
          className="course_keyvisual"
          style={{
            backgroundImage: `url(${course.image.secure_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ) : (
        ""
      )}
      {/* <img
        src={course.image ? course.image.secure_url : ""}
        alt={course.title + " image"}
      /> */}
      <div className="course_content_container">
        <h1>{course.title}</h1>
        <h2>{course.section_one}</h2>
        
        <div>
          <h2>Kernkonzept</h2>
          {course.section_two}
        </div>
        <div className="course_examples_container">
          <h2>Praxisbeispiele</h2>
          {course.section_three}
        </div>
        <div className="course_training_container">
          <h2>Übungen & Reflexion</h2>
          {course.section_four}
        </div>
      </div>
    </div>
  );
}

export default Course;
