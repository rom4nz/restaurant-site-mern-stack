import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SpecialDishes = () => {

    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null);

    useState(() => {
        fetch('/menu.json')
            .then((res) => res.json())
            .then((data) => {
            const special = data.filter((item) => item.category === "popular");
            //console.log(special);
            setRecipes(special);
        });
    }, []);

    //settings for the slider
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='section-container my-20'>
            <div className='text-left'>
                <p className='subtitle'>Special Dishes</p>
                <h2 className='title md:w-[420px]'>Standout Dishes From Our Menu</h2>
            </div>

            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>
        </div>
    )
}

export default SpecialDishes