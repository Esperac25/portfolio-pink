import './App.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LandingPage from '../Components/LandingPage';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Route exact path='/' component={LandingPage}/>
        <Route path='/#about' component={About}/>
        <Route path='/#projects' component={Projects}/>
        <Route path='/#contact' component={Contact}/>
      <Footer />
    </div>
  );
};

export default App;

