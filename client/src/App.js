
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Topbar from './component/topbar/Topbar';
import Write from './pages/Write';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import {Login, Register} from './pages/LoginRegister';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path='/' >
          
          <Route index element={<Home/>}/>
          <Route path='write' element={<Write/>}/>
          <Route path='post/:id' element={<SinglePost/>}></Route>
          <Route path='profile' element={<Profile/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>   
        
      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
