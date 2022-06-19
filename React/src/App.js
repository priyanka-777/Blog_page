import Navbar from './Navbar.js';
import Home from './Home';
function App() {
    //const person={name:'priya',age:50};
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Home/>
      </div>
    </div>
  );
}

export default App;
