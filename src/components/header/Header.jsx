import {Link, useNavigate} from "react-router-dom"
import "./Header.css"
const Header = () => {
    const navigate = useNavigate();
    return <header className="header">
        <img className="logo" src="images/logo1.png" alt="logotipoo"/>
        <div className="buttons">
            <button className="header-button" id="home" onClick={()=>navigate("/")}>Home</button>
            <button className="header-button" id="new-video" onClick={()=>navigate("/new")}>Nuevo video</button>
        </div>
    </header>
}
export default Header