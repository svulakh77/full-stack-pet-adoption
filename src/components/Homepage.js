import React, {useContext} from 'react'
import Login from './Login'
import SomeContext from "../Context";

function Homepage() {
  const { currentUser,authenticated } = useContext(SomeContext);
  const welcomeMessage = `Welcome ${currentUser.firstName} ${currentUser.lastName}!`

  return (
  
    <div className="home">
      <p className='welcomeMessage'>
      {authenticated ? welcomeMessage: ""}
      </p>
        <p className='openQuote'>
        Welcome to the Furry Bestie Adoption Agency! We hope we can help you find your new best friend
        </p>
    </div>
  )
}

export default Homepage