import React, { useState } from "react";
import img1 from "./../../assets/img-1-C4nS0eD8.jpg";
import img2 from "./../../assets/img-2-D-4H1m4L.jpg";
import img3 from "./../../assets/img-3-pR2ZEVY9.jpg";
import img4 from "./../../assets/img-4-tHccITd-.jpg";
import img5 from "./../../assets/img-5-lAucr__a.jpg";
import img6 from "./../../assets/img-6-DFW03AZ3.jpg";
import { Button } from "flowbite-react";

export default function Apps() {
  const projects = [
    {
      image: img1,
      title: "work 02",
      subTitle: "animation",
      icon1: <i className="fa-solid fa-share-nodes"></i>,
      icon2: <i className="fa-regular fa-eye"></i>,
      icon3: <i className="fa-regular fa-heart"></i>,
      view: "100",
      like: "49",
    },
    {
      image: img2,
      title: "work 02",
      subTitle: "animation",
      icon1: <i className="fa-solid fa-share-nodes"></i>,
      icon2: <i className="fa-regular fa-eye"></i>,
      icon3: <i className="fa-regular fa-heart"></i>,
      view: "100",
      like: "49",
    },
    {
      image: img3,
      title: "work 02",
      subTitle: "animation",
      icon1: <i className="fa-solid fa-share-nodes"></i>,
      icon2: <i className="fa-regular fa-eye"></i>,
      icon3: <i className="fa-regular fa-heart"></i>,
      view: "100",
      like: "49",
    },
    {
      image: img4,
      title: "work 02",
      subTitle: "animation",
      icon1: <i className="fa-solid fa-share-nodes"></i>,
      icon2: <i className="fa-regular fa-eye"></i>,
      icon3: <i className="fa-regular fa-heart"></i>,
      view: "100",
      like: "49",
    },
    {
      image: img5,
      title: "work 02",
      subTitle: "animation",
      icon1: <i className="fa-solid fa-share-nodes"></i>,
      icon2: <i className="fa-regular fa-eye"></i>,
      icon3: <i className="fa-regular fa-heart"></i>,
      view: "100",
      like: "49",
    },
    {
      image: img6,
      title: "work 02",
      subTitle: "animation",
      icon1: <i className="fa-solid fa-share-nodes"></i>,
      icon2: <i className="fa-regular fa-eye"></i>,
      icon3: <i className="fa-regular fa-heart"></i>,
      view: "100",
      like: "49",
    },
  ];
  const [showAll, setShowAll] = useState(false);


  const initialVisibleCount = 4;

  
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };


  const itemsToShow = showAll ? projects : projects.slice(0, initialVisibleCount);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {itemsToShow.map((project, index) => (
        <div key={index} className="relative">
          <img
            src={project.image}
            alt="project"
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-around bottom-0 left-0 top-0 right-0 w-full bg-[#2C98F0] opacity-0  hover:opacity-100 duration-500  text-white p-4">
            <div> <h3 className="text-xl font-thin font-serif"><u>{project.title}</u></h3>
            <p className="text-xs font-thin ">{project.subTitle}</p></div>
           
            <div className="flex gap-2 mt-2">
             
                <div className="bg-slate-500 py-1 px-2 rounded-md"><span>{project.icon1}</span></div>
                <div className="bg-slate-500 py-1 px-2 rounded-md"><span>{project.icon2}<u>{project.view}</u></span></div>
                <div className="bg-slate-500 py-1 px-2 rounded-md"><span>{project.icon3}<u>{project.like}</u></span></div>
                
         
            </div>
          </div>
        </div>
      ))}
      {projects.length > initialVisibleCount && (
         <Button  onClick={toggleShowAll} size="md">{showAll?"Show less":"Show More"}</Button>
      )}
     
    </section>
  );
}
