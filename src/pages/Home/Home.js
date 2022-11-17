import React, { useContext, useEffect } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserProvider'
import { logOut } from '../../firebase'

const Home = () => {
  // check user data 
  // if user is logged in, show user data
  // if user is not logged in, show login/register buttons
  const user = useContext(UserContext)
  const navigate = useNavigate()

 const handleLogout = async () => {
    try {
      await logOut()
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      {user ? (
        <div className='user'>
          <h2>Welcome, <span className='name'>{user.displayName}</span>
          </h2>
          <img src={user.photoUrl} alt=""/>
          <button
            onClick={handleLogout}
          >Logout</button>
        </div>
      ) : (
        <div className='guest'>
          <h2>Welcome <span className='name'>Guest,</span>
          </h2>
          <button
            onClick={() => navigate('/login')}
          >Login</button>
        </div>
      )}
    </div>
  )
}

export default Home