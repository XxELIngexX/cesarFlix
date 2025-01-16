import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Usa react-router-dom v6 correctamente
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import { actualizar, buscar, toDelete,createVideo } from "./api/api"

function App() {
  const paths = {
    urlVideos: "/videos",
    urlCategories: "/categories"
  };

  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    buscar(paths.urlCategories, setCategories);
  }, [paths.urlCategories]);

  useEffect(() => {
    buscar(paths.urlVideos, setVideos);
  }, [paths.urlVideos]);

  const editarVideoInfo = async(video) => {
    await actualizar(`/videos/${video.id}`,video,setVideos)
    const newList = videos.map(item => item.id === video.id ? video : item
    )
    setVideos(newList)
    alert("se edito satisfactoriamente")
};
const eliminarVideo=async(deleteId)=>{
    // console.log("Eliminar video", deleteId)
    await toDelete(`/videos/${deleteId}`,setVideos)
     const nuevosVideos = videos.filter((item) => item.id !== deleteId)
     setVideos(nuevosVideos)
}
const crearVideo = async(data)=>{
  console.log(data)
  await createVideo(`/videos`, data, setVideos)
}

  return (
    <>
      <Router>
        <Routes>
          {/* Usamos JSX para pasar props */}
          <Route
            path="/"
            element={<Home 
            categories = {categories}
            videos={videos}
            paths={paths} 
            editarVideoInfo={editarVideoInfo}
            eliminarVideo={eliminarVideo}
            />}
          />
          <Route
            path="/new"
            element={<NewVideo 
            crearVideo={crearVideo}

            />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
