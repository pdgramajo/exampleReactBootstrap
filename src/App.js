import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  Grid, Row, Col, Alert, FormGroup, ControlLabel, FormControl, HelpBlock,
  Navbar, Nav, NavItem, NavDropdown, MenuItem, Button
} from 'react-bootstrap';

import Artyom from 'artyom.js';
//import {  } from "art";
const Jarvis = new Artyom();

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {

    Jarvis.initialize({
      lang: "es-ES",
      debug: false,
      continuous: false,
      soundex: false,
      listen: false
    }).then(() => {
      // Display loaded commands in the console
      // console.log(Jarvis.getAvailableCommands());
      //Jarvis.say("marika");
    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });
  }


  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  isValidated = () => {
    const length = this.state.value.length;
    if (length > 10) return true;
    return false;
  }


  handleClick = () => {
    if (this.isValidated()) Jarvis.say(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Alert bsStyle="warning">
                <strong>Holy guacamole!</strong> Best check yo self, you're not
            </Alert>
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12}>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Working example with validation</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Escribe tu texto en español aqui"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
                <Button
                  bsStyle="primary"
                  onClick={this.handleClick}
                >
                  LEER
                </Button>
              </form>

            </Col>

          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
              <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
            </Col>
            <Col md={6} mdPull={6}>
              <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
