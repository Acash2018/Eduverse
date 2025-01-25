import axios from "axios";
import React, { useState } from "react";

const NewPostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("access_token");
            const response = await axios.post("http://127.0.0.1:8000/api/posts/", {
                title,
                content,
            });
            console.log("Post created:", response.data);
            onPostCreated(response.data); // Callback to refresh the post feed
            setTitle(""); // Reset form fields
            setContent("");
            setError("");
        } catch (err) {
            console.error(err);
            setError("Failed to create post.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Post</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewPostForm;
