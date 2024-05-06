
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { FaLock } from "react-icons/fa6";
import transition from '../../transition';
import video from './assets/login video.mp4'


const Login = () => {
  return (
    <div className='wrapper'>
        <form action="">
        <video src={video} style={{width: 1525, height: 500}} autoPlay loop muted />
            
            <h8>LOGIN</h8>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <h9>Don't have an account? <a href="#">Register</a></h9>
            </div>
        </form>
      
    </div>
  )
}

export default transition(Login)