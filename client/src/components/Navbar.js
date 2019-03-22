import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, Segment } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        <Segment>
          Home
        </Segment>
      </Menu.Item>
    </Link>
    <Link to="/departments">
      <Menu.Item>
        <Segment>
          Departments
        </Segment>
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;