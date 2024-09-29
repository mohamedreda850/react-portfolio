import { Card } from "flowbite-react";
import React from "react";

const cards = [
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Graphic Design",
    color: "#3b82f6", 
  },
  {
    icon: "fa-solid fa-earth-africa",
    title: "Web Design",
    color: "#ef4444", 
  },
  {
    icon: "fa-solid fa-database",
    title: "Software",
    color: "#f59e0b", 
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Application",
    color: "#6366f1", 
  },
];

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center p-[15%] ">
      <div className="grid grid-rows-1 gap-4 ">
        <h6 className="text-gray-400 font-thin font-sans tracking-wider">
          ABOUT US
        </h6>
        <h1 className="font-serif tracking-widest font-bold">WHO AM I?</h1>
        <p className="text-gray-400 font-sans">
          <span className="font-medium text-gray-600 font-sans">
            Hi, I'm Mohamed Reda
          </span>{" "}
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word (and) and
          the Little Blind Text should turn around and return to its own, safe
          country.
        </p>
        <p className="text-gray-400 font-sans ">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-8">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            className="p-8 shadow-lg rounded-none border-b-2"
            style={{ borderBottomColor: card.color }} 
          >
            <div className="flex items-center justify-start mb-4">
              <i className={`fas fa-2x ${card.icon}`} style={{ color: card.color }}></i>
            </div>
            <h4 className="text-gray-900  text-xl ">
              {card.title}
            </h4>
          </Card>
        ))}
      </div>
    </section>
  );
}
