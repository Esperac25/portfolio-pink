import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/resume' component={Resume}/>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;

