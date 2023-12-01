import {  useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import "./homepage.css";
import womenLogo from "../assets/women-in-tech.svg";
import Header from "../components/Header";

const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        return (
            navigate("/aboutme")
        )
    }
    return (
      <>
        <Header />
        <div className="helloContainer">
          <div className="hiContainer">
            <h1>HELLO WORLD</h1>
            <Button variant="contained" onClick={handleOnClick}>About me</Button>
          </div>
          <img src={womenLogo} className="myselfLogo" />
        </div>
      </>
    );
}

export default HomePage;