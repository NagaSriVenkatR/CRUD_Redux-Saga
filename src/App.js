import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import SignupForm from './Components/signupForm';
import Registerdata from './Components/Registerdata';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/table" element={<Registerdata />} />
          <Route path="/form" element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
