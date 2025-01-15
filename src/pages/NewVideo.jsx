import "./NewVideo.css"
import Form from "../components/form/Form"
import Header from "../components/header/Header"


const NewVideo = () =>{
    return<>
        <Header/>
        <div className="title-continer" >
                <h2 className="title">NUEVO VIDEO</h2>
                <p className="subtitle">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            </div>
        <Form mensaje = {"Crear Tarjeta"}/>
    </>
}
export default NewVideo