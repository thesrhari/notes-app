import "./styles/Footer.css"

function Footer(){
    return(
        <div className="footer">
            <hr />
            <p className="footer-text">&copy; Notes App {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer