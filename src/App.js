import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Intro from "./Components/intro";
import Simulator from './Components/Simulator';
import InsertionSort from "./Components/InsertionSort";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Intro />} />
                <Route path="InsertionSort" element={<InsertionSort />} />
                <Route path="Simulator"  element={<Simulator />} />
            </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
