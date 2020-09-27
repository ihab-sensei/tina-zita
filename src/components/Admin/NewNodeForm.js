import React from 'react'

export default function NewNodeForm() {
  
    return (
        <div>
            <label>Date:</label>
            <input type="text" />
            <label>Urgency:</label>
            <select name="urgency" id="urgency">
                <option value="urgent">urgent</option>
                <option value="canWait">it can wait</option>
            </select>
            <label>Enter your Name:</label>
            <input type="text"/>
            <label>Leave your note here: </label>
            <textarea placeholder="type your message here"/>
        </div>
    )
}
