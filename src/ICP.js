import useFetch from "./usefetch";
import Bloglist from "./bloglist";
const ICP = ({setval,setfunc}) => {
    setfunc("ICP");
    const {data:ICP,isPending,error}=useFetch("http://localhost:8000/ICP");
    return ( 
        <div className="all">
        <div className="topics">Recommended Topics </div>
        { ICP && <Bloglist blogs={ICP}  nigga={setval}/> }
    </div>
     );
}
 
export default ICP;