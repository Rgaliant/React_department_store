import React from 'react';
import axios from "axios";
import { Form, Header, } from "semantic-ui-react";

class DepartmentsForm extends React.Component {
  state = { name: "", description: "" };
 

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name, description: this.props.description,  });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, updateDepartment } = this.props;
    const department = this.state
    if (id) 
      axios.put(`/api/departments/${id}`, department)
        .then( res => {
          updateDepartment( res.data, )
      })
    else 
     axios.post("/api/departments", department)
      .then( res => {
        this.props.history.push("/departments");
      })
    this.setState({ name: "", description: "" }); 
  }
  

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, description } = this.state;

    return (
      <div>
        {
          this.props.id ?
          <div></div>
          :
          <Header as='h1'>New Department</Header>
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentsForm;