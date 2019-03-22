import React from 'react'
import axios from 'axios'
import Products from "./Products"
import { Button, Header, Segment, Card, Image } from 'semantic-ui-react'

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
        <Header as="h1">{ name }</Header>
        <Segment>
          <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          }} >
        <Image 
              style={{
                height: '350px',
                width: '500px',
              }}
              src={'https://loremflickr.com/400/400/commerce?' + Math.random()}
              alt="Department"
            />
            </div>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Products departmentId={this.props.match.params.id} deleteProduct={this.props.match.params.id} />
        <br />
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

