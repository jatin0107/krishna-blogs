import { useState,useEffect } from 'react';
 import Bloglist from './bloglist';
import useFetch from './usefetch';
 const Home = () => {
    const [name,setName]=useState('Hare Krishna');
     let handleclick=()=>{
        setName('कर्माणि एव अधिकारः ते मा फलेषु कदाचन । मा कर्म-फल हेतुः भूः मा ते संगः अस्तु अकर्मणि ।।');   
    }
    
     const {data:blogs,isPending,error}=useFetch("http://localhost:8000/blogs");  
    

    return (  
        <div className="home">
            <p>{name}</p>
            <button onClick={handleclick}>click me</button>
            
            { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <Bloglist blogs={blogs} /> }
            
            
        </div>
    );
}
 
export default Home;