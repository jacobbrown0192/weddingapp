import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Header.css';


//Drop Down doesn't work properly
//need to add className="selected"

class Header extends Component
{
    render()
    {
        return(
            <div>
                <nav className="menu">
                    <ul id="main_menu">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/rsvp'>RSVP</Link></li>
                        <li><Link to='/faqs'>FAQ</Link></li>
                        <li><Link to='/bridesmaidsgroomsmen'>BRIDAL PARTY</Link></li>
                        <li><Link to='/songrequest'>SONG REQUESTS</Link></li>
                        <li><Link to='/yourstories'>TELL US A STORY</Link></li>
                    </ul>
                </nav>
                <nav className="mobile_menu">
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/rsvp'>RSVP</Link></li>
                        <li><Link to='/faqs'>FAQ</Link></li>
                        <li><Link to='/bridesmaidsgroomsmen'>BRIDAL PARTY</Link></li>
                        <li><Link to='/songrequest'>SONG REQUESTS</Link></li>
                        <li><Link to='/yourstories'>TELL US A STORY</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header

// <Grid>
// <Row className="header-img">
//     <img src={placeholder} alt="placeholder"/>
//     </Row>
//     <Nav>
//     <Navbar collapseOnSelect>
// <Navbar.Header>
// <Navbar.Toggle/>
// </Navbar.Header>
// <Navbar.Collapse>
// <Nav>
// <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
//     <NavItem eventKey={2}><Link to='/upload'>Upload Photos</Link></NavItem>
// <NavItem eventKey={3}><Link to='/rsvp'>RSVP</Link></NavItem>
//     <NavItem eventKey={4}><Link to='/ourstory'>Our Story</Link></NavItem>
// <NavItem eventKey={5}><Link to='/yourstories'>Your Stories</Link></NavItem>
// <NavItem eventKey={6}><Link to='/schedule'>Schedule</Link></NavItem>
//     <NavItem eventKey={7}><Link to='/gallery'>Gallery</Link></NavItem>
//     <NavItem eventKey={8}><Link to='/faqs'>FAQs</Link></NavItem>
//     <NavItem eventKey={9}><Link to='/songrequest'>Song Requests</Link></NavItem>
// </Nav>
// </Navbar.Collapse>
// </Navbar>
// </Nav>
// </Grid>


