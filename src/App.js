import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import FormResult from './components/FormResult';

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPW: ""
  });
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}></UserForm>
      <FormResult data={state}></FormResult>
    </div>
  );
}

export default App;
