import {useState} from "react";
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


    return ( 
        <div className="home">
            {blogs.map((blog)=> {
               return( <div className="blog-preview" key={blog.id}>
               <h2>{blog.titulo}</h2>
               <p>Escrito por: {blog.autor}</p>
           </div>)
            })}

        </div>
     );
}
 
export default Inicio;