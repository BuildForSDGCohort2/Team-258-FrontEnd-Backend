import React, { Component } from 'react';
import{
    Collapse, 
    Navbar, 
    NarbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";

class AppNavBar extends Component {
    state = {
        isOpen: false
    }
 toggle = () => {
     this.setState({
         isOpen: !this.state.isOpen
     });
 }  
 
 render() {
     return (
        <div>
        <Narbar color="primary" primary expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="ExpenseTracker"></NavbarBrand>
                <NarbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} narbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">About Us</NavLink>
                            <NavLink href="#">Login</NavLink>
                            <NavLink href="#">Sign Up</NavLink>
                            <NavLink href="#">New Features Update</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Narbar>
    </div>
     );
     
 }
}

export default AppNavBar; 