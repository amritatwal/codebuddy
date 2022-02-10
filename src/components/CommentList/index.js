import React from "react";
import Comment from "../Comment/index.js";
import { useState, useEffect } from "react";

// TODO: 
// CHANGE BELOW TO ENV VAR  
const API_URL = "https://code-review-soc-app.herokuapp.com";

export function CommentList({ post_id }) {
    const [comments, setComments] = useState();
    console.log(comments)

    const fetchComments = async () => {
        const response = await fetch(`${API_URL}/posts/${post_id}/comments`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        const recievedComments = data.payload;
        setComments(recievedComments)
    };

    useEffect(() => {
        fetchComments()
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            {comments?.map((comment) => {
                return <Comment comment={comment} />
            })}
        </div>
    )

}

export default CommentList;



