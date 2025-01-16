import { useState } from "react"
import { GrCaretNext } from "react-icons/gr";

import "./Nav.css"
const Nav = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Índice del video actual

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.videos.length); // Siguiente video
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + props.videos.length) % props.videos.length); // Video anterior
    };

    if (props.videos.length === 0) return null; // Si no hay videos, no renderiza nada.

    const currentVideo = props.videos[currentIndex];


    return (
        <div className="nav-bar">
        <div className="nav-buttons">
        <GrCaretNext className="prev-button" onClick={prevVideo}/>
        </div>
            <div className="video-item">
                <div className="info">
                    <h1 className="video-categoria">{currentVideo.categoria}</h1>
                    <h3 className="video.titulo">{currentVideo.titulo} </h3>
                    <p className="video-description">{currentVideo.descripcion}</p>

                </div>
                <img className="video-image" src={currentVideo.imagen} alt={currentVideo.titulo} />
            </div>

            <div className="nav-buttons">
            <GrCaretNext className="next-button" onClick={nextVideo}/>
            </div>
        </div>

    );
};
export default Nav