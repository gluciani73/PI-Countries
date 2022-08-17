import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Route path='/' component={Landing} />
    </div>
  );
}

export default App;
