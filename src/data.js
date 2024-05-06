import {MdOutlineWebhook } from 'react-icons/md'
import { TbDeviceMobileSearch } from "react-icons/tb";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrCloudSoftware } from "react-icons/gr";
import { FaSearchPlus } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrInternetExplorer } from "react-icons/gr";

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Feature",
        path: '/feature'
    },
    {
        name: "Overview",
        path: '/overview'
    },
    {
        name: "Pricing",
        path: '/pricing'
    },
    {
        name: "Login",
        path: '/login'
    }

   
]




export const products = [
    {
        id: 1,
        icon: <MdOutlineWebhook />,
        title: "Web development",
        info: "Web development is a vast field encompassing the creation and maintenance of websites and web applications.",
        path: "/products/111"
    },


    {
        id: 2,
        icon: <TbDeviceMobileSearch/>,
        title: "Mobile development",
        info: "Mobile development involves creating applications for mobile devices such as smartphones and tablets.",
        path: "/products/222"
    },


    {
        id: 3,
        icon: <BsDatabaseFillGear />,
        title: "Data science",
        info: "Data science is a multidisciplinary field that combines domain expertise, programming skills, and statistical knowledge to extract insights and knowledge from data.",
        path: "/products/333"
    },



    {
        id: 4,
        icon: <FiSettings/>,
        title: "API development",
        info: "API (Application Programming Interface) development involves creating interfaces that allow different software applications to communicate with each other.",
        path: "/products/111"
    }
]


export const solution = [
    {
        id: 1,
        icon: <GrCloudSoftware/>,
        title: "UX and Design",
        desc: "User experience and design are crucial elements in our software development services. It takes a talented team of designers to ensure your product is intuitive and easy to use.",
        path: "/solution/111"
    },


    {
        id: 2,
        icon: <FaSearchPlus/>,
        title: "QA & Software Testing",
        desc: "It's crucial to ensure your software is working well before it is released. We provide a broad range of testing services that can help ensure the safety and integrity of your applications.",
        path: "/solution/222"
    },

    {
        id: 3,
        icon: <GiArtificialIntelligence/>,
        title: "Artificial Intelligence",
        desc: "AI is changing the way software is being designed. We provide end-to-end AI services that help you develop intelligent applications.",
        path: "/solution/333"
    },

    {
        id: 4,
        icon: <GrInternetExplorer/>,
        title: "Internet of Things (IoT)",
        desc: "IoT is a rapidly growing space that presents a lot of opportunities for software development. We can help you build connected solutions for your business.",
        path: "/solution/444"
    }




]



export const faqs = [
    {
        id: 1,
        question: "What is an API?",
        answer: "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.",
     
    },

    {
        id: 2,
        question: "What is a programming language?",
        answer: "A programming language is a formal language comprising a set of instructions that produce various kinds of output. It is used to create software programs, scripts, or other sets of instructions for computers to execute.",

    },

    {
        id: 3,
        question: "What is Agile software development?",
        answer: "Agile software development is an approach to software development based on iterative and incremental development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams.",

    },

    {
        id: 4,
        question: "What is a database?",
        answer: "A database is a structured collection of data that is organized and stored in a way that allows for efficient retrieval, manipulation, and management. It is commonly used in software development to store and retrieve information.",

    },

    {
        id: 5,
        question: "What is a function in programming?",
        answer: " A function is a self-contained block of code that performs a specific task or calculates a value. It can take input parameters and optionally return a result.",

    },

    {
        id: 6,
        question: "What is unit testing?",
        answer: "Unit testing is a software testing technique where individual units or components of a software application are tested in isolation to ensure they function correctly. It helps identify and fix defects early in the development process.",
        
    }

]


export const reviews = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "I stumbled upon [Service Website] while searching for a solution to [specific problem], and I'm so glad I did! The platform is incredibly intuitive to use, and I found exactly what I needed within minutes. Plus, the customer support team was quick to respond to my questions and provided excellent assistance. Highly recommended!",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },

    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "I've been a loyal user of [Service Website] for over a year now, and it's been a game-changer for my business. The variety of services offered is impressive, and the quality is consistently top-notch. I've seen a noticeable improvement in [specific outcome] since I started using this platform. Kudos to the team behind it!",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")

    },

    {
        id: 3,
        name: "Edem Quist",
        quote: "What a fantastic find! I needed help with [specific task], and [Service Website] exceeded my expectations. Not only did I find a reliable service provider, but the entire process was smooth and hassle-free. I appreciated the transparent pricing and the ability to communicate directly with the service provider. Will definitely be using this website again!",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },

    {
        id: 4,
        name: "Grace Lavoe",
        quote: "I can't say enough good things about [Service Website]. From start to finish, my experience was exceptional. The website is user-friendly, the services are diverse, and the results are outstanding. Whether you're a freelancer looking for work or a business in need of services, this platform has you covered. 10/10!",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },

    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "I've tried several similar platforms in the past, but none compare to [Service Website]. The quality of service providers available here is unmatched, and I've been consistently impressed with the level of professionalism and expertise. I've saved so much time and effort by using this website, and I couldn't be happier with the results. Highly recommended to anyone seeking reliable services!",
        job: "pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]






















