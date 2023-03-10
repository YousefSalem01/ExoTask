import React from 'react'
import SideBar from './Side-bar/SideBar'
import Main from './Main-workspace/Main'
import NavWorkSpcae from './Nav/NavWorkSpcae'
import './HomeWorkSpace.css'
import AnimatedBackground from './bg/AnimatedBackground '
import Chatbot from '../Chat/ChatBot'
import AddComp from '../AddComp/AddComp'


const HomeWorkSpace = () => {
  if(localStorage.getItem('token') === null) window.location.replace('/login')
  else{
  return (
    <div className='wrapper'>
    <AnimatedBackground>
     <NavWorkSpcae/>
      <SideBar/>
     {/* <Main/>  */}
     <div className='workspace container' id='workspace'>
        <div className='Block' id="1">
          <p className='paragraph' contentEditable='true'>Type here...</p>
        </div>
     </div>
     <Chatbot/>
      <AddComp/>
    </AnimatedBackground>
    </div>

  )
}
}

export default HomeWorkSpace
