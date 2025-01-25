import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = ({ isOpen, onClose }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const categories = ["Post", "Project", "Research", "Job", "Service"];

  console.log("Rendering Editor..."); // Debug


  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const validatePost = () => {
    const newErrors = [];
    if (!postTitle.trim()) {
      newErrors.push("Title is required");
    }
    if (!postContent.trim()) {
      newErrors.push("Post content is required");
    }
    if (!selectedCategory) {
      newErrors.push("Please select a category");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePost()) return;
    try {
      const token = localStorage.getItem("access_token"); // Assuming you store your token here
      const response = await axios.post(
        "http://127.0.0.1:8000/api/posts/create/",
        {title: postTitle,
          content: postContent,
          category: selectedCategory, },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPostTitle(""); // Clear the title
      setPostContent(""); // Clear the content
      setSelectedCategory(""); // Reset the category
      setFiles([]); // Reset file selection
      setErrors([]); // Clear any errors
      navigate("/posts"); // Redirect to the posts page
    } catch (err) {
      setErrors("Failed to create the post. Please try again.");
    }
  };


  if (!isOpen) return null;

  return (
    <div className="new-post-container">
      <h1>Create a New Post</h1>
      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Enter post title..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <Editor
            apiKey="your-api-key"
            value={postContent}
            onEditorChange={(content) => setPostContent(content)}
            init={{
                height: 300,
                menubar: false,
                plugins: ["lists", "link"],
                toolbar: "bold italic underline | bullist numlist | link",
            }}
          />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NewPost;
