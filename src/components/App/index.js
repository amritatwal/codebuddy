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

let initialState = [];

function App() {
  const [renderedPosts, updateRenderedPosts] = useState(initialState);
  const [numberOfPosts, setnumberOfPosts] = useState(1);

  function handlePost(post) {
    updateRenderedPosts([...renderedPosts, post]);
  }

  // Fetch a post from the back-end
  // TODO: render a few posts once one works,
  // TODO: abstract away the API fetching elsewhere so we can reuse this when fetching comments

  const fetchPost = async () => {
    const response = await fetch(`${API_URL}/posts/${numberOfPosts}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    const post = data.payload[0];
    handlePost(post);
  };

  useEffect(() => {
    fetchPost()
    //eslint-disable-next-line
  }, []);

  return (
    <div className={css.App}>
      <Navbar />
      <div className={css["form-container"]}>
        <Header />
      </div>
      <div className="container">
        <Feed posts={renderedPosts} />
        {/* <Button onClick={onClick} /> */}
      </div>
    </div>
  );
}

export default App;
