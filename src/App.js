import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Hello />
    //     <Clock />
    //   </header>
    // </div>
    
    <Switch>
      <Route exact path='/'>
        <Clock />
      </Route>
      <Route exact path='/Hello'>
        <Hello />
      </Route>
    </Switch>
  );
}

export default App;
