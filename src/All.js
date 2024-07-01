import useFetch from "./usefetch";
import Bloglist from "./bloglist";

const All
 = ({setval,setfunc}) => { 
    setfunc("All"); 
    // console.log(setval);
    const {data:All,isPending,error}=useFetch("http://localhost:8000/All");
    return (  
        <div className="all">
            <div className="topics">Recommended Topics </div>
            { All && <Bloglist blogs={All}  nigga={setval}/> }
        </div>
     );
}
 
export default All
;