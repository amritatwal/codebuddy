import React from "react";

export function Comment({ comment }) {
    return (
        <>
            <div className="comment">
                <p className="comment--author">{comment.author_id}</p>
                <p className="comment--text">{comment.content}</p>
            </div>
        </>
    );
}

export default Comment;