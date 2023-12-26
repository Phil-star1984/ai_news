import React, { useState } from "react";
import axios from "axios";

function CoursesUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [sectionOne, setSectionOne] = useState("");
  const [sectionTwo, setSectionTwo] = useState("");
  const [sectionThree, setSectionThree] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [status, setStatus] = useState("");

  /* console.log(courseImage); */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:5005/api/courses/upload",
        {
          title,
          description,
          image: courseImage,
        }
      );
      console.log(result.data);

      if (result.status == 200) {
        setStatus("Upload successful");
        alert("Course upload successful!");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error uploading course");
    }

    setTitle("");
    setDescription("");
    setDuration("");
    setAuthor("");
    setCourseImage("");
    setImageUrl("");
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
      <h1>Upload Courses here</h1>
      <div className="upload_container">
        <form className="upload_form" onSubmit={handleSubmit} method="POST">
          <label htmlFor="title">Title</label>
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
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            name="image_url"
            placeholder="Image URL here"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          ></input>
          <label htmlFor="section_one">Section One</label>
          <input
            type="text"
            name="section_one"
            placeholder="Course section one here"
            value={sectionOne}
            onChange={(e) => {
              setSectionOne(e.target.value);
            }}
          ></input>
          <label htmlFor="section_two">Section Two</label>
          <input
            type="text"
            name="section_two"
            placeholder="Course section two here"
            value={sectionTwo}
            onChange={(e) => {
              setSectionTwo(e.target.value);
            }}
          ></input>
          <label htmlFor="section_three">Section Three</label>
          <input
            type="text"
            name="section_three"
            placeholder="Course section three here"
            value={sectionThree}
            onChange={(e) => {
              setSectionThree(e.target.value);
            }}
          ></input>
          <label htmlFor="file">Upload Course Image</label>
          <input
            type="file"
            accept="image/"
            onChange={handleCourseImageUpload}
          ></input>
          <button type="submit">Upload Course</button>
        </form>
        <div>
          {status ? <p>{status}</p> : ""}

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
