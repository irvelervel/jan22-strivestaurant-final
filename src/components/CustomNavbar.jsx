import { Navbar, Nav, Button, Breadcrumb } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

// I'd like to add a class of "active" to the current nav-link I'm navigating to
// how can I know which URL is currently sitting in the address bar?
// if you are inside a BrowserRouter component, you can use a React Hook called useLocation()

const CustomNavbar = (props) => {
  // here you can use React Hooks
  const location = useLocation();
  console.log("location", location);
  // location is an object filled with useful properties about your current location
  // location.pathname is a very common property, it will give you the current URL

  const navigate = useNavigate();
  // navigate is a function!

  return (
    <Navbar
      className={"mt-" + props.margin}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Link to="/">
        <Navbar.Brand>Strivestaurant - {props.payoff}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {/* <Breadcrumb>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/reservations">Reservations</Link>
            </li>
          </Breadcrumb> */}
          <Link to="/menu">
            <div
              className={
                location.pathname === "/menu" ? "nav-link active" : "nav-link"
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/reservations">
            {/* Nav.Link from react-bootstrap is ALREADY an anchor tag <a /> */}
            {/* wrapping it with a Link, which ALSO renders an anchor tag, won't work */}
            {/* instead of Nav.Link, use a div with a classname of "nav-link" */}
            <div
              // className should be "nav-link active" or "nav-link"
              // className={`nav-link${
              //   location.pathname === "/reservations" ? " active" : ""
              // }`}
              className={
                location.pathname === "/reservations"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Reservations
            </div>
          </Link>
          <Link to="/contact">
            <div
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </div>
          </Link>
        </Nav>
        <Button variant="success" onClick={() => navigate("/")}>
          BRING ME HOME!
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
