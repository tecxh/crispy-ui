import './App.css';

import { AsyncButton } from './components/AsyncButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Xstate machine test
        </p>
        <AsyncButton />
      </header>
    </div>
  );
}

export default App;
