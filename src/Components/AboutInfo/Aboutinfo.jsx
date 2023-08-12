import React from 'react'
import team1 from '../../assets/images/SS011.jpg'
import team2 from '../../assets/images/Nitesh01.jpg'
import team3 from '../../assets/images/00111111.jpg'
import './Aboutingo.css'
const Aboutinfo = () => {
    let message='At ‘Organization Name’ , we’re tied in with presenting crisp food, regardless of whether it implies going the additional mile. \n When you stroll through our entryways, \n we do what we can to make everybody feel comfortable in light of the fact that our family stretches out through your locale.'
  return <section className='section-white'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="section-title">
                        About Us
                    </h2>
                    <p className='section-subtitle'>{message}</p>
                </div>
                <div className='col-sm-6 col-md-4'>
                    <div className="team-item">
                        <img src={team1} className='team-img' alt="" width={'150px'} />
                        <h3>Sourabh Lakade</h3>
                        <div className="team-info">
                        <p>Owner of Resturant</p>
                        <p>From the very first moment, the friends could look at their clients without flinching and 
                            guarantee them the best food around the local area — in light of the fact that they knew the 
                            ranchers who developed the fixings, and they realized those agriculturists thought about quality.</p>
                        <ul className='team-icon'>
                            <li>
                                <a href='/#' className='twitter'>
                                <i class="ri-twitter-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='facebook'>
                                <i class="ri-facebook-circle-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='instagram'>
                                <i class="ri-instagram-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='whatsapp'>
                                <i class="ri-whatsapp-line"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>


                <div className='col-sm-6 col-md-4'>
                    <div className="team-item">
                        <img src={team2} className='team-img' alt="" width={'150px'} />
                        <h3>Kunal Hume</h3>
                        <div className="team-info">
                        <p>Master Chef</p>
                        <p>From the very first moment, the friends could look at their clients without flinching and 
                            guarantee them the best food around the local area — in light of the fact that they knew the 
                            ranchers who developed the fixings, and they realized those agriculturists thought about quality.</p>
                        <ul className='team-icon'>
                            <li>
                                <a href='/#' className='twitter'>
                                <i class="ri-twitter-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='facebook'>
                                <i class="ri-facebook-circle-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='instagram'>
                                <i class="ri-instagram-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='whatsapp'>
                                <i class="ri-whatsapp-line"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>


                <div className='col-sm-6 col-md-4'>
                    <div className="team-item">
                        <img src={team3} className='team-img' alt="" width={'150px'} />
                        <h3>Aditya Jadhav</h3>
                        <div className="team-info">
                        <p>Manager</p>
                        <p>From the very first moment, the friends could look at their clients without flinching and 
                            guarantee them the best food around the local area — in light of the fact that they knew the 
                            ranchers who developed the fixings, and they realized those agriculturists thought about quality.</p>
                        <ul className='team-icon'>
                            <li>
                                <a href='/#' className='twitter'>
                                <i class="ri-twitter-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='facebook'>
                                <i class="ri-facebook-circle-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='instagram'>
                                <i class="ri-instagram-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/#' className='whatsapp'>
                                <i class="ri-whatsapp-line"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
}

export default Aboutinfo