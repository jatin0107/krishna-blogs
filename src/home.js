import { useState,useEffect } from 'react';
 import Bloglist from './bloglist';
import useFetch from './usefetch';
 const Home = () => {
    const [name,setName]=useState('Hare Krishna');
     let handleclick=()=>{
        setName('यदा यदा हि धर्मस्य ग्लानिर्भवति भारतअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् || 7||');   
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