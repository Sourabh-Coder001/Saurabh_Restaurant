import React, { Fragment } from 'react'
import Menu1 from '../Components/MainMenu/Menu1'
import Header from '../Components/Header/Header'
import PopularMenu from '../Components/popular-menu/PopularMenu'
import Menupack from '../Components/Menu-pack/Menupack'
import Download from "../Components/Download-section/Download";
import Footer from '../Components/Footer/Footer'
const MainMenu = () => {
  return <Fragment>
        <Header/>
        <Menu1/>
        <PopularMenu/>
        <Menupack/>
        <Download/>
        <Footer/>
  </Fragment>
}

export default MainMenu