
import './App.css';
import { Routes, Route   } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import MailDash from './Component/mail-Dash';
function App() {
  return (
    <div className="App">

 
  <Routes>
    <Route exact path='/' element={<SignUp />}></Route>
    <Route exact path='/login' element={<Login />}></Route>
    <Route exact path='/mail' element={<MailDash />}></Route>
  </Routes>
    </div>
  );
}

export default App;
