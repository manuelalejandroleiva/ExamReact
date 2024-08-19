import React from 'react'
import { RootState } from 'src/store';
import './Left.scss'
import { useAppSelector } from 'src/store/hooks';
import Buttons from 'src/components/Buttons/Buttons';

function Left() {
  const data = useAppSelector((state: RootState) => state.dataSlice);
  const isBlackBackground = data.background_color === '#1a2028';
  return (
    <div className='container' style={{
      display:'flex',flexDirection:'column',
      background: isBlackBackground ? data.centerelement : 'transparent', // Asegúrate de que el fondo no sea 'shadow'
      boxShadow: isBlackBackground ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.2)' // Cambia el shadow aquí
    }}>

      <p style={isBlackBackground ? { color: `white` } : { color: data.text_color }}>
        start
      </p>
      <p className={`${isBlackBackground ? `violet` : `orange`}`}>streaming</p>
      <p style={isBlackBackground ? { color: `white` } : { color: data.text_color }} >game</p>
      <p style={isBlackBackground ? { color: `white` } : { color: data.text_color }} >differently</p>
      <p style={{ color: '#545b62', fontSize: '18px' }}> gamor now has <span style={{ color: isBlackBackground ? `#cdd1d3` : `black` }}>stream party</span> platform</p>


      <div
        className={`button-row ${isBlackBackground ? 'black-background' : 'white-background'}`}
        style={{ flexDirection: 'row', width: '60%', paddingBottom: 85 }}
      >
        <Buttons onExcecute={()=>{}} label='Create an Account' type='Element'/>
        <Buttons onExcecute={()=>{} } label='Sign In ' type='Element' />

        
      </div>



    </div>


  )
}

export default Left