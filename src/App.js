import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './Context/Notes/notesState';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path="/" element=
            {<Home/>}>
            </Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}>
            </Route>
      </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
