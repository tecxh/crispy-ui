import logo from './logo.svg';
import './App.css';

import { DemoComponent } from './components/DemoComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xstate machine test
        </p>
        <DemoComponent />
      </header>
    </div>
  );
}

export default App;
