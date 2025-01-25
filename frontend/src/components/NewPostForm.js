import axios from 'axios';
import React, { useState } from 'react';

const NewPostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/posts/',
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Post created:', response.data);
      onPostCreated(response.data); // Refresh posts
      setTitle('');
      setContent('');
    } catch (err) {
      setError('Error creating post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPostForm;
