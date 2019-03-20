import React from "react";
import { Link, } from "react-router-dom";
import { Card, Header, Button } from "semantic-ui-react";
import axios from "axios"

class Departments extends React.Component {
  state = { departments: [] }

  componentDidMount() {
    axios.get(`/api/departments`)
    .then( res => {
      this.setState({ departments: res.data, });
    })
  }

  renderDepartments = () => {
    const { departments } = this.state

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
          <Card.Meta>And More</Card.Meta>
          <Card.Description>
            { department.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue'>
            View
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