import Content from "../content/Content"
import "./Banner.css"
import Category from "./category/Category"
import { buscar } from "../../api/api"
import Nav from "./nav/Nav"

const Banner = (props) => {

const {categories,videos, routes,editarVideoInfo,eliminarVideo}=props
    

    return <div className="banner-container">
        <div className="nav-bar">
            <Nav videos={videos} categorias={categories}/>
            {/* categoria, titulo, descripcion,foto */}
        </div>
        {
            categories.map((categoria) => 
                <Content 
                    datos={categoria}
                    key={categoria.nombre}
                    videos={videos.filter(video=> video.categoria === categoria.nombre)}
                    paths={routes}
                    editarVideoInfo={editarVideoInfo}
                    eliminarVideo={eliminarVideo}

                    
                />
            )
        }
    </div>
}
export default Banner