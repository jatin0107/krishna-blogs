import { useState ,useEffect} from "react";
import { useHistory,useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const Editblogs = ({setval}) => {
    const {id}=useParams();
    const history=useHistory();
    const [title,settitle]=useState('');
    const [body,setbody]=useState('');
    const [author,setauthor]=useState('mario');
    const [ispending,setpending]=useState(false);
   
    

    ///
    const url = `http://localhost:8000/${setval}/${id}`;
    const { data, isPending, error } = useFetch(url);
  
    useEffect(() => {
      console.log(`setval: ${setval}, id: ${id}`);
      if (data) {
        console.log(data);
        settitle(data.title);
        setbody(data.body)
        setauthor(data.author)
      }
    }, [data, setval, id, settitle]);
    
     const handlesubmit=(e)=>{
             e.preventDefault();
             const blog={title,body,author};
             setpending(true);
             fetch(`http://localhost:8000/${setval}/${id}`,{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
                
              }).then(() => {
                console.log('new blog added');
                setpending(false);
                history.push(`/${setval}`);
              })
     }
    return ( 
        
        <div className="create">
        <h2> add a New Blog</h2>
        
        <form onSubmit={handlesubmit}>
            <label >Blog Title</label>
            <input type="text" required value={title} onChange={(e)=>settitle(e.target.value)}/>
            <label>body</label>
            <textarea  required value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
            <label >authors name</label>
            <select value={author} onChange={(e)=>setauthor(e.target.value)} >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!ispending&&<button>submit blog</button>}
            {ispending&&<button>adding blog</button>}
        </form>
    </div> 
     );
}
 
export default Editblogs;