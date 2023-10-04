import { useEffect, useState } from "react"
import {shortList, list,longList} from "./data"
import {FaArrowRight, FaArrowLeft, FaQuoteRight} from "react-icons/fa"

const Carousel = () => {
    const [people, setPeople] = useState(list)
    const[currentPerson, setCurrentPerson]=useState(0)

    useEffect(()=>{
        const setIntervalId =setInterval(() => {
            setCurrentPerson(currentPerson+1)
        }, 3000);
        return()=> clearInterval(setIntervalId)
    },[currentPerson])

    if(currentPerson > people.length-1){
        setCurrentPerson(0)
    }
    if(currentPerson < 0){
        setCurrentPerson(people.length-1)
    }

  return <section className="slider-container">
    {people.map ((person,index) => {

    let mainClass = "next-slide"

    if(currentPerson === index){
        mainClass = "active-slide"
    }
    if(currentPerson === index+1 || ( currentPerson === 0 && index === people.length-1)) {
        mainClass="last-slide"
    }

        const {id,name,image,title,quote} = person
        return <article key={id} className= {`slide ${mainClass}`}>
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"/>
        </article>
    })}
    <button className="prev" onClick={()=> setCurrentPerson(currentPerson-1)}><FaArrowLeft/></button>
    <button className="next"onClick={()=>setCurrentPerson(currentPerson+1) } ><FaArrowRight/></button>
  </section>
}
export default Carousel