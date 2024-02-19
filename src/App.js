import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  { Routes, BrowserRouter, Route} from 'react-router-dom'
import Register from './user/Register';
import Login from './user/login';
import Dashboard from './user/Dashboard';
import UpdateUsers from './user/UpdateUsers';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='/signin' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/update/:id' element={<UpdateUsers/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
