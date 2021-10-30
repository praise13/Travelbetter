import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { PlacesToStay } from './components';
import  Experience  from './components/Experience';
import  Blog from './components/Blog';



function App() {
  return (
    <div className="App">
      <Router>
           <Switch>
             <Route path='/' exact component={() => <HomePage/>} />
             <Route path='/places' exact component={() => <PlacesToStay/>} />
             <Route path='/blog' exact component={() => <Blog/>} />
             <Route path='/experience' exact component={() =><Experience/>} />
           </Switch>
            <Footer/>
      </Router>
    </div>
  );
}

export default App;
