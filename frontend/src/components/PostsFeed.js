import axios from 'axios';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FaComment, FaHeart, FaShare } from 'react-icons/fa';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';
import NewPostForm from "./NewPostForm";

const PostsFeed = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get(
        `http://127.0.0.1:8000/api/posts/user/${userId}?page=${page}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      const newPosts = response.data.posts;
      setPosts(prevPosts => page === 1 ? newPosts : [...prevPosts, ...newPosts]);
      setHasMore(response.data.hasMore);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userId, page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      if (hasMore && !loading) {
        setPage(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem('access_token');
      await axios.post(
        `http://127.0.0.1:8000/api/posts/${postId}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId
            ? { ...post, likes: post.likes + 1, isLiked: true }
            : post
        )
      );
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  if (loading && page === 1) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="posts-feed">
      <NewPostForm onPostCreated={(newPost) => setPosts([newPost, ...posts])} />
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <img 
              src={post.author.avatar || '/default-avatar.png'} 
              alt={post.author.username}
              className="author-avatar"
            />
            <div className="post-meta">
              <h3>{post.author.username}</h3>
              <span className="post-date">
                {format(new Date(post.created_at), 'MMM d, yyyy')}
              </span>
            </div>
          </div>
          
          <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post content" className="post-image" />
            )}
          </div>
          
          <div className="post-actions">
            <button 
              className={`action-btn ${post.isLiked ? 'liked' : ''}`}
              onClick={() => handleLike(post.id)}
            >
              <FaHeart /> {post.likes}
            </button>
            <button className="action-btn">
              <FaComment /> {post.comments}
            </button>
            <button className="action-btn">
              <FaShare />
            </button>
          </div>
        </div>
      ))}
      
      {loading && <LoadingSpinner size={30} />}
      {!hasMore && posts.length > 0 && (
        <p className="no-more-posts">No more posts to load</p>
      )}
      {posts.length === 0 && !loading && (
        <p className="no-posts">No posts found</p>
      )}
    </div>
  );
};

PostsFeed.propTypes = {
  userId: PropTypes.string.isRequired
};

export default PostsFeed;
