import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"
import {faqs} from '../data'
import FAQ from "./FAQ"
import video from '../assets/FAQs video.mp4'

const FAQs = () => {
  return (
    <section className=" faqs">
        <div className="container faqs__container">

        <video src={video} style={{width: 1525, height: 750}} autoPlay loop muted />

            <SectionHead icon={<FaQuestion/>} title="FAQs"/>
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs
