import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormGroup, Col, FormControl, Button, Panel, Position} from 'react-bootstrap';

class App extends Component {
  render() {

    var panelStyles = {maxWidth: 500, margin: '40px auto 10px',};
    var span_test = {display: 'inline-block', margin: '8px 0 0 0'};

    return (
      <div className="App">
         <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Smart Helper</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div class="content">
        <Panel style={panelStyles}>
            <Form horizontal>
              <FormGroup controlId="formMessage">
                <Col lg={12}>
                  <FormControl bsSize="large" componentClass="textarea" placeholder="textarea"  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formSender">
                <Col sm={6}>
                  <FormControl type="text" placeholder="Name" />
                </Col>
                <span style={span_test}></span>
                <Col sm={6}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={9} sm={3}>
                  <Button bsStyle="primary" type="submit" block>
                   Senden
                  </Button>
                </Col>
              </FormGroup>
            </Form>
        </Panel>
        <div className='placeholder'></div>
        <Panel header={'Header'} style={panelStyles} bsStyle="primary">
          Nachricht
        </Panel>
        <Panel header={'Header'} style={panelStyles}>
          Nachricht
        </Panel>
        <Panel header={'Header'} style={panelStyles}>
          Nachricht
        </Panel>
        <Panel header={'Header'} style={panelStyles}>
          Nachricht
        </Panel>
        <Panel header={'Header'} style={panelStyles}>
          Nachricht
        </Panel>
        <Panel header={'Header'} style={panelStyles}>
          Nachricht
        </Panel>
        </div>
      </div>
    );
  }
}

export default App;
