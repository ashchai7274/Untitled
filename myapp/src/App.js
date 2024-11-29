import './App.css';
import Blog from './Components/Blog';
import Features from './Components/Features';
import Frequent from './Components/Frequent';
import Header from './Components/Header';
import Last from './Components/Last';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Header/>
      <Features/>
      <Frequent/>
      <Blog/>
      <Last/>
    </div>
  );
}

export default App;
