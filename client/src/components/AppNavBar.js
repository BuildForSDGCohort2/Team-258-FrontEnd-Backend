import React, { Component } from 'react';
import{
    Collapse, 
    Navbar, 
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">ExpenseTracker</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    <TransitionGroup className="expensetracker">
                        <CSSTransition>
                        <NavItem>
                            <NavLink href="">About Us </NavLink>
                        </NavItem>
                        </CSSTransition>
                        </TransitionGroup>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
     );
     
 }
}

export default AppNavBar; 