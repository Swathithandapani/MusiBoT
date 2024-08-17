import React from 'react'
import Jehangir from './Jehangir'
import { Route, Routes ,useNavigate} from 'react-router-dom'
import Ngma from './Ngma'


function FourthPage() {
  const navigates = useNavigate()
  return (
    <div>
    <center>
    <h3>Well I have sorted some Museums in India,Which city would you like to go?</h3>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Mumbai</button>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Delhi</button>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Coimbatore</button>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Chennai</button>

    <h3>That's great which Museum would you like to visit ?</h3>
    <button className='buttons' onClick={()=>navigates('/NGMA-info')}>National Gallery of Modern Arts</button>
    <button className='buttons' onClick={()=>navigates('/Jehangir-info')}>Jehangir Art Gallery</button>


    </center>
    <Routes>
      <Route path='/Jehangir-info' element={<Jehangir/>}/>
      <Route path='/NGMA-info' element={<Ngma/>}/>
    </Routes>

    </div>
  )
}

export default FourthPage