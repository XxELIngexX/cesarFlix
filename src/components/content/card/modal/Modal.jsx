import "./Modal.css"
import Form from "../../../form/Form"

const Modal = (props)=>{
    return  <>
    <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={props.changeModal} >
        &times;
      </span>
      <Form  mensaje={"Editar Tarjeta"}/> {/* Aquí se incluye el formulario */}
    </div>
  </div>
  </>
}
export default Modal