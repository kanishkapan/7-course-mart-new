"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AdditionalInfo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the address of Best Western Hotel?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "What are the facilities available in Best Western Hotel?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Does Best Western have a swimming pool?",
      answer: "Yes, Best Western features a luxurious swimming pool with temperature control and dedicated swimming lanes."
    },
    {
      question: "Items that are not allowed",
      answer: "Pets (except service animals), smoking, illegal substances, weapons, outside food and beverages in common areas."
    },
    {
      question: "Does Best Western have a swimming pool?",
      answer: "Yes, the hotel features a state-of-the-art swimming pool facility open from 6 AM to 10 PM daily."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8 bg-zinc-900/80 p-8 rounded-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-semibold text-white">
            Additional Information
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
              sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut sce
              scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin
              semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a
              arcu.
            </p>
            <p className="text-white leading-relaxed mt-4">
              Purus diam est vitae faucibus enim. Ultricies nunc vel magnis
              massa odio. Sed dictumst condimentum sit quis. Lorem ipsum dolor
              sit egestas sed sit. Fames tincidunt rhoncus viverra eu ut sce
              scelerisque adipiscing potenti in ultricies. Sem vitae amet, egestas
              aliquam mi a arcu. Feugiat et dignissim massa amare. Platea eu
              orci enim est egestas fusce eras.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Check in 15:00 - 23:59</p>
            <p className="font-semibold text-white">Check Out 12:00</p>
          </div>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`
                relative overflow-hidden rounded-xl border border-zinc-800
                backdrop-blur-sm transition-all duration-700 ease-in-out
                ${openIndex === index ? 'bg-zinc-900' : 'bg-zinc-900/70'}
                hover:bg-zinc-900/90
              `}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left transition-colors duration-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium text-white transition-all duration-500 ${
                  openIndex === index ? 'text-white' : 'text-white/80'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-all duration-700 ease-out ${
                    openIndex === index 
                      ? 'rotate-180 text-white' 
                      : 'rotate-0 text-white/80'
                  }`}
                />
              </button>
              <div
                className={`
                  transform-gpu transition-all duration-700 ease-out
                  ${openIndex === index 
                    ? 'max-h-[500px] opacity-100 translate-y-0' 
                    : 'max-h-0 opacity-0 -translate-y-4'}
                `}
              >
                <div 
                  className={`
                    px-6 pb-4 pt-2 text-white
                    transition-all duration-700 ease-out
                    ${openIndex === index ? 'translate-y-0' : 'translate-y-4'}
                  `}
                >
                  {faq.answer}
                </div>
              </div>
              {/* Animated border effect */}
              <div 
                className={`
                  absolute bottom-0 left-0 w-full h-0.5 
                  transition-all duration-700 ease-out
                  ${openIndex === index 
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 scale-x-100' 
                    : 'bg-transparent scale-x-0'}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
