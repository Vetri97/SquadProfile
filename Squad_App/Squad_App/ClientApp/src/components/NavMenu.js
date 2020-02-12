import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
      return (
          <header style={{ backgroundColor:"#3D405B" }}>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
                <Container>
                    
                    <div className="border-div">&nbsp;</div>
                    <h1 className="border-h1"><span className="txtsquad">SQUAD</span><span className="txtprof">PROFILE</span></h1>
                    <div className="passdiv"></div>
            
          </Container>
        </Navbar>
      </header>
    );
  }
}
