import React from 'react'
import ThirdPage from '../ThirdPage/ThirdPage'
import { Route, Routes, useNavigate } from 'react-router-dom'

function SecondPage() {
    const navigates = useNavigate()
  return (
    <div>
        <center>
        <h3>Well I have sorted some Museums in India,Which city would you like to go?</h3>
        <button className='buttons' onClick={()=>navigates('/Third-Page')}>Mumbai</button>
        <button className='buttons' onClick={()=>navigates('/Third-Page')}>Delhi</button>
        <button className='buttons' onClick={()=>navigates('/Third-Page')}>Coimbatore</button>
        <button className='buttons' onClick={()=>navigates('/Third-Page')}>Chennai</button>

        <Routes>
            <Route path='/Third-Page' element={<ThirdPage/>}/>
        </Routes>
        </center>
    </div>
  )
}

export default SecondPage