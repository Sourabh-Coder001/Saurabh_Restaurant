import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {popularMenuFood} from '../../assets/fake-data/products'
import ProductCart from '../product-carts/ProductCart'
import './popularmenu.css'
const PopularMenu = () => {
  return (
    <section className='pt-8'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2 className='popular-menu-title'>Popular Food Menu </h2>
                </Col>
                {
                    popularMenuFood.map(item=>(
                        <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                            <ProductCart item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default PopularMenu