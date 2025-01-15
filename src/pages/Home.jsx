import { useState, useEffect } from "react"

import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { buscar } from "../api/api"


const Home = () => {
    const  urlVideos ="/videos"
    const urlCategories  ="/categories"

    const [categories, setCategorie] = useState([])
    const [videos, setvideos] = useState([])

    useEffect(() => {
        buscar(urlCategories, setCategorie)
    }, [urlCategories])

    useEffect(() => {
        buscar(urlVideos, setvideos)
    }, [urlVideos])

    return (<>
        <Header />
        
        <Banner categories={categories} videos = {videos}/>
        <Footer />
    </>
    );
}
export default Home

