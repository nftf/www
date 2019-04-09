import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import NFish from "./nfish.js"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
    Button,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
      return <div>
          <Navbar className={styles.navbarCustom}>
          <NavbarBrand className={styles.link}>NF</NavbarBrand>
          <Nav navbar>
          <NavItem>
          <Link className={styles.link} to="/learn/">Learn</Link>
          </NavItem>
            </Nav>
        </Navbar>
      </div>;
  }
}
