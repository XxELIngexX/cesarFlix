import "./Card.css"
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";



const Card = (props) => {

    return (
        <div className="content-card" style={{borderColor:props.color1}}>
        <div className="shadow"style={{
            boxShadow: `inset 0 0 20px 0px ${props.color2},
                inset 0 0 40px 1px ${props.color3}`
            }}>
        </div>
        <img src={props.imagen} className="video-img"></img>

        
            <div className="editors">
                <div className="icon-container">
                    <MdOutlineDeleteForever className="icon" title="Eliminar" />
                    <span>Eliminar</span>
                </div>

                <div className="icon-container">
                    <RiEdit2Line className="icon"  title="Editar" />
                    <span>Editar</span>
                </div>

            </div>

        </div> 
    );

}
export default Card