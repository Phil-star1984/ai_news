import React, { useState } from "react";
import axios from "axios";
import FormDataInput from "../components/FormDataInput.jsx";
/* import { useLocation } from "react-router-dom"; */

function CoursesUpload() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    author: "",
    imgUrl: "",
    section_one: "",
    section_two: "",
    section_three: "",
    section_four: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:5005/api/courses/upload",
        { ...formData }
      );

      if (result.status === 201) {
        setSuccessMessage("Upload successful");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
        /* console.log(result.data);
        console.log("Result Status: ", successMessage); */
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Upload failed");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }

    setFormData({
      title: "",
      description: "",
      duration: "",
      author: "",
      imgUrl: "",
      section_one: "",
      section_two: "",
      section_three: "",
      section_four: "",
      image: "",
    });
  };

  const handleCourseImageUpload = (e) => {
    const file = e.target.files[0];
    /* console.log(file); */
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
    } else {
      setFormData({ image: "" });
    }
  };

  //update formData Object with destructuring & computed properties
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="upload_outer_container">
      <h1>Upload AI Course</h1>
      <div className="upload_container">
        {successMessage && (
          <div className="status_message_success">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="status_message_error">{errorMessage}</div>
        )}
        <form className="upload_form" onSubmit={handleSubmit} method="POST">
          <FormDataInput
            label="Title"
            name="title"
            type="text"
            placeholder="Course title here"
            value={formData.title}
            onChange={handleChange}
          />
          <FormDataInput
            label="Description"
            name="description"
            type="text"
            placeholder="Course description here"
            value={formData.description}
            onChange={handleChange}
          />
          <FormDataInput
            label="Duration"
            name="duration"
            type="text"
            placeholder="Course duration here"
            value={formData.duration}
            onChange={handleChange}
          />
          <FormDataInput
            label="Author"
            name="author"
            type="text"
            placeholder="Course author here"
            value={formData.author}
            onChange={handleChange}
          />
          <FormDataInput
            label="Image URL"
            name="imgUrl"
            type="text"
            placeholder="Image URL here"
            value={formData.imgUrl}
            onChange={handleChange}
          />

          <label>Section One</label>
          <textarea
            name="section_one"
            /* defaultValue="Edit section here" */
            /* placeholder="Edit section here" */
            rows={5}
            cols={23}
            value={formData.section_one}
            onChange={handleChange}
          />

          <label>Section Two</label>
          <textarea
            name="section_two"
            /* defaultValue="Edit section here" */
            /* placeholder="Edit section here" */
            rows={5}
            cols={23}
            value={formData.section_two}
            onChange={handleChange}
          />

          <label>Section Three</label>
          <textarea
            name="section_three"
            /* defaultValue="Edit section here" */
            /* placeholder="Edit section here" */
            rows={5}
            cols={30}
            value={formData.section_three}
            onChange={handleChange}
          />

          <label>Section Four</label>
          <textarea
            name="section_four"
            /* defaultValue="Edit section here" */
            /* placeholder="Edit section here" */
            rows={5}
            cols={30}
            value={formData.section_four}
            onChange={handleChange}
          />

          <label htmlFor="file">Upload Course Image</label>
          <input
            type="file"
            accept="image/"
            onChange={handleCourseImageUpload}
          ></input>
          <button className="upload_button" type="submit">
            Upload Course
          </button>
        </form>
        <div>
          {formData.image ? (
            <>
              <img
                src={formData.image}
                alt="course_image"
                className="upload_preview"
              />
              <p></p>
            </>
          ) : (
            <p>Preview will appear here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoursesUpload;
