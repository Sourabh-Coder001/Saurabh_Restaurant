import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import './Testimonials.css'
import testimonialImg from '../../assets/images/review1.png'
import Slider from 'react-slick'
const Testimonials = () => {
const settings={
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
}

  return <section>
    <Container>
        <Row >
            <Col lg='8' md='12' sm='12' className='m-auto'>
                <div className="slider_wrapper d-flex align-items-center gap-5">
                    <div className="slider_content w-50">
                    <h2 className='mb-4'>What our customers are saying</h2>
                <Slider {...settings}>
                    <dir>
                        <div className="single_testimonial">
                            <p className="review_content">
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Accusamus numquam modi sunt earum eum, quis, 
                                doloremque, debitis natus qui error voluptatum
                                 tenetur similique et asperiores. 
                                Ullam nemo similique eveniet sit."
                            </p>

                            <h6>Sourabh</h6>
                            <p>
                                Web Developer
                            </p>
                        </div>
                    </dir>

                    <dir>
                        <div className="single_testimonial">
                            <p className="review_content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Accusamus numquam modi sunt earum eum, quis, 
                                doloremque, debitis natus qui error voluptatum
                                 tenetur similique et asperiores. 
                                Ullam nemo similique eveniet sit.
                            </p>

                            <h6>Sourabh</h6>
                            <p>
                                Web Developer
                            </p>
                        </div>
                    </dir>
                    </Slider>
                    </div>
                    <div className="slider_img w-50">
                    <img src={testimonialImg} alt='' className='w-100'/>

                    </div>

                </div>
                
               
            </Col>
            <Col lg='4'>
                
            </Col>

        </Row>
    </Container>
  </section>
}

export default Testimonials