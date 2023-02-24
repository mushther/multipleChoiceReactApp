import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllRouting from './Router/AllRouting';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRouting/>
    </div>
  );
}

export default App;
