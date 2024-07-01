
import Navbar from './navbar';
import Home from './home';
import Create from './create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blogdetails from './blog-details';
import NotFound from './notfound';
import All from './All';
import Custom from './Custom';
import ICP from './ICP';
import Mission from './Mission';
import Product from './product';
import { useEffect, useState } from 'react';
import Editblogs from './editblogs';

function App() {
  const [curr,setcurr]=useState("");
  const changecurr=(newval)=>{
    setcurr(newval);
  };
  useEffect(()=>console.log(curr),[curr])
  return (
    <Router>    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route  exact path="/">
          <Home/>
            </Route>
            <Route path="/create">
            <Create setval={curr}/>
            </Route>
            <Route path={`/${curr}/:id`}>
            <Blogdetails setval={curr}/>
            </Route> 
            <Route path="/All">
            <All setval={curr} setfunc={changecurr} />
            </Route> 
            <Route path="/Custom">
            <Custom setval={curr} setfunc={changecurr}/>
            </Route>
            <Route path="/ICP">
            <ICP setval={curr} setfunc={changecurr}/>
            </Route> 
            <Route path="/Mission">
            <Mission setval={curr} setfunc={changecurr}/>
            </Route>
            <Route path="/Product">
            <Product setval={curr} setfunc={changecurr}/>
            </Route> 
            <Route path="/Edit/:id">
            < Editblogs setval={curr}/>
            </Route>
            <Route path="*">
            <NotFound/>
            </Route>
              
        </Switch>
      </div>
    </div> 
    </Router>

  );
}

export default App;
