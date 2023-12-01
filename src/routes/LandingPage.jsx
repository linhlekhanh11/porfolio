import profileLogo from "../assets/react.svg";
import { Outlet, Link } from "react-router-dom";
import "./landingpage.css"

export default function LandingPage() {
  return (
    <>
      <div className="sidebar">
        <h1>Who is watching?</h1>
        <Link to={`/porfolio`}>
        <img src={profileLogo} className="logo react" />
        </Link>
          <h2 className="profileName">Linh Le</h2>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
