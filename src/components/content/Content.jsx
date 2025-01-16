import Category from "../banner/category/Category";
import Card from "./card/Card"
import "./Content.css"

const Content = (props) => {
  const { datos, videos, paths,editarVideoInfo, eliminarVideo } = props
  return (
    <div className="content">
      <Category nombre ={datos.nombre} color = {datos.color1} />
      <div className="cards">
      {
            videos.map((video,index) => 
            
                <Card 
                key={video.id} 
                video={video}      
                imagen = {video.imagen}
                color1={datos.color1}                     
                color2={datos.color2}                  
                color3={datos.color3}  
                id={video.id}       
                paths={paths} 
                editarVideoInfo={editarVideoInfo}
                eliminarVideo={eliminarVideo}         
                />
            )
        }
      </div>

    </div> // Aquí debe estar el cierre correcto de la etiqueta div
  );
};

export default Content