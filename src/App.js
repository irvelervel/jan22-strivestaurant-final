import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationComponent from "./components/ReservationComponent";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import DishDetails from "./components/DishDetails";
import HocComponent from "./components/HocComponent";

function App() {
  return (
    // BrowserRouter is a "wrapper" for the other routing components
    // it doesn't load anything visually, it just allows the inner routing elements to work
    <BrowserRouter>
      {/* because the CustomNavbar is OUTSIDE of a Route, it will load on EVERY path! */}
      {/* NAVBAR COMPONENT */}
      <CustomNavbar payoff="Perfect Pasta Makers" margin={0} />
      <Routes>
        {/* the Routes components JUST allows Route components into it */}
        {/* HOMEPAGE COMPONENT */}
        {/* <div>HELLO</div> <-- you cannot load a div into Routes! */}
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<ReservationComponent />} />
        <Route path="/menu" element={<Menu />} />
        {/* -!!!- the one below is a DYNAMIC ROUTE*/}
        {/* it contains an argument, I called it 'pastaId' */}
        {/* whatever value of pastaId will be a valid match for <DishDetails /> */}
        {/* /details/0 for example is a valid match for <DishDetails /> */}
        <Route path="/details/:pastaId" element={<DishDetails />} />
        {/* HOC component testing */}
        <Route path="/hoc" element={<HocComponent testProp="test!" />} />
        <Route path="*" element={<NotFound />} />
        {/* a path of "*" will load on any unhandled route */}
      </Routes>
      {/* evene a footer component would be outside of Routes */}
    </BrowserRouter>
  );
}

export default App;

// now our goal is to ditch any class component, and just use functional ones
// without losing any functionality!
