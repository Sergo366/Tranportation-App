import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import  s from "./Slider.module.css"

const ImageSlider = ({posts}) => {
    const [current, setCurrent] = useState(0);
    const length = posts.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(posts) || posts.length <= 0) {
        return null;
    }

    return (
        <section className={s.slider}>

            {posts.map((slide, index) => {
                return (
                    <div
                        className={index === current ? `${s.slide} + ${s.active}` : `${s.slide}`}
                        key={index}>
                        {index === current && (
                            <div>
                                <div className={s.name}>
                                    <p>{slide.name}</p>
                                </div>
                                <div className={s.text}>
                                     {slide.postText }
                                    <FaArrowAltCircleLeft className={s.leftArrow} onClick={prevSlide}/>
                                    <FaArrowAltCircleRight className={s.rightArrow} onClick={nextSlide}/>
                                </div>

                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;