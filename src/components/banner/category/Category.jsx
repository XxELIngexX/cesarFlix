import "./Category.css"

const Category =(props)=>{
    console.log(props)
    return <h1 className="tittle" style={{backgroundColor:props.color}}>{props.nombre}</h1>
}
export default Category