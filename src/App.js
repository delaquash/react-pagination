import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';


const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchContent = async () =>{
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    }
    fetchContent();
  }, []);

  console.log(post);

  // Get currents Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="Container mt-5">
        <h1 className="text-primary mb-3"> My Blog Post </h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={Posts.length} />
    </div>
  );
};

export default App;
