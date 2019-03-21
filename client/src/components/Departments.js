import React from "react";
import { Link, } from "react-router-dom";
import { Card, Header, Button, Icon } from "semantic-ui-react";
import axios from "axios"
import DepartmentsForm from './DepartmentsForm'

class Departments extends React.Component {
  state = { departments: [],
            editing: false,
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  componentDidMount() {
    axios.get(`/api/departments`)
    .then( res => {
      this.setState({ departments: res.data, });
    })
  }


  updateDepartment = (department) => {
    const departments = this.state.departments.map(d => {
        if (d.id === department.id)
            return department;
        return d
    })
    this.setState({ departments });
    this.toggleEdit()
}

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        const { departments, } = this.state
        this.setState({ departments: departments.filter( t => t.id !== id), })
      })
  }


  renderDepartments = () => {
    const { departments } = this.state

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card>
        <Card.Content>
        {
          this.state.editing ? 
          <DepartmentsForm name={department.name} id={department.id} description={department.description} updateDepartment={this.updateDepartment} />
          :
          <div>
          <Card.Header as={Link} to={`/departments/${department.id}`} >{department.name}</Card.Header>
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