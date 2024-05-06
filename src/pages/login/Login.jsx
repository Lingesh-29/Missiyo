
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { FaLock } from "react-icons/fa6";
import transition from '../../transition';



const Login = () => {
  return (
    <div className='wrapper'>
        <form action="">
        
            
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
                <a href="login">Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <h9>Don't have an account? <a href="register">Register</a></h9>
            </div>
        </form>
      
    </div>
  )
}

export default transition(Login)