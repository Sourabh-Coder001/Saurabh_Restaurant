import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import ProductCart from '../product-carts/ProductCart'
import './menupack.css'
import { MaharashtrianFood,riceMenuProducts,pizzaProducts,dessertProducts,coffeeProducts } from '../../assets/fake-data/products'
const Menupack = () => {

const [filter,setfilter]=useState('RICE-MENU')
const [products,setProducts]=useState(riceMenuProducts)  

useEffect(()=>{
    if(filter==='RICE-MENU'){
        setProducts(riceMenuProducts)
    }
    if(filter==='MaharashtrianFood'){
        setProducts(MaharashtrianFood)
    }
    if(filter==='PIZZA'){
        setProducts(pizzaProducts)
    }
    if(filter==='DESSERT'){
        setProducts(dessertProducts)
    }
    if(filter==='COFFEE'){
        setProducts(coffeeProducts)
    }

},[filter])
  return<section>
    <Container>
        <Row>
            <Col lg='12' className='text-center mb-4'>
               <h3 className='menu-title'>Our Menu Pack</h3>
            </Col>
            <Col lg='12' className='text-center mb-5'>
            <button 
  className={`filter-btn ${filter === 'MaharashtrianFood' ? 'active_btn' : ''}`}  
  onClick={() => setfilter('MaharashtrianFood')}
>
  Maharashtrian Thali
</button>
                <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active_btn' : ''}`}  onClick={()=>setfilter('RICE-MENU')}>Rice Items</button>
                <button className={`filter-btn ${filter === 'PIZZA' ? 'active_btn' : ''}`}  
onClick={()=>setfilter('PIZZA')}> Indian Fast Food</button>
                <button className={`filter-btn ${filter === 'DESSERT' ? 'active_btn' : ''}`}  
onClick={()=>setfilter('DESSERT')}>Maharashtrian Desserts</button>
                <button className={`filter-btn ${filter === 'COEEFF' ? 'active_btn' : ''}`}  
 onClick={()=>setfilter('COFFEE')}>Indian Thali</button>
                </Col>
                {
                    products.map(item=>(
                        <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'><ProductCart item={item}/></Col>
                    ))
                }
        </Row>
    </Container>
  </section>
}

export default Menupack