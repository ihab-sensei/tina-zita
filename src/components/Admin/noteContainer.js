import React, {useState} from 'react'
import Notes from "./Notes"
import NoteForm from "./NewNodeForm"

export default function NoteContainer() {
    const [notes, setNotes] = useState([{
        author: "Anna",
        date: "25/11/2020",
        note: "aişe wont be attending the meeting",
        urgency: "urgent"
    }])
    
    // console.log("note", notes)
    const [isVisible, setVisibility] = useState(false)
    const add = ()=>{
        setVisibility(true)
    }
    const handleClick = ()=>{
        setVisibility(false)
    }
    // const deleteItem = (indexToDelete)=>{
    //     setNotes(...notes, notes.filter((_, indexElement)=> indexElement!==indexToDelete))
    // }
    const deleteItem = ()=>{}
    
    const [userInput, setUserInput] = useState({})

    //add inputs as one note
    //go to children as props for onChange event
    const handleUserInput = (e, key) => {
        console.log(e.target.value);
        setUserInput({
          ...userInput,
          [key]: e.target.value,
        });
        console.log(userInput);
      };
    
    //add the note to the list of states
    //go to the form child for the submit event
      const handleSubmit = ( e) => {
        console.log(e);
        console.log(userInput)
        e.preventDefault();
        setNotes([...notes, userInput]);
        setVisibility(false)
      };

   
    //note={user.note} author={user.author} date={user.date} urgency={user.urgency} =>props for notes
    
    return (
        <div>
            <Notes note={notes[0].note} author={notes[0].author} date={notes[0].date} urgency={notes[0].urgency} add={add} deleteItem={deleteItem} />
            {isVisible && <NoteForm submit={handleSubmit} change={handleUserInput} click={handleClick} />}
        </div>
    )
}
