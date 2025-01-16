import { useState, useEffect } from "react";
import "./Card.css"
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import Modal from "./modal/Modal";
import Category from "../../banner/category/Category";
import { actualizar, api, buscar, editar, toDelete } from "../../../api/api";



const Card = (props) => {
    const { color1, color2, color3, imagen, paths, id, video,editarVideoInfo,eliminarVideo } = props
    const [modalOpen, setModal] = useState(false)
    const [edit, setEdit] = useState({ video })
    const [categories, setCategorie] = useState([])
    const [videos, setvideos] = useState([])


    useEffect(() => {
        buscar(paths.urlVideos, setvideos)
    }, [paths.urlVideos])


    useEffect(() => {
        buscar(paths.urlCategories, setCategorie)
    }, [paths.urlCategories])

    const changeModal = () => {
        setModal(!modalOpen);
    };



    return (
        <div className="content-card" style={{ borderColor: color1 }}>
            <div className="shadow" style={{
                boxShadow: `inset 0 0 20px 0px ${color2},
                inset 0 0 40px 1px ${color3}`
            }}>
            </div>
            <img src={imagen} className="video-img"></img>


            <div className="editors">
                <div className="icon-container" onClick={()=>eliminarVideo(id)}>
                    <MdOutlineDeleteForever className="icon" title="Eliminar" />
                    <span>Eliminar</span>
                </div>

                <div className="icon-container" onClick={changeModal}>
                    <RiEdit2Line className="icon" title="Editar" />
                    <span>Editar</span>
                </div>

            </div>
            {/* Modal */}
            {modalOpen && (
                <Modal 
                changeModal={changeModal} 
                video={video} 
                editarVideo={editarVideoInfo}  />
            )}

        </div>
    );

}
export default Card