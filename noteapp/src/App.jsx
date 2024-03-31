import './App.css';
import { Route,Routes } from 'react-router-dom';
import Ragister from './component/Ragister';
import Login from './component/Login';
import Notes from './component/Notes';
import Home from './component/Home';

function App() {
  return (
      <div>
          <h1 style={{textAlign:"center",color:"teal"}} >Note App</h1>
          

        <div>
          <Routes>
              <Route path='/ragister'  element={<Ragister/>} ></Route>
              <Route path='/login'  element={<Login/>} ></Route>
              <Route path='/notes'  element={<Notes/>} ></Route>
              <Route path='/'  element={<Home/>} ></Route>
          </Routes>
             
        </div>

      </div>
  );
}

export default App;
