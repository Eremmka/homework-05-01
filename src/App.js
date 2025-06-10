import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signin />
        <Signup />
      </header>
    </div>
  );
}

export default App;
