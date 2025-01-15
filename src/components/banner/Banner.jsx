import { useState, useEffect } from "react"
import Content from "../content/Content"
import "./Banner.css"
import Category from "./category/Category"
import { buscar } from "../../api/api"

const Banner = (props) => {

const {categories,videos}=props
    

    return <div className="banner-container">
        <div className="nav-bar">
            <Category />
            <h1>titulo del video</h1>
            <p>descripcion del video puede ser</p>
            <img></img>
            {/* categoria, titulo, descripcion,foto */}
        </div>
        {
            categories.map((categoria) => 
                <Content 
                    datos={categoria}
                    key={categoria.nombre}
                    videos={videos.filter(video=> video.categoria === categoria.nombre)}
                    
                />
            )
        }
    </div>
}
export default Banner