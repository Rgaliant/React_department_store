import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home'
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Departments from './components/Departments'
import { Container, } from "semantic-ui-react";
import DepartmentsForm from './components/DepartmentsForm';
import DepartmentView from './components/DepartmentView'

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/departments/new' component={DepartmentsForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
