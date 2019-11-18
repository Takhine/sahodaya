import React from 'react';
import Slider from "react-slick";
import placeholder from 'static/images/placeholder.svg';

const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoPlaySpeed:2000,
    dots: false,
    pauseOnHover: false,
    cssEase: "linear",
    responsive:[
        {
            breakpoint: 1200,
            settings:{
                slidesToShow: 5,
                slidesToScroll:1,
                infinite:true,

            }
        },
        {
            breakpoint: 992,
            settings:{
                slidesToShow: 4,
                slidesToScroll:1,
                infinite:true,
                cssEase: "linear",

            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true,
                cssEase: "linear",

            }
        },
        {
            breakpoint: 600,
            settings:{
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true,
                cssEase: "linear",

            }
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true,
                cssEase: "linear",

            }
        },
        {
            breakpoint: 460,
            settings:{
                slidesToShow: 2,
                slidesToScroll:1,
                infinite:true,
                cssEase: "linear",

            }
        },
        {
            breakpoint: 350,
            settings:{
                slidesToShow: 1,
                slidesToScroll:1,
                infinite:true,
                cssEase: "linear",

            }
        },
    ]
};
function MemberSchools() {
    return (
        <div className="member-schools-container">
            <h2 className="member-schools-title">Member Schools</h2>
            <Slider {...settings}>
                <div className="slide-container">
                    <img className="slide" src={placeholder} alt="Member School" />
                </div>
                <div className="slide-container">
                    <img className="slide" src={placeholder} alt="Member School" />
                </div>
                <div className="slide-container">
                    <img className="slide" src={placeholder} alt="Member School" />
                </div>
                <div className="slide-container">
                    <img className="slide" src={placeholder} alt="Member School" />
                </div>
                <div className="slide-container">
                    <img className="slide" src={placeholder} alt="Member School" />
                </div>
                <div className="slide-container">
                    <img className="slide" src={placeholder} alt="Member School"/>
                </div>
                <div className="slide-container">
                    <img className="slide" src={placeholder} alt="Member School" />
                </div>
            </Slider>
        </div>
    )
}

export default MemberSchools;