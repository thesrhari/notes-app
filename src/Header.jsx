import { toggleInputField } from "./functions.js"
import "./styles/Header.css"

function Header(){

    return(
        <div className="header-container">
            <h1 className="logo-text">Notes App</h1>

            <button className="toggle-note-btn" onClick={toggleInputField}>New Note</button>
            
        </div>
    )
}

export default Header