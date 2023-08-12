import React,{useRef} from 'react'
import './Header.css'
import {Container} from 'reactstrap'
import bgpic from '../../assets1/bgpic.jpg'
const navLinks=[
    {
        display:'Home',
        url:'/home'
    },
    {
        display:'About',
        url:'/about'
    },
    {
        display:'Menu',
        url:'/Menu'
    },
    {
        display:'Contact',
        url:'/contact'
    },
    {
        display:'SignUp',
        url:'/register'
    },
    {
        display:'Login',
        url:'/Login'
    },
]
const Header = () => {

    const menuRef=useRef()
    const menuToggle=()=>menuRef.current.classList.toggle('active_menu')

  return (
    <header className='header'>
        <Container>
            <div className='navigation'>
                <div className='logo'>
                    <img src={bgpic} alt="" width={'80px'}/>
                    </div>
                    <div className="nav_menu"  ref={menuRef}>
                        <div className="nav_list_wrapper d-flex align-items-center gap-5">
                        <ul className="nav_list">
                             {
                                navLinks.map((item,index)=>(
                                    <li className="nav_item" key={index}>
                                        <a href={item.url}onClick={menuToggle}>{item.display}</a>
                                        </li>
                            
                                )
                                )
                            }
                        </ul>

                        <div className="menu_right">
                    <div className="customer_search">
                        <input type='text' placeholder='search item....'/>
                        <span><i class="ri-search-line"></i></span>
                    </div>
                </div>

                        </div>
                        
                    </div>
                        <div>
                            <span className='cart_icon'>
                                <i class="ri-shopping-basket-line"></i>
                                <span className='badge'>2</span>
                            </span>
                        </div>
                
                <div className="mobile_menu">
                    <span>
                    <i class="ri-menu-line" onClick={menuToggle}></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>

  )
}

export default Header;