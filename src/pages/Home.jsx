import { useState, useEffect } from "react"

import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


const Home = (props) => {
    const {categories,videos,paths,editarVideoInfo,eliminarVideo}= props
    

    

   


    

    return (<>
        <Header />
        <Banner 
        categories={categories} 
        videos = {videos} 
        routes={paths} 
        editarVideoInfo={editarVideoInfo}
        eliminarVideo={eliminarVideo} />
        <Footer />
    </>
    );
}
export default Home

