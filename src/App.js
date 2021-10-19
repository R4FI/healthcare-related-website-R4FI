import { Switch } from 'react-router';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Mainpage from './Components/Mainpage/Mainpage';
import Serivce from './Components/Service/Serivce';
import Login from './Components/Login/Login';
import Detail from './Components/Service/Detail/Detail';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Home></Home>
        <Switch>
            <Route exact path="/">
          <Mainpage></Mainpage>
            </Route>
            <Route path="/home">
            <Mainpage></Mainpage>
            </Route>
            <Route path="/contact">
             <Contact></Contact>
            </Route>
            <Route path="/service">
                <Serivce></Serivce>
            </Route>
            <Route path="/service/detail">
                <Detail></Detail>
            </Route>
            <Route path="/about">
             <About></About>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/register">
            </Route>
        </Switch>
        <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
