import React from "react";
import axios from 'axios'
import { Card, Header, Button, Icon, Image } from "semantic-ui-react";

class Products extends React.Component {
  state = { products: [] }

    componentDidMount() {
        const { departmentId } = this.props
        axios.get(`/api/departments/${departmentId}/products`)
            .then( res => {
                this.setState({ products: res.data })
            })
    }

    deleteProduct = (id) => {
      const { departmentId } = this.props
      axios.delete(`/api/departments/${departmentId}/products/${id}`)
      .then( res => {
        const { products, } = this.state
        this.setState({ products: products.filter( t => t.id !== id), })
      })
    }

    editProduct = (id) => {
      
    }

  renderProducts = () => {
    const { products, } = this.state;

    if (products.length <= 0)
      return <h2>No Products</h2>
    return products.map( product => (
      <Card>
        <Card.Content>
          <Card.Header>{ product.name }</Card.Header>
          <Image 
              style={{
                height: '120px',
                width: '160px',
              }}
              src={'https://loremflickr.com/400/400/products?' + Math.random()}
              alt="Department"
            />
          <Card.Meta>${ product.price }</Card.Meta>
          <Card.Description>
            { product.description }
          </Card.Description>
          <br />
          <Button 
            icon 
            color="red" 
            size="tiny" 
            onClick={() => this.deleteProduct(product.id)} 
            style={{ marginLeft: "15px", }}
          >
      <Icon name="trash" />
    </Button>
    <Button 
            icon 
            color="blue" 
            size="tiny" 
            onClick={() => this.editProduct(product.id)} 
            style={{ marginLeft: "15px", }}
          >
      <Icon name="pencil" />
    </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Products</Header>
        <br />
        <Card.Group itemsPerRow={5}>
          { this.renderProducts() }
        </Card.Group>
      </div>
    )
  }
}

export default Products;