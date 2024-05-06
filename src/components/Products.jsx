import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import { products } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
import video from '../assets/product video.mp4'




const Products = () => {
  return (
    <section className="products">
        <div className="container service__service">

        <video src={video} style={{width: 1525, height: 550}} autoPlay loop muted />
            <SectionHead icon={<FaCrown/>} title="Our Products & Services"/>

        
        <div className="products__wrapper">
          {
            products.map(({id, icon, title, info, path}) => {
              return (
                <Card className="products__product" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                  
                </Card>

              )
            })
          }
        </div>
        </div>
    </section>
  )
}

export default Products
