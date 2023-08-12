import React from 'react'
import './Menu1.css'
import {images,data} from '../../constants'
import MenuItem from './MenuItem'
const Menu1 = () => {
  return <section>
    <div className='app_specialMenu flex_center section_padding' id='menu'>
        <div className='app_specialMenu-title'>
            <h1 className='headtext_cormorant'>Today's Special</h1>
            
        </div>

        <div className='app__specialMenu-menu'>

            <div className='app__specialMenu-menu_wine flex_center'>
                <p className='app__specialMenu-menu_heading'>Vegeterian Food</p>
                <div className='app_specialMenu_menu_item'>
                    {data.wines.map((wine,index)=>(
                       <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags}/>
                    ))}
                </div>
            </div>
            
        <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt=''/>
        </div>

                <div className='app__specialMenu-menu_cocktails flex_center'>
                <p className='app__specialMenu-menu_heading'>Desserts</p>
                <div className='app_specialMenu_menu_item-cocktail'>
                    {data.cocktails.map((cocktail,index)=>(
                        <MenuItem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                    ))}
                </div>
            </div>

        </div>
            
    </div>
  </section>
}

export default Menu1