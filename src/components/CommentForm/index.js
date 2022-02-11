import React from 'react';
import { useState } from 'react';
import moment from 'moment'

const API_URL = "https://code-review-soc-app.herokuapp.com"

const CommentForm = ({ post_id }) => {
    const [inputText, updateInputText] = useState("");
    const [inputAuthor, updateInputAuthor] = useState("Anon");

    function handleTextChange(e) {
        updateInputText(e.target.value);
    }

    function handleAuthorChange(e) {
        updateInputAuthor(e.target.value);
    }

    function handleSubmit(e) {
        const comment = {
            post_id: post_id,
            author_id: inputAuthor,
            content: inputText,
            date_created: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }
        createComment(comment, post_id);
        updateInputText("");
        e.preventDefault();
    }

    // application/json for line 80
    async function createComment(comment, post_id) {
        const response = await fetch(`${API_URL}/posts/${post_id}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment),
        });
        const data = await response.json();
    }

    return (
        <div className="commentForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="author">
                    <input
                        type="text"
                        value={inputAuthor}
                        onChange={handleAuthorChange}
                        name="author"
                        className="commentForm__author"
                        placeholder={inputAuthor}
                    />
                </label>
                <label htmlFor="input">
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleTextChange}
                        name="input"
                        className="commentForm__input"
                        placeholder="Write a response..."
                    />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default CommentForm