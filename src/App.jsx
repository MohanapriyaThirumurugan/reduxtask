import React, {useState} from 'react'
import CartCard from './Components/CartCard.jsx'
import UserContextComponent from './utils/UserContextComponent.jsx'

export const UserContext = React.createContext()

function App() {

  return <>
    <UserContextComponent>
      <div className="container my-5">
        <CartCard/>
      </div>
    </UserContextComponent>
  </>
}

export default App