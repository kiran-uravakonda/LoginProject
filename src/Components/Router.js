import Login from './Login';
import SignUp from './Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function MainRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainRouter;
