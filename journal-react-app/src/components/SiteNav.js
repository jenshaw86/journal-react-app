import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'

class SiteNav extends Component {

    render() {
        return(
            <div>
                <Navbar>
                    <Nav>
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar>                
            </div>
        )
    }
}

export default SiteNav