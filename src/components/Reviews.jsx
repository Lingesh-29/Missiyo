import SectionHead from "./SectionHead"
import { ImQuotesLeft } from "react-icons/im"
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import { reviews } from "../data"
import { useState } from "react"
import video from '../assets/reviews video.mp4'


const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = reviews[index];
    


    const prevReviewHandler = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(reviews.length - 1);

        }
    }

    const nextReviewHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= reviews.length - 1) {
            setIndex(0);
        }
    }


  return (
    <section className="reviews">
        <div className="container reviews__container">
<video src={video} style={{width: 1525, height: 500}} autoPlay loop muted />

            <SectionHead icon={<ImQuotesLeft/>} title="Reviews" className="reviews__head"/>
            <Card className="reviews">
                <div className="reviews__avatar">
                    <img src={avatar} style={{width: 75, height: 75}} alt={name} />
                </div>
                <p className="reviews__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="reviews__title">{job}</small>
            </Card>
            <div className="reviews__btn-container">
                <button className="reviews__btn" onClick={prevReviewHandler}><IoIosArrowDropleftCircle/></button>
                <button className="reviews__btn" onClick={nextReviewHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Reviews
