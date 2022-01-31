import React from "react";

export function Comment({ author, text }) {
    return (
        <>
            <div className="comment">
                <p className="comment--author">{author}</p>
                <p className="comment--text">{text}</p>
            </div>
        </>
    );
}

export default Comment;