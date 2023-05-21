
import {Navbar,Nav,Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";


function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>Task Manager</Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </NavLink>
                        <NavLink to="/add-task">
                            <Nav.Link>Create Task</Nav.Link>
                        </NavLink>
                            <NavLink to="/add-task">Add Task</NavLink>
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;