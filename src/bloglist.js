import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = ({blogs,nigga}) => {
    return (  
        <div className="blog-list">
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/${nigga}/${blog.id}`}>
                <h1>{blog.title}</h1>
                <p>{blog.author}</p>
                </Link>
                <Link to={`/Edit/${blog.id}`} ><button >edit blog</button></Link>
                
            </div>
        ))}
        </div>
     );
}
 
export default Bloglist;