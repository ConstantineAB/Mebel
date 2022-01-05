import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


export const NaviBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Мебельбест</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/office">Офисная мебель</Nav.Link>
                        <Nav.Link href="/soft">Мягкая мебель</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/bath">Туалет, ванная</NavDropdown.Item>
                        <NavDropdown.Item href="/design">Дизайнерская мебель</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">Главная страница</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}