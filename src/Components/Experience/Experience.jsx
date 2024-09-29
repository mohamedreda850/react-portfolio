import React from "react";

export default function Experience() {
  const timelineData = [
    {
      title: "Full Stack Developer",
      year: "2017-2018",
      description:
        "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put.",
      iconColor: "bg-blue-500",
      icon : <i class="fa-solid fa-pencil"></i>
    },
    {
      title: "Front End Developer at Google Company",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      iconColor: "bg-red-500",
      icon : <i class="fa-solid fa-pencil"></i>
    },
    {
      title: "System Analyst",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      iconColor: "bg-yellow-500",
      icon : <i class="fa-solid fa-pencil"></i>
    },
    {
      title: "",
      year: "",
      description:
        "",
      iconColor: "bg-white",
      icon : ""
    },
  ];

  return (
    <section className="container mx-auto px-[15%] py-[6%]">
       <div className="grid grid-rows-1 gap-4 mb-8">
        <h6 className="text-gray-400 font-thin font-sans tracking-wider">
        EXPERIENCE
        </h6>
        <h1 className="font-serif tracking-widest font-bold">WORK EXPERIENCE</h1>
       
      </div>
      <div className="relative">
       
        <div className="border-l-2 border-gray-300 absolute h-full top-9 left-5"></div>

        
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="mb-8 flex items-start justify-start relative"
          >
         
            <div
              className={`border-gray-200 border-4 w-[50px] h-[50px]  rounded-full flex items-center justify-center ${item.iconColor} text-white absolute translate-x-1/2 left-0 -ml-[30px]`}
            >
              {item.icon}
            </div>

            {item.title && (  <div className="ml-14 my-2 p-4 bg-gray-100 rounded-0 shadow-md w-full">
              <h2 className="text-xl font-bold mb-5">
                {item.title}{" "}
                <span className="text-gray-500 text-sm">{item.year}</span>
              </h2>
              <p className="text-gray-600 my-5">{item.description}</p>
            </div>)}
          
          </div>
        ))}
      </div>
    </section>
  );
}

