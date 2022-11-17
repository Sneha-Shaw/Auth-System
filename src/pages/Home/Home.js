import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // check user data 
  // if user is logged in, show user data
  // if user is not logged in, show login/register buttons
  const user = null
  const navigate = useNavigate()
  return (
    <div className='container'>
      {user ? (
        <div className='user'>
          {/* <h1>Home</h1> */}
          <h2>Welcome <span className='name'>{user.name},</span>
            {/* {user.name} */}
          </h2>
        </div>
      ) : (
        <div className='guest'>
          {/* <h1>Home</h1> */}
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