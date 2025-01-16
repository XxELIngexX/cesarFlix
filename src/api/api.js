import axios from "axios"
export const api = axios.create({
    baseURL:"http://localhost:5000"
})


// hace la peticion GET a la API
export const buscar = async (url,setData)=>{
    const respuesta = await api.get(url)
    setData(respuesta.data)

}

// hace la peticion PUT a la API
export const actualizar = async (url, datosActualizados, setData) => {
    const respuesta = await api.put(url, datosActualizados);
    setData(respuesta.data);
}

// hace la peticion DETLETE a la API
export const toDelete=async(url,setData )=>{
    const respuesta = await api.delete(url)
    setData(respuesta.data)
}

// hace la peticion POST a la API
export const createVideo=async(url, data,setData)=>{
    const respuesta = await api.post(url,data)
    setData(respuesta.data)
}