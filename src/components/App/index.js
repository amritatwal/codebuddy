// Import React hooks
import { useState, useEffect, useCallback } from "react";
import moment from 'moment'

// Import React components
import Header from "../Header";
import Feed from "../Feed";
import Navbar from "../Nav";
import Button from "../Button";

// Import CSS 
import css from './App.module.css';
import './index.css';

//declare vars
const API_URL = "https://code-review-soc-app.herokuapp.com";
const numberOfPosts = 5;


function App() {
  const [renderedPosts, updateRenderedPosts] = useState([]);
  const [offset, setOffset] = useState(5);

  function handlePost(post) {
    const newPosts = [...renderedPosts, ...post];
    updateRenderedPosts(newPosts);
  }

  // Fetch a post from the back-end
  // TODO: render a few posts once one works,
  // TODO: abstract away the API fetching elsewhere so we can reuse this when fetching comments

  const fetchPosts = async () => {
    const response = await fetch(`${API_URL}/posts?limit=${numberOfPosts}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    const data = await response.json();
    const post = data.payload;
    handlePost(post);
  };

  useEffect(() => {
    fetchPosts();
    //eslint-disable-next-line
  }, []);

  const fetchMorePosts = async () => {
    const response = await fetch(`${API_URL}/posts?limit=${numberOfPosts}&offset=${offset}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    const data = await response.json();
    const post = data.payload;
    handlePost(post);
  };

  function loadMorePosts() {
    // Increase count by 5
    let count = offset + 5;
    setOffset(count)
    fetchMorePosts();
  }


  return (
    <div className={css.App}>
      <Navbar />
      <div className={css["form-container"]}>
        <Header />
      </div>
      <div className="container">
        <Feed posts={renderedPosts} />
        <Button onClick={loadMorePosts} />
      </div>
    </div>
  );
}

export default App;
