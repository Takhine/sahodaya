import React from 'react';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoPlaySpeed:500,
    dots: false,
    pauseOnHover: false,
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
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true,
            }
        },
        {
            breakpoint: 600,
            settings:{
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true,
            }
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 2,
                slidesToScroll:1,
                infinite:true,
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
                    <img className="slide" src="https://picsum.photos/id/534/1280/400 " />
                </div>
                <div className="slide-container">
                    <img className="slide" src="https://picsum.photos/id/534/1280/400 " />
                </div>
                <div className="slide-container">
                    <img className="slide" src="https://picsum.photos/id/534/1280/400 " />
                </div>
                <div className="slide-container">
                    <img className="slide" src="https://picsum.photos/id/534/1280/400 " />
                </div>
                <div className="slide-container">
                    <img className="slide" src="https://picsum.photos/id/534/1280/400 " />
                </div>
                <div className="slide-container">
                    <img className="slide" src="https://picsum.photos/id/534/1280/400 " />
                </div>
                <div className="slide-container">
                    <img className="slide" src="https://picsum.photos/id/534/1280/400 " />
                </div>
            </Slider>
        </div>
    )
}

export default MemberSchools;