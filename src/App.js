import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout/Checkout';
import Error from './Error/Error';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';


function App() {
  return (
    <div>
         <Header></Header>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
