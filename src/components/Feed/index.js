import React from "react";
import Post from "../Post";
import moment from 'moment'

function Feed({ posts }) {
  return (
    <article className="feed">
      {posts.map((post) => {
        return (
          <Post
            key={post.post_id}
            avatar="https://i.ibb.co/r2z4DvG/avatar-soc1.png"
            title={post.title}
            username={post.username}
            date={moment(Date()).fromNow()}
            code={post.code}
            comments="Try this solution"
            attempt={post.attempt}
            describe={post.describe}
          />
        );
      })}
    </article>
  );
}

export default Feed;
