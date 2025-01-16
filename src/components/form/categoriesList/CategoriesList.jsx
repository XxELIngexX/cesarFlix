import { useState, useEffect } from "react"

import "./CategoriesList.css"
import { buscar } from "../../../api/api"

const CategoriesList = (props) => {
    const paths = {
        urlVideos: "/videos",
        urlCategories: "/categories"
    }

    const [categories, setCategorie] = useState([])

    useEffect(() => {
        buscar(paths.urlCategories, setCategorie)
    }, [paths.urlCategories])



    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="input-group">
        <label className="label" >Categoría</label>
        <select className="select" value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar la Categoria</option>
            {categories.map((categoria, index) => <option className="select" key={index} value={categoria.nombre} >{categoria.nombre}</option>)}
        </select>
    </div>
}

export default CategoriesList