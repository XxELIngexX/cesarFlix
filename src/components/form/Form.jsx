import { useState } from "react"
import { useNavigate } from "react-router-dom"; 

import "./Form.css"
import Campo from "./campo/Campo"
import CategoriesList from "./categoriesList/CategoriesList"

const Form = (props) => {


    const [titulo, actualizarTitulo] = useState(props.titulo)
    const [categoria, actualizarCategoria] = useState(props.categoria)
    const [imagen, actualizarImagen] = useState(props.imagen)
    const [video, actualizarVideo] = useState(props.video)
    const [descripcion, actualizarDescripcion] = useState(props.descripcion)

    const navigate = useNavigate();


    const limpiar = (e) => {
        actualizarTitulo("")
        actualizarCategoria("")
        actualizarImagen("")
        actualizarVideo("")
        actualizarDescripcion("")
    }
    const manejarDatos = (e) => {
        e.preventDefault()
        const id = props.id
        console.log("Manejar el envio")
        let datosAEnviar = {
            id,
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }

        if (props.crearVideo) {
            props.crearVideo(datosAEnviar)
            navigate("/")

        } else if (props.editarVideo) {

            props.changeModal()

            props.editarVideo(datosAEnviar)
        }


    }

    return (
        <div className="card">

            <h3 className="h3">{props.mensaje}</h3>
            <form className="form" onSubmit={(e) => manejarDatos(e)}>
                <Campo
                    titulo="Titulo"
                    placeholder="Ingrese el título"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                    className="input"

                />
                <CategoriesList
                    valor={categoria}
                    actualizarCategoria={actualizarCategoria}
                    className="select"

                />

                <Campo
                    titulo="Imagen"
                    placeholder="Ingrese el enlace de la imagen"
                    required
                    valor={imagen}
                    actualizarValor={actualizarImagen}
                    className="input"

                />

                <Campo
                    titulo="Video"
                    placeholder="Ingrese el enlace del video"
                    required
                    valor={video}
                    actualizarValor={actualizarVideo}
                    className="input"
                />
                <Campo
                    titulo="Descripción"
                    placeholder="¿De qué se trata este video?"
                    required
                    valor={descripcion}
                    actualizarValor={actualizarDescripcion}
                    className="textarea"
                />



                <div className="button-group" >
                    <button type="submit" className="submit-button" >GUARDAR</button>
                    <button type="button" className="clear-button" onClick={limpiar}>LIMPIAR</button>
                </div>
            </form>
        </div>
    );
}

export default Form