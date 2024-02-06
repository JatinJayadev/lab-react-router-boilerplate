import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link to="/Home">
                    < h1 > Kalvium <span className="emoji">❤</span></h1>
                </Link>
            </div >
            <div className="Details" >
                <div>
                    <Link to="/Contact">
                        <h1>Contact</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/About">
                        <h1>About</h1>
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar