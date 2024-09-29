import { Progress } from "flowbite-react";
import React from "react";

export default function Skills() {
  const skills = [
    {
      skillName: "photoshop",
      skillProgress: 75,
      skillProgressPer: "75%",
      color: "blue",
    },
    {
      skillName: "jQuery",
      skillProgress: 60,
      skillProgressPer: "60%",
      color: "red",
    },
    {
      skillName: "HTML5",
      skillProgress: 85,
      skillProgressPer: "85%",
      color: "yellow",
    },

    {
      skillName: "CSS3",
      skillProgress: 90,
      skillProgressPer: "90%",
      color: "purple",
    },
    {
      skillName: "javascript",
      skillProgress: 70,
      skillProgressPer: "70%",
      color: "green",
    },
    {
      skillName: "react",
      skillProgress: 80,
      skillProgressPer: "80%",
      color: "indigo",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center p-[15%] ">
      <div className="grid grid-rows-1 gap-4 ">
        <h6 className="text-gray-400 font-thin font-sans tracking-wider">
          MY SPECIALTY
        </h6>
        <h1 className="font-serif tracking-widest font-bold">MY SKILLS</h1>
        <p className="text-gray-400 font-sans">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 w-full mt-10">
        {skills.map((skill, index) => (
      <div key={index} className="w-full relative">
      <div className={`flex items-center text-${skill.color}-500 justify-between`}>
        <h3>{skill.skillName}</h3>
      </div>

      
      <div className="relative w-full">
       
        <Progress progress={skill.skillProgress} color={skill.color} />
        
        
        <div
          className={`absolute -top-5 text-${skill.color}-500 font-medium`}
          style={{
            left: `${skill.skillProgress}%`, 
            transform: "translateX(-50%)", 
          }}
        >
          {skill.skillProgressPer}
        </div>
      </div>
    </div>
        ))}
      </div>
    </section>
  );
}
