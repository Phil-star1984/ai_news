import React, { useState } from "react";
import axios from "axios";
import FormDataInput from "../components/FormDataInput.jsx";

function CoursesUpload() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    author: "",
    imgUrl: "",
    image: "",
    section_one: "",
    section_two: "",
    section_three: "",
    section_four: "",
    example_one: "",
    example_two: "",
    example_three: "",
    link_one: "",
    link_two: "",
    link_three: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/courses/upload`,
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
      image: "",
      section_one: "",
      section_two: "",
      section_three: "",
      section_four: "",
      example_one: "",
      example_two: "",
      example_three: "",
      link_one: "",
      link_two: "",
      link_three: "",
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

          <FormDataInput
            label="Example One"
            name="example_one"
            type="text"
            placeholder="Example one here"
            value={formData.example_one}
            onChange={handleChange}
          />

          <FormDataInput
            label="Example Two"
            name="example_two"
            type="text"
            placeholder="Example two here"
            value={formData.example_two}
            onChange={handleChange}
          />

          <FormDataInput
            label="Example Three"
            name="example_three"
            type="text"
            placeholder="Example three here"
            value={formData.example_three}
            onChange={handleChange}
          />

          <FormDataInput
            label="Link One"
            name="link_one"
            type="text"
            placeholder="Link one URL here"
            value={formData.link_one}
            onChange={handleChange}
          />

          <FormDataInput
            label="Link Two"
            name="link_two"
            type="text"
            placeholder="Link two URL here"
            value={formData.link_two}
            onChange={handleChange}
          />

          <FormDataInput
            label="Link Three"
            name="link_three"
            type="text"
            placeholder="Link three URL here"
            value={formData.link_three}
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
