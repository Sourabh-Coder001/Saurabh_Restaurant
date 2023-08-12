import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import './ChooseUs.css'
import pastaImg from '../../assets/images/pasta.png'
const ChooseUs = () => {
    
  return <section>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="image-container">
                <img src={pastaImg} alt='' className='rotating-image w-100'  />
                </div>

                 
            </Col>
            <Col lg='6' md='6'>
                <div className='choose_content'>
                    <h4>Who we are ?</h4>
                    <h2>Take a look at the benefits we offer you</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aliquid a dignissimos deleniti nobis, nam qui?</p>
                </div>
                <div className="features mt-4">
                    <div className="feature1 d-flex align-items-center gap-5">
                        <div className="single_feature">
                            <span><i class="ri-truck-line"></i></span>
                            <h6>Free Home Delivery</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="single_feature">
                            <span className='feature_icon-two'><i class="ri-exchange-dollar-line"></i></span>
                            <h6>Return and Refund</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="feature1 mt-3 d-flex align-items-center gap-5">
                        <div className="single_feature">
                            <span className='feature-icon-3'><i class="ri-secure-payment-line"></i></span>
                            <h6>Secure Payment</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="single_feature">
                            <span className='feature-icon-4'><i class="ri-24-hours-line"></i></span>
                            <h6>24/7 hours Support</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
} 

export default ChooseUs