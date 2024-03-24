import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

import Main from "./Component/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/main" element={<Main></Main>}></Route>
      </Routes>

      <div></div>
    </div>
  );
}

export default App;
