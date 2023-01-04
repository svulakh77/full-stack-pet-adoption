import React, {useContext} from 'react'
import Login from './Login'
import SomeContext from "../Context";

function Homepage() {
  const { currentUser,authenticated } = useContext(SomeContext);
  const welcomeMessage = `Welcome back ${currentUser.firstName} ${currentUser.lastName}`

  return (
  
    <div>
      <p className='welcomeMessage'>
      {authenticated ? welcomeMessage: ""}
      </p>
        <p className='openQuote'>
        Can you ignore those cute sad eyes? Find your furry best friend!
        </p>
    </div>
  )
}

export default Homepage