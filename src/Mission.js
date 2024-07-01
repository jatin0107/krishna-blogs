import useFetch from "./usefetch";
import Bloglist from "./bloglist";
const Mission = ({setval,setfunc}) => {
    setfunc("Mission");
    const {data:Mission,isPending,error}=useFetch(`http://localhost:8000/Mission`);
    return ( 
        <div className="all">
        <div className="topics">Recommended Topics </div>
        { Mission && <Bloglist blogs={Mission}  nigga={setval}/> }
    </div>
     );
}
 
export default Mission;