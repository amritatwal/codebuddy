import React from "react";
import css from "./Post.module.css";
import CommentForm from '../CommentForm/index.js';
import CommentList from '../CommentList/index.js';
import { useState } from 'react';

function Post({
  post_id,
  avatar,
  title,
  username,
  date,
  code,
  describe,
  attempt,
}) {
  const [comments, setComments] = useState([]);

  function addComment(textInput, authorInput, post_id) {
    setComments([...comments, { post_id: post_id, author: authorInput, body: textInput }])
  }
  
  return (
    <div className={css["post"]}>
      <div className={css["post-user"]}>
        <div className={css["post-user-info"]}>
          <div className={css["avatar"]}>
            <img src={avatar} alt="" />
          </div>
          <div className={css["profile"]}>
            <h3>
              <a href="https://loving-euclid-e4fece.netlify.app">{username}</a>
            </h3>
            <span className="post-time">
              <a href="https://loving-euclid-e4fece.netlify.app">{date}</a>
            </span>

          </div>
        </div>
        <a
          href="https://loving-euclid-e4fece.netlify.app"
          className="post-settings"
        >
          <i className="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <h4 className={css["post-title"]}>{title}</h4>
      <h5 className="content">{describe}</h5>
      <p className="post-attempt">{attempt}</p>
      <p className={css["input-post"]}>
        <code>{code}</code>
      </p>
      <div className={css["inte"]}>
        <div className="like">
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="fas fa-thumbs-up"></i> 2
          </a>
        </div>
        <div className="comment">
          <a href="https://loving-euclid-e4fece.netlify.app">2 Saves</a>
        </div>
        <ul>
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="far fa-thumbs-up"></i> Like
          </a>
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="far fa-comment-alt"></i> Comment
          </a>
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="far fa-share-square"></i> Save
          </a>
        </ul>
      </div>
      <div className="all-com">
        <a href="https://loving-euclid-e4fece.netlify.app">Previous comments</a>
      </div>
      <CommentForm addComment={addComment} post_id={post_id} />
      {comments.map(comment => {
        return <CommentList author={comment.author} body={comment.body} />
      })}
    </div>
  );
}
export default Post;
