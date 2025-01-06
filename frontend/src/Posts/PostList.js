import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                return <p>No posts available yet. Be the first to create one!</p>;
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.post_type}</h3>
                    <p>{post.content}</p>
                    <small>Posted on {new Date(post.created_at).toLocaleDateString()}</small>
                </div>
            ))}
        </div>
    );
}

export default PostList;
