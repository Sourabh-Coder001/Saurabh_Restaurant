import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import HeroSlider from "../Components/hero-slider/hero-slider";
import PopularMenu from "../Components/popular-menu/PopularMenu";
import ChooseUs from "../Components/choose-us/ChooseUs";
import Menupack from "../Components/Menu-pack/Menupack";
import Testimonials from "../Components/testimonials/Testimonials";
import Download from "../Components/Download-section/Download";
import Footer from "../Components/Footer/Footer";

const Home=()=>{
    return(
        <Fragment>
        <Header/>
        <HeroSlider/>
        <PopularMenu/>
        <ChooseUs/>
        <Menupack/>
        <Testimonials/>
        <Download/>
        <Footer/>
        </Fragment>
    )
}
export default Home