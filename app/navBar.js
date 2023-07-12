"use client";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Next.js 게시판</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ margin: "auto" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">공사중</Nav.Link>
            <Nav.Link href="#">Review</Nav.Link>
            <Nav.Link href="#">Event</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
