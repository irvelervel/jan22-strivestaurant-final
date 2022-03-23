import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationComponent from "./components/ReservationComponent";

function App() {
  return (
    // BrowserRouter is a "wrapper" for the other routing components
    // it doesn't load anything visually, it just allows the inner routing elements to work
    <BrowserRouter>
      {/* because the CustomNavbar is OUTSIDE of a Route, it will load on EVERY path! */}
      <CustomNavbar payoff="Perfect Pasta Makers" margin={0} />
      {/* NAVBAR COMPONENT */}
      <Routes>
        {/* the Routes components JUST allows Route components into it */}
        {/* HOMEPAGE COMPONENT */}
        {/* <div>HELLO</div> <-- you cannot load a div into Routes! */}
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<ReservationComponent />} />
      </Routes>
      {/* evene a footer component would be outside of Routes */}
    </BrowserRouter>
  );
}

export default App;

// now our goal is to ditch any class component, and just use functional ones
// without losing any functionality!
