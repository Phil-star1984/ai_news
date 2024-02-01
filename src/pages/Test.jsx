import React, { useState } from "react";
import axios from "axios";
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
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:5005/api/courses/upload",
        {
          ...formData,
        }
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
      image: "",
    });
  };

  const handleCourseImageUpload = (e) => {
    const file = e.target.files[0];
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
      setFormData({ ...formData, image: "" });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function FormInput({ label, name, type, value, onChange, placeholder }) {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"
        />
      </div>
    );
  }

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
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            name="title"
            placeholder="Course Title here"
            value={formData.title}
            onChange={handleFormChange}
          ></input>
          <FormInput
            label="Description"
            name="description"
            type="text"
            placeholder="Course Description here"
            value={formData.description}
            onChange={handleFormChange}
          />
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Course duration here"
            value={formData.duration}
            onChange={handleFormChange}
          ></input>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Course author"
            value={formData.author}
            onChange={handleFormChange}
          ></input>
          <label htmlFor="imgUrl">Image URL</label>
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL here"
            value={formData.imgUrl}
            onChange={handleFormChange}
          ></input>
          <label>Section One</label>
          <textarea
            name="section_one"
            /* defaultValue="Edit section one of the course" */
            rows={3}
            cols={23}
            value={formData.section_one}
            onChange={handleFormChange}
          />

          <label>Section Two</label>
          <textarea
            name="section_two"
            /* defaultValue="Edit section two of the course" */
            rows={3}
            cols={23}
            value={formData.section_two}
            onChange={handleFormChange}
          />

          {/* <label htmlFor="section_three">Section Three</label>
          <input
            type="text"
            name="section_three"
            placeholder="Course section three here"
            value={section_three}
            onChange={(e) => {
              setSectionThree(e.target.value);
            }}
          ></input> */}
          <label>Section Three</label>
          <textarea
            name="section_three"
            /* defaultValue="Edit section three of the course" */
            rows={3}
            cols={23}
            value={formData.section_three}
            onChange={handleFormChange}
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






///////////////////////////////////////////////



import React, { useState } from "react";
import axios from "axios";
/* import { useLocation } from "react-router-dom"; */

function CoursesUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [section_one, setSectionOne] = useState("");
  const [section_two, setSectionTwo] = useState("");
  const [section_three, setSectionThree] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:5005/api/courses/upload",
        {
          title,
          description,
          duration,
          author,
          imgUrl,
          section_one,
          section_two,
          section_three,
          image: courseImage,
        }
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

    setTitle("");
    setDescription("");
    setDuration("");
    setAuthor("");
    setCourseImage("");
    setImgUrl("");
    setSectionOne("");
    setSectionTwo("");
    setSectionThree("");
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
        setCourseImage(reader.result);
      };
    } else {
      setCourseImage("");
    }
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
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            name="title"
            placeholder="Course Title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Course Description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Course duration here"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          ></input>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Course author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          ></input>
          <label htmlFor="imgUrl">Image URL</label>
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL here"
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          ></input>
          <label>Section One</label>
          <textarea
            name="section_one"
            /* defaultValue="Edit section one of the course" */
            rows={3}
            cols={23}
            value={section_one}
            onChange={(e) => {
              setSectionOne(e.target.value);
            }}
          />

          <label>Section Two</label>
          <textarea
            name="section_two"
            /* defaultValue="Edit section two of the course" */
            rows={3}
            cols={23}
            value={section_two}
            onChange={(e) => {
              setSectionTwo(e.target.value);
            }}
          />

          {/* <label htmlFor="section_three">Section Three</label>
          <input
            type="text"
            name="section_three"
            placeholder="Course section three here"
            value={section_three}
            onChange={(e) => {
              setSectionThree(e.target.value);
            }}
          ></input> */}
          <label>Section Three</label>
          <textarea
            name="section_three"
            /* defaultValue="Edit section three of the course" */
            rows={3}
            cols={23}
            value={section_three}
            onChange={(e) => {
              setSectionThree(e.target.value);
            }}
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
          {courseImage ? (
            <>
              <img
                src={courseImage}
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
