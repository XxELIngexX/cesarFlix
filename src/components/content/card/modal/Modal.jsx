import { useState,useEffect } from "react"

import "./Modal.css"
import Form from "../../../form/Form"
import { buscar } from "../../../../api/api"

const Modal = (props)=>{
const {categoria,descripcion,imagen,titulo,video,id} = props.video

    return  <>
    <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={props.changeModal} >
        &times;
      </span>
      <Form  mensaje={"Editar Tarjeta"}
      id={id}  
        titulo={titulo}
        categoria = {categoria}
        imagen={imagen}
        video={video}
        descripcion={descripcion}
        editarVideo={props.editarVideo}
        changeModal={props.changeModal}
        
      />
    </div>
  </div>
  </>
}
export default Modal