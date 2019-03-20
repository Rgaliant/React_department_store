import React from "react";
import { Link, } from "react-router-dom";
import { Card, Header, Button, Icon } from "semantic-ui-react";
import axios from "axios"
import DepartmentsForm from './DepartmentsForm'

class Departments extends React.Component {
  state = { departments: [],
            editing: false,
  }

  componentDidMount() {
    axios.get(`/api/departments`)
    .then( res => {
      this.setState({ departments: res.data, });
    })
  }

  updateDepartment= (id) => {
    axios.put(`/api/departments/${id}`)
    .then( res => {
      const departments = this.state.departments.map( t => {
      if (t.id === id)
        return res.data;
      return t;
    });
    this.setState({ departments, });
  })
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        const { departments, } = this.state
        this.setState({ departments: departments.filter( t => t.id !== id), })
      })
  }

  
  toggleEdit = () => this.setState({ editing: !this.state.editing, });


  renderDepartments = () => {
    const { departments } = this.state

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card>
        <Card.Content>
        {
          this.state.editing ? 
          <DepartmentsForm { ...this.props } />
          :
          <div>
          <Card.Header>{ department.name }</Card.Header>
          <Card.Meta>And More</Card.Meta>
          <Card.Description>
            { department.description }
          </Card.Description>
          </div>
        }
        </Card.Content>
        <Card.Content extra>
          <Button 
            as={Link} 
            to={`/departments/${department.id}`} 
            color='blue'
          >
            View
          </Button>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
        </Button>
          <Button 
            icon 
            color="red" 
            size="tiny" 
            onClick={() => this.deleteDepartment(department.id)} 
            style={{ marginLeft: "15px", }}
          >
      <Icon name="trash" />
    </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1" style={{ textAlign: "center" }}>Departments</Header>
        <br />
        <Button as={Link} color="blue" to="/departments/new">
          Add Department
        </Button>
        <br />
        <br />
        <Card.Group itemsPerRow={5}>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}

export default Departments