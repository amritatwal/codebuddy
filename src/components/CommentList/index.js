import React from "react";
// import Comment from "../Comment/index.js";
import { useState, useEffect } from "react";

// TODO: 
// CHANGE BELOW TO ENV VAR  
const API_URL = "https://code-review-soc-app.herokuapp.com";


export function CommentList({ comments }) {
    console.log("my list of ", comments)
    return (
        <div>
            {comments.map((comment) => {
                return <p>{comment.content}</p>
            })}
        </div>
    )

}

export default CommentList;



