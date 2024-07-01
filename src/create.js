import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = ({setval}) => {
    const [title,settitle]=useState('');
    const [body,setbody]=useState('');
    const [author,setauthor]=useState('mario');
    const [ispending,setpending]=useState(false);
    const history=useHistory();
     const handlesubmit=(e)=>{
             e.preventDefault();
             const blog={title,body,author};
             setpending(true);
             fetch(`http://localhost:8000/${setval}`,{
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
 
export default Create;