import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Routes from './Routes';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

//This is where we create the Navbar which contains links to all other pages
function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
        {/* The "/" is used to indicate the default route, found in the Routes.js file */}
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold text-muted">Mission 13</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/Podcasts">
              <Nav.Link href="/Podcasts">Podcasts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Movies">
              <Nav.Link href="/Movies">Movie List</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
