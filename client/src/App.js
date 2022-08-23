import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import Country from './components/Country';
import Activity from './components/Activity';


function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Route exact path='/' render={() => <Landing />} />
      <Route exact path='/home' render={() => <Home />} />
      <Route exact path='/country/:id' render={() => <Country />} />
      <Route exact path='/activity' render={() => <Activity />} />

    </div>
  );
}

export default App;
