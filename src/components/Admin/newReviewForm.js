import React from 'react'

export default function newReviewForm() {
    return (
        <div>
            <label>Date:</label>
            <input type="text" />
            <label>Hour:</label>
            <input type="text"/>
            <label>Enter event:</label>
            <input type="text"/>
            <label>Leave your note here: </label>
            <textarea placeholder="type your message here"/>
        </div>
    )
}