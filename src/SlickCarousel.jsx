import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"
import {list} from "./data"
import {FaArrowRight, FaArrowLeft, FaQuoteRight} from "react-icons/fa"

const SlickCarousel = () =>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true,
      autoplay:true,
      autoplaySpeed:2000,
      pauseOnHover:true
    };
    return (
        <section className="slick-container">
        <Slider {...settings}>
        {list.map ((person) => {
        const {id,name,image,title,quote} = person
        return <article key={id}>
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"/>
        </article>
    })}
        </Slider>
    </section>
    )
}


export default SlickCarousel