import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import Country from './components/Country';


function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/country' component={Country} />

    </div>
  );
}

export default App;
