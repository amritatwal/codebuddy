import React from "react";
import Comment from "../Comment/index.js";

export function CommentList({ text, author}) {
    return <Comment author={author} text={text}/>;
}

export default CommentList;