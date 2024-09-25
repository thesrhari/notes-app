import "./styles/Body.css";
import { hideInputField } from "./functions";
import { useEffect, useState } from "react";

function Body(){

    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() =>{
        document.querySelector(".input-field").style.display = "none";
    }, []);

    function handleTitleChange(){
        const title = document.querySelector(".title-text").value;
        setNewTitle(title);
    }

    function handleDescriptionChange(){
        const description = document.querySelector(".description-text").value;
        setNewDescription(description);
    }
    
    function addNote(){
        if ((newTitle.trim() !== "") && (newDescription.trim() !== "")){
            const note = {  title: newTitle, 
                            description: newDescription};
            setNotes(prevNotes => [...prevNotes, note]);
            setNewTitle("");
            setNewDescription("");
            hideInputField();

        }
        else{
            alert("All fields are required!")
        }
    }

    function removeNote(i){
        const updatedNotes = notes.filter((_, index) => i !== index);
        setNotes(updatedNotes);
    }

    return(
        <div className="body-container">
            <div className="input-field">
                <textarea placeholder="Enter note title..." className="title-text" value={newTitle} onChange={handleTitleChange}></textarea>
                <textarea placeholder="Enter note description..." className="description-text" value={newDescription} onChange={handleDescriptionChange}></textarea>
                <button className="submit-btn" onClick={addNote}>Submit</button>
            </div>
            <div className="notes-container">
                {notes.map((note, index) => <div key={index} className="note">
                                                <h3 className="note-title"> {note.title} 
                                                                            <button className="delete-btn" onClick={() => removeNote(index)}>❌</button> 
                                                </h3>
                                                <p>{note.description}</p>
                                            </div>)}
            </div>
        </div>
    )
}

export default Body