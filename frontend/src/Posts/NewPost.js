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
    try {
      const token = localStorage.getItem("access_token"); // Assuming you store your token here
      const response = await axios.post(
        "http://127.0.0.1:8000/api/posts/create/",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Post created successfully!");
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to create the post. Please try again.");
    }
  };


  if (!isOpen) return null;

  return (
    <div className="new-post-container">
      <h1>Create a New Post</h1>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
  


export default NewPost;
