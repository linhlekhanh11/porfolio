import { Link } from "react-router-dom";
import profileLogo from "../assets/user-logo.svg";



export default function Header() {
    return (
      <div className="pageHeader" id="pageHeader">
        <div className="menuBarContainer">
            <h1 className="logoName">LINH</h1>
            <div className="menuBar">
            {/* <Link to={`/aboutme`} className="linkStyle">
                <h3>About me</h3>
            </Link> */}
            <Link to={`/project`} className="linkStyle">
                <h3>Project</h3>
            </Link>
            <Link to={`/contact`} className="linkStyle">
                <h3>Contact</h3>
            </Link>
            </div>
        </div>
        <div className="profileIcon">
          <img src={profileLogo} className="logoProfile" />
        </div>
      </div>
    );
}