import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/pages/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './components/pages/Signup.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
