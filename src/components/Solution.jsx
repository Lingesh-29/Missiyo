
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import { solution } from '../data'
import Card from '../UI/Card'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import video from '../assets/work video.mp4'

const Solution = () => {
  return (
    <section className='solution'>
        <div className="container solution__container">
            <div className="solution__left">
            <div className="solution__left">
                <video src={video} style={{width: 1525, height: 750}} autoPlay loop muted />
                
                    
                    
                </div>
            </div>
            <div className="solution__right">
                
                <SectionHead icon={<GiCutDiamond/>} title=" Our Solutions"/>
                
               
             
                
                <div className="solution__wrapper">
                    {
                        solution.map(({id, icon, title, desc, path}) => {
                            return <Card  className="solutions__solution"key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                                <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution
