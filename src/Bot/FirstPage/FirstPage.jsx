import React from 'react';
import './FirstPageStyles.css';
import SecondPage from '../SecondPage/SecondPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ThirdPage from '../ThirdPage/ThirdPage';
import FourthPage from '../ThirdPage/FourthPage';
import Jehangir from '../ThirdPage/Jehangir';
import Ngma from '../ThirdPage/Ngma';
function FirstPage() {
    const navigate = useNavigate()
  return (
    <div>
        <center>
        <h2>Hii, I'm MusiBot ,Your Personal Booking Assistant</h2>
        <h3>Which Type of Museum are you looking for?</h3>
        <button className='buttons' onClick={()=>navigate('/Second-Page')}>Arts Museum</button>
        <button className='buttons' onClick={()=>navigate('/Second-Page')}>Automobile Museum</button>
        <button className='buttons' onClick={()=>navigate('/Second-Page')}>Textile Museum</button>
        <button className='buttons' onClick={()=>navigate('/Second-Page')}>Historical Museum</button>
        <button className='buttons' onClick={()=>navigate('/Second-Page')}>Science Museum</button>
        
        <Routes>
            <Route path='/Second-Page' element={<SecondPage/>}/>
            <Route path='/Third-Page' element={<ThirdPage/>}/>
            <Route path='/Fourth-Page' element={<FourthPage/>}/>
            <Route path='/Jehangir-info' element={<Jehangir/>}/>
            <Route path='/NGMA-info' element={<Ngma/>}/>
        </Routes>
        </center>
    </div>
  )
}

export default FirstPage