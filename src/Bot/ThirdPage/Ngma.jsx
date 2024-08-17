import React from 'react'
import NGMA from './NGMA.jpg'
function Ngma() {
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
    <button className='buttons' onClick={()=>navigates('/Jehangir-info')}>Jehangir Art Gallery</button><br/>
    <img src={NGMA} alt='No NGMA Image' width={500} height={500}/ >
    <p>The NGMA, established in 1954 by the Government of India, is the premier art gallery under the Ministry of Culture. Its main museum, located at Jaipur House in New Delhi, houses over 17,000 works by 2,000+ artists, including luminaries like Raja Ravi Verma, Jamini Roy, and Amrita Sher-Gil. The collection spans from 1857 to contemporary times. With 12,000 square meters of exhibition space, the Delhi branch ranks among the world’s largest modern art museums. </p>
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

export default Ngma