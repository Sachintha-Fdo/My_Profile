import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
{/*import Publication from './components/publication';*/}


const App = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Projects/>
      </div>
      {/*<div>
        <Publication/>
  </div>*/}
    </div>
    
  );
}

export default App;
