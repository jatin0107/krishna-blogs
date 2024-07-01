 import useFetch from "./usefetch";
 import Bloglist from "./bloglist";
 const Custom = ({setval,setfunc}) => {
    setfunc("Custom");
        const {data:Custom,isPending,error}= useFetch("http://localhost:8000/Custom");
    return (  
        <div className="custom">
            <div className="topics">Recommended Topics </div>
            { Custom && <Bloglist blogs={Custom} nigga={setval}/> }
        </div>
     );
     
}
 
export default Custom;