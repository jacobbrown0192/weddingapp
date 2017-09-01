import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../../styles/Header.css';
import placeholder from '../../images/placeholder.jpg'


// The Header creates links that can be used to navigate
// between routes.
class Header extends Component
{
    render()
    {
        return(
            <header>
                <div className="header-img">
                    <img src={placeholder} alt="placeholder"/>
                </div>
                <nav>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
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