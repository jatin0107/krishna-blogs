import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const Blogdetails
 = ({setval}) => {
    const {id}=useParams();
    const history=useHistory();
    
    const {data:blogs,ispending,errors}= useFetch(`http://localhost:8000/${setval}/${id}`);
    
    
    const handledelete=()=>{
        fetch(`http://localhost:8000/${setval}/${id}`,{
            method:'DELETE'
        }).then(()=>{
          history.push(`/${setval}`)
        }
        
           
        )
        
       
    }
    
    return ( 
        <div className="blogdetail">
          { ispending && <div>Loading...</div> }
      { errors && <div>{ errors }</div> }
      { blogs && (
        <article>
          <h2>{ blogs.title }</h2>
          <p>Written by { blogs.author }</p>
          <div>{ blogs.body }</div>
        </article>
      )} <button onClick={handledelete}>delete</button>
        </div>
     );
}
 
export default Blogdetails
;