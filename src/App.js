import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Component/Navbar_Button/SignIn';
import CrownFunding from './Component/Navbar_Button/CrownFunding'
import Community_Page from './Component/Community_Page/Community_Page';
import Bussiness_page from './Component/Community_Page/Bussiness_page';
import Sport from './Component/Sport_page/Sport'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/crownfunding' element={<CrownFunding/>}/>
          <Route  path='/signin' element={<SignIn/>}/>
          <Route path='/community_page' element={<Community_Page/>}/>
          <Route path='/bussiness_page' element={<Bussiness_page/>}/>
          <Route path='/sport' element={<Sport/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
