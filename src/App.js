// ffbc931f56624ee081eda3133997d675
import { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import { News } from './component/news/news';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const navItems = {
  business:'business',
  entertainment:'entertainment',
  general:'general',
  health:'health',
  science:'science',
  sports:'sports',
  technology:'technology'
}

export const  App = ()=> {
const [categories,setCategories] = useState(navItems)

console.log(categories)

    return (
      <div>
      <Navbar className="navbar"/>
      {/* <News category={this.state}/> */}
      <Routes>
        {/* <Route path='/entertainment' element={ <News category={ entertainment}/>}> 
       
        </Route> */}
        <Route path='/' element={<News  key='general' category={ categories.general}/>}> 
        </Route>
        <Route path='/health' element={<News key='health'  category={ categories.health}/>
}> 
        </Route>
        <Route  path='/science' element={<News  key='science'  category={ categories.science}/>
}> 
        </Route>
        <Route path='/sports' element={<News key='sports' category={ categories.sports}/>}> 
        
        </Route>
        <Route  path='/technology' element={<News key='technology' category={ categories.technology}/>}> 
        
        </Route>
        <Route path='/business' element={<News  key='business' category={ categories.business}/>}> 
        
        </Route>
        <Route path='/entertainment' element={<News  key='entertainment' category={ categories.entertainment}/>}> 
        
        </Route>
       
        </Routes>
      </div>
    );
  
}

export default App;
