import './App.css';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import AllRouting from './Router/AllRouting';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRouting/>
     <Footer/>
    </div>
  );
}

export default App;
