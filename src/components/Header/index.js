import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../../styles/Header.css';


// The Header creates links that can be used to navigate
// between routes.
class Header extends Component
{
    render()
    {
        return(
            <header>
                <nav>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to='/'>Wedding</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
                                <NavItem eventKey={2}><Link to='/upload'>Upload Photos</Link></NavItem>
                                <NavItem eventKey={3}><Link to='/rsvp'>RSVP</Link></NavItem>
                                <NavItem eventKey={4}><Link to='/ourstory'>Our Story</Link></NavItem>
                                <NavItem eventKey={5}><Link to='/yourstories'>Your Stories</Link></NavItem>
                                <NavItem eventKey={6}><Link to='/schedule'>Schedule</Link></NavItem>
                                <NavItem eventKey={7}><Link to='/gallery'>Gallery</Link></NavItem>
                                <NavItem eventKey={8}><Link to='/faqs'>FAQs</Link></NavItem>
                                <NavItem eventKey={9}><Link to='/songrequest'>Song Requests</Link></NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>
            </header>
        )
    }
}

export default Header