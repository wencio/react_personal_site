import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import {Pagination,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

  const data =[

    { avatar: AVTR1,
      name: 'Tina Show',
      review:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos distinctio consequatur blanditiis alias recusandae repellat magni aliquam suscipit debitis asperiores saepe, quibusdam accusantium fugit ratione voluptas fuga tempore eveniet minus.'},

       
    { avatar: AVTR2,
      name: 'Shatta Wale',
      review:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos distinctio consequatur blanditiis alias recusandae repellat magni aliquam suscipit debitis asperiores saepe, quibusdam  accusantium fugit ratione voluptas fuga tempore eveniet minus.'},

       
    { avatar: AVTR3,
      name: 'Knawe Despite',
      review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos distinctio consequatur blanditiis alias recusandae repellat magni aliquam suscipit debitis asperiores saepe, quibusdam  accusantium fugit ratione voluptas fuga tempore eveniet minus.'},

         
    { avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos distinctio consequatur blanditiis alias recusandae repellat magni aliquam suscipit debitis asperiores saepe, quibusdam  accusantium fugit ratione voluptas fuga tempore eveniet minus.'},

  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials - Under Construction </h2>
      <Swiper className="container testimonials__container"
      modules = {[Pagination]}
      spaceBetween = {40}
      slidesPerView = {1}
  
      pagination = {{clickable:true}}
     
      
      >
        { data.map (({avatar,name,review},index)=>{
          return(
        <SwiperSlide key = {index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar one"/>
            
          </div>
          <h5 className = 'client__name'>{name}</h5>
          <small className = "client__review">
           {review}
          </small>
     </SwiperSlide>
        )}) }
      </Swiper>
      
    </section>
  )
}

export default Testimonials
