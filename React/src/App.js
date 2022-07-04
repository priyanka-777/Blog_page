import Navbar from './Navbar.js';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound.js';
//import {BrowserRouter as Route, Router,Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
    //const person={name:'priya',age:50};
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
         </Routes>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
