import React from 'react'
import './styles.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {signInWithGoogle} from '../../firebase'

const Login = () => {

    return (
        <div className='container'>
            {/* form with email password google facebook github */}
            <div className='formContainer'>
                <h2>
                    Sign Up or Login
                </h2>
                <div className='divider'></div>
                <div className='buttons'>
                    <button className='google button'
                    onClick={signInWithGoogle}
                    >
                        <div className='icon'>
                            <GoogleIcon fontSize="large" />
                        </div>
                        <div className='vertDivider'></div>
                        <div className='text'>
                            Continue with Google
                        </div>
                    </button>
                    <button className='facebook button'>
                        <div className='icon'>
                            <FacebookIcon fontSize="large" />
                        </div>
                        <div className='vertDivider'></div>
                        <div className='text'>
                            Continue with Facebook
                        </div>
                    </button>
                    <button className='github button'>
                        <div className='icon'>
                            <GitHubIcon fontSize="large" />
                        </div>
                        <div className='vertDivider'></div>
                        <div className='text'>
                            Continue with GitHub
                        </div>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Login