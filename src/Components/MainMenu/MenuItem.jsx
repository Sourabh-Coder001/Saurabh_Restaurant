import React from 'react'
import './MenuItem.css'
const MenuItem = ({title,price,tags}) => {
  return (
    <div className='app__menuitem'>
        <div className='app__menuitem-head'>
            <div className='app__menuitem-name'>
                <p className='p__cormorant' style={{color:'#DCCA87'}}>
                    {title}
                </p>
            </div>
        </div>

        <div className='app_menuitem-dash'>
            
            </div>       
            <div className='app__menuitem-price'>
                <p className='p__cormorant' >
                    {price}
                </p>
            </div>

            
        
    </div>
  )
}

export default MenuItem