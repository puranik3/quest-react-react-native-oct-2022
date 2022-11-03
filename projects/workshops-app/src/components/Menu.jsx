import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../reducers/theme';

import './Menu.css';

// sfc
const Menu = () => {
    const theme = useSelector( selectTheme );

    return (
        <Navbar bg={theme} variant={theme} expand="lg">
            <Container>
                <Navbar.Brand to="/" as={NavLink} end>Workshops App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink} end>Home</Nav.Link>
                        <Nav.Link to="/workshops" as={NavLink}>List of workshops</Nav.Link>
                        <Nav.Link to="/feedback" as={NavLink}>Feedback</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="warning">Change theme</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
