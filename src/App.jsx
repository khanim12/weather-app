import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CurrentWeather from "./components/CurrentWeather";
import GlobalWeather from "./components/GlobalWeather";
import Button from "@mui/material/Button";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">
          <Button
            className="w-full   "
            variant="contained"
            color="error"
            style={{marginTop:'30px'}}
          >
            Home
          </Button>
        </Link>
        <div className=" flex m-auto w-1/2">
        <Link to="/current">
          <Button
            style={{marginTop:'40px',marginRight:'5px'}}
            className="w-96  "
            variant="contained"
          >
            Current
          </Button>
        </Link>
        <Link to="/global">
          <Button    style={{marginTop:'40px'}}
            className="w-96  "variant="contained">Global</Button>
        </Link>
        </div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current" element={<CurrentWeather />} />
          <Route path="/global" element={<GlobalWeather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
