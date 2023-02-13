import React from 'react'
import products from '../products'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
const HomeScrenn = () => {
  return (
    <>
      <h1>latest</h1>
      <Row>
        {products.map((product)=>(
            <Col sm={12} md={6} lg={4} >
            <Product product={product}/>
            </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScrenn
