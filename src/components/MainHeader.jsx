import { Link } from "react-router-dom";

import video from '../assets/solution video.mp4'

const MainHeader = () => {
    return (
        <header className="main__header">
            <div className="overlay">
                <video src={video} style={{width: 2500, height: 1000}} autoPlay loop muted />
                <h6>Welcome!</h6>
                <h1>The Future of Missiyo Service Websites: Trends to Watch</h1>
                <h7>Learn about the future of Missiyo service websites and how to leverage emerging trends. Optimize your site for success now!</h7>
                  <Link to="/plans" className='btn lg'>Get Started</Link>  
                    </div>
                
        </header>
    )
}

export default MainHeader