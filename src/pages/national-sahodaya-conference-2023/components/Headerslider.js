import React from 'react';
import Slider from "react-slick";
export const Headerslider = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  
    nextArrow: (
    <div>
      <div className="next-slick-arrow"> ⫸ </div>
    </div>
  ),
  prevArrow: (
    <div>
      <div className="prev-slick-arrow"> ⫷ </div>
    </div>
  ),
     
      };


      const Images = [
        {
          id: 1,
          src: "images/slide1.jpeg",
          alt: "Image 1",
          src_mob: "images/mobimg.jpg",
          title: "",
          description:"",
        },
        {
          id: 2,
          src: "images/slide2.jpeg",
          
          src_mob: "images/mobimg2.jpg",
          alt: "Image 2 ",
          title: "",
          description:"",
        }
        
        
      ];
      
    
      
  return (
    <section id="hero-bg-slider" className="h-100 p-0 w-100">
        <Slider {...settings}>
        {Images.map((item) => (
            <div key={item.id}>
              <a href='https://docs.google.com/forms/d/1W4tPfESYdAwjVhypxDPNgPiRKd_I8iBPKsTujKXDndU/edit' target='_blank'>
              <img src={item.src} alt={item.alt} style={{width: '100%'}} className="img-fluid img desk-img" />
              <img src={item.src_mob} alt={item.alt} className="img-fluid img mob-img pt-5" />
              </a>
              {/* <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p> */}
            </div>
          ))}
        </Slider>

       
      </section>
  
  )
}
