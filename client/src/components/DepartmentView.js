import React from 'react'
import axios from 'axios'
import Products from "./Products"
import { Button, Header, Segment, Card } from 'semantic-ui-react'

export default class DepartmentView extends React.Component {
  state = { department: {}, }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, })
    })
  }


  render() {
      const { name, description } = this.state.department
    return (
      <div>
        <Segment>
        <Header as="h1">{ name }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Products departmentId={this.props.match.params.id} />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}
