import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_one from '../../images/slide_one.jpg'
import slide_two from '../../images/slide_two.jpg'
import slide_three from '../../images/slide_three.jpg'
import { SliderData } from '../sliderData/sliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import './feed.scss'

function Feed({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false
    }


    return (
        <Slider className='slider' {...settings}>
            {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
            {SliderData.map((slide, index) => {
                return (
                    // <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    <div>
                        {<img src={slide.image} className='image' alt={slide.name} />}
                        {/* {<img src={slide.image} className='image' />} */}
                    </div>

                )
            })}
        </Slider>
    )
}

export default Feed
