import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProjectCard from './ProjectCard';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import {client} from "../config/sanityConfig";


export default function ProjectSlider() {
  const [projectData, setProjectData]= useState([]);

  const getProjectData= async()=>{
    let query= `*[_type== "project"]{projectName, projectUrl, githubUrl,"projectImage":projectImage.asset->url,_id}`;
    const projects= await client.fetch(query);
    setProjectData(projects);
  }
  useEffect(()=>{
    getProjectData()
  },[])
  return (
    <Swiper
    pagination={{
        clickable: true,
      }}
    breakpoints={{
        380: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}

      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        projectData.map((project)=>(
          <SwiperSlide key={project._id}><ProjectCard project={project} /></SwiperSlide>
        ))
      }
    </Swiper>
  )
}
