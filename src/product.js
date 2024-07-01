import useFetch from "./usefetch";
import Bloglist from "./bloglist";
const Product = ({setval,setfunc}) => {
    setfunc("Product");
    const {data:Product,isPending,error}=useFetch("http://localhost:8000/Product");
    return ( 
        <div className="all">
        <div className="topics">Recommended Topics </div>
        { Product && <Bloglist blogs={Product}  nigga={setval}/> }
    </div>
     );
}
 
export default Product;