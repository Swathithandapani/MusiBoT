import React from 'react'
import jehangir from './jehangir.jpg'

function Jehangir() {
  return (
    <div >
    <center>
    <h3>Well I have sorted some Museums in India,Which city would you like to go?</h3>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Mumbai</button>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Delhi</button>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Coimbatore</button>
    <button className='buttons' onClick={()=>navigates('/Third-Page')}>Chennai</button>

    <h3>That's great which Museum would you like to visit ?</h3>
    <button className='buttons' onClick={()=>navigates('/NGMA-info')}>National Gallery of Modern Arts</button>
    <button className='buttons' onClick={()=>navigates('/Jehangir-info')}>Jehangir Art Gallery</button><br/>
    
    <img src={jehangir} alt='No Jehangir Image' width={500} height={500}/>
    <p>A monumental establishment in the field of art, Jehangir Art gallery was founded by Sir Cowasji Jehangir, second baronet, in 1952. Located in the southern region of Mumbai, the art gallery is commemorated not just as a primary spot for exhibitions of rare and appreciated paintings, sculptures, photographs, and crafts but also stands as a symbol for promotion and empowerment of Indian contemporary art.</p>
    <p>
    Address:161B, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai, Maharashtra 400001<br/>
    Opened:1952<br/>
    Hours:Opens 11am-Closes 7 pm<br/>
    Entry:Free entry<br/>
    </p>
    <button className='buttons'>Register</button>
    </center>

    </div>
  )
}

export default Jehangir