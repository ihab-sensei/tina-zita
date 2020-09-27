import React, {useState} from 'react'
import Notes from "./Notes"
import NoteForm from "./NewNodeForm"

export default function noteContainer() {
    // const [user, setUser] = useState({});
    // // note={note} author={author} date={date} urgency={urgent}
    // const handleInput = (e, key) => {
    //     console.log(e.target.value);
    //     setUser({
    //       ...user,
    //       [key]: e.target.value,
    //     });
    //   };
    //note={user.note} author={user.author} date={user.date} urgency={user.urgency} =>props for notes
    
    return (
        <div>
            <Notes  />
            <NoteForm />
        </div>
    )
}
