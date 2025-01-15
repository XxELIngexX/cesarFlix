import Category from "../banner/category/Category";
import Card from "./card/Card"
import "./Content.css"

const Content = (props) => {
  const { datos, videos } = props
  return (
    <div className="content">
      <Category nombre ={datos.nombre} color = {datos.color1} />
      <div className="cards">
      {
            videos.map((video) => 
                <Card 
                imagen = {video.imagen}
                color1={datos.color1}                     
                color2={datos.color2}                  
                color3={datos.color3}                   
                />
            )
        }
      </div>

    </div> // Aquí debe estar el cierre correcto de la etiqueta div
  );
};

export default Content