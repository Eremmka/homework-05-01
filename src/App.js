import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  const [cause, setCause] = useState({
    btnSignin: false,
    btnSignup: false,
    btnInput: false,
  })
  const hadleClick = () => {setCause(prev => {
      if (!prev.btnSignin && !prev.btnSignup && !prev.btnInput) {
        return { btnSignin: false, btnSignup: true, btnInput: false };
      } else if (prev.btnSignup) {
        return { btnSignin: true, btnSignup: false, btnInput: false };
      } else if (prev.btnSignin) {
        return { btnSignin: false, btnSignup: false, btnInput: true };
      } else {
        return { btnSignin: false, btnSignup: true, btnInput: false };
      }
    })
  }

  return ( 
    <div className="App">
      <header className="App-header">
        {cause.btnSignin && <Signin />}
        {cause.btnSignup && <Signup />}
        {cause.btnInput && <Input />}    
        <button onClick={hadleClick}>Переключатель</button>    
      </header>
    </div>
  );
}

export default App;
