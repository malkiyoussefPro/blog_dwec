import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Inicio = () => {

    //HOOKs
    //useState

    const [blogs, setBlogs] = useState([
        {
            titulo: "Mi primer web",
            body: "texto para mostrar",
            autor: "Youssef",
            id: 1
        },
        {
            titulo: "Mi segundo web",
            body: "texto del segundo web para mostrar",
            autor: "Joan",
            id: 2
        },
        {
            titulo: "Mi tercer web",
            body: "texto del tercer web para mostrar",
            autor: "Imami",
            id: 3
        }
    ]);
    
    const [nombre, setNombre] = useState("pepito") ;
    const handleEliminarBlog = (id) => {
        
        const nuevoBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(nuevoBlog);

    }

    useEffect(() => {
        console.log("useEffect en marcha disparado !!!");
        console.log(blogs);
    }, [nombre])
    //Props
    return ( 
        <div className="home">
            
        <BlogList blogs = { blogs } titulo = "Listado completo de Blogs:" handleEliminarBlog = {handleEliminarBlog}/>  
        
        <h1>Filtros: </h1>
        <hr /><div>
            <br />
        </div>
        <BlogList blogs = { blogs.filter(blog => blog.autor ==="Youssef") } titulo = "Blogs de Youssef"/>
        <BlogList blogs = { blogs.filter(blog => blog.id ===2) } titulo = "Blogs de Joan"/>
        <p>{nombre}</p>
        <button onClick={() => setNombre("Youssef")}>Cambio de nombre</button>
        </div>
     );
}
 
export default Inicio;

//useEffect
