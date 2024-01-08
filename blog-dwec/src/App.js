
import './App.css';
import Navbar from './Navbar';
import Inicio from './Inicio';
function App() {

  const  titulo = "Bienvendios al nuevo blog";
 
  return (
    <div className="App">
      <Navbar />

      <div className="content">
       < Inicio/>
     
        </div>    
    </div>
  );
}

export default App;
