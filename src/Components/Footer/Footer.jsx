import React from 'react'
import './Footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import bgpic from '../../assets1/bgpic.jpg'
const Footer = () => {

    const footerQuickLinks=[
        {
            display:'Terms & Conditions',
            url:'#'
        },
        {
            display:'Privacy Policy',
            url:'#'
        },
        {
            display:'Return and Refund',
            url:'#'
        },
        {
            display:'Payment Method',
            url:'#'
        }
    ]
        const footerLinks=[
            {
                display:'About Us',
                url:'#'
            },
            {
                display:'Menu',
                url:'#'
            },
            {
                display:'Recipies',
                url:'#'
            },
            {
                display:'Contact',
                url:'#'
            }
    ]
  return <footer className="footer">
    <div className="footer_top">
        <Container>
            <Row>
                <Col lg='4' md='4' sm='6'>
                <div className='logo'>
                    <img src={bgpic} alt="" width={'300px'} />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Ut quo nisi repellat illum error tenetur.</p>
                    </div>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <h5 className="footer_link-title">
                        Quick Links
                    </h5>
                    <ListGroup>
                        {
                            footerQuickLinks.map((item,index)=>
                            <ListGroupItem key={index} className='link_item'>
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>)
                        }
                        
                    </ListGroup>
                </Col>


                <Col lg='3' md='4' sm='6'>
                    <h5 className="footer_link-title">
                        Info Link
                    </h5>
                    <ListGroup>
                        {
                            footerLinks.map((item,index)=>
                            <ListGroupItem key={index} className='link_item'>
                            <a href={item.url}>{item.display}</a>
                        </ListGroupItem>)
                        }
                        
                    </ListGroup>
                </Col>
                <Col lg='3' md='4' sm='6'>
                <h5 className="footer_link-title">
                        Contact
                    </h5>
                    <ListGroup>
                        <ListGroupItem className='link_item d-flex align-items-center gap-3 '><i class="ri-map-pin-line"></i> Solapur, Maharashtra {" "}</ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                        <ListGroupItem className='link_item d-flex align-items-center gap-3 '><i class="ri-mail-line"></i> Example@gmail.com{" "}</ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                        <ListGroupItem className='link_item d-flex align-items-center gap-3 '><i class="ri-phone-line"></i>+91 9370171615{" "}</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        <div className="footer_bottom">
            <Container>
                <Row>
                    <Col lg='12'>
                        <p>Copyright 2023, Developed by Sourabh, All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  </footer>
}

export default Footer