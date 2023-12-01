import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import womenLogo from "../assets/women-in-tech.svg";

export default function Demo() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        return navigate("/aboutme");
    };
  return (
    <div className="myselfContainer">
      <div className="hiContainer">
        <h1>HELLO WORLD</h1>
        <Button variant="contained" onClick={handleOnClick}>
          About me
        </Button>
      </div>
      <img src={womenLogo} className="myselfLogo" />
    </div>
  );
}
