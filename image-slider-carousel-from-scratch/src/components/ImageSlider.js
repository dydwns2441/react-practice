import React, { useState} from 'react'
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current -1 );
    }
    // console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

// onclick={prevSlide}
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, idx) => {
                return (
                    <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                        {idx === current && (
                            // eslint-disable-next-line jsx-a11y/img-redundant-alt
                            <img src={slide.image} alt="food image" className='image' />
                        )}
                    </div>
                )
            })}

        </section>
    )
};

export default ImageSlider;
