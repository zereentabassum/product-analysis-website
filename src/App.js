import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';
import reviewDetails from './Components/Hook/reviewDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/reviews' element={<Review></Review>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
