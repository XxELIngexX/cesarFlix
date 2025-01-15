
import "./Form.css"

const Form = (props) => {
    return (
        <div className="card">
            {/* <div className="title-continer" >
                <h2 className="title">NUEVO VIDEO</h2>
                <p className="subtitle">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            </div> */}
            <h3 className="h3">{props.mensaje}</h3>
            <form className="form">
                <div className="input-group" >
                    <label htmlFor="title" className="label">Título</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Ingrese el título"
                        className="input"
                    />
                </div>

                <div className="input-group" >
                    <label htmlFor="category" className="label" >Categoría</label>
                    <select
                        id="category"
                        name="category"
                        className="select"
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="category1">Categoría 1</option>
                        <option value="category2">Categoría 2</option>
                        <option value="category3">Categoría 3</option>
                    </select>
                </div>

                <div className="input-group" >
                    <label htmlFor="image" className="label">Imagen</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Ingrese el enlace de la imagen"
                        className="input"

                    />

                </div>

                <div className="input-group" >
                    <label htmlFor="video" className="label">Video</label>
                    <input
                        type="text"
                        id="video"
                        name="video"
                        placeholder="Ingrese el enlace del video"
                        className="input"

                    />
                </div>

                <div className="input-group" >
                    <label htmlFor="description" className="label">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="¿De qué se trata este video?"
                        className="textarea"


                    />
                </div>

                <div className="button-group" >
                    <button type="submit" className="submit-button" >GUARDAR</button>
                    <button type="button" className="clear-button">LIMPIAR</button>
                </div>
            </form>
        </div>
    );
}

export default Form