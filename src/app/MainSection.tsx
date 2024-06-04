"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {
  useEffect(() => {
    gsap.from('.fade-in', { opacity: 0, duration: 1, y: -50, stagger: 0.3 });

    gsap.to('.scroll-image', {
      scrollTrigger: {
        trigger: '.scroll-image',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
      y: 200,
    });

    gsap.fromTo('.scroll-text', 
      { opacity: 0, y: 50 }, 
      {
        scrollTrigger: {
          trigger: '.scroll-text',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="relative w-full h-[45vh] flex flex-col justify-center items-center bg-red-900">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">ARE YOU READY DOOMGUY?</h1>
        <a href="/doomsdaylogs-site/files/DoomsdayLogs.Setup.zip" download className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded inline-block cursor-pointer z-10 text-center">DOWNLOAD</a>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black z-0"></div>
      </div>
      <div className="relative w-full min-h-screen bg-cover bg-center">
        <Image 
          src="/doomsdaylogs-site/images/Image2.PNG" 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="w-full min-h-screen" 
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div className="scroll-image absolute left-1/2 top-[10%] transform -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3 text-center">
            <Image src="/doomsdaylogs-site/images/Image.png" alt="Center Image" width={500} height={300} className="w-full" />
          </div>
          <div className="scroll-text text-left text-faded-red mt-10 md:mt-80 px-4 md:px-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">APPLICATION TO MANAGE LOGS</h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-4">IT&apos;S VERY USEFUL WHILE YOU ARE WORKING WITH LOGS IN DEBUG MODE AND OFFERS MANY FEATURES LIKE:</p>
            <ul className="list-disc list-inside text-left ml-4 mb-4 text-lg md:text-xl lg:text-2xl">
              <li>LOGS MANAGEMENT: CREATE, EDIT, VISUALIZE, AND REMOVE LOGS.</li>
              <li>DATABASE TO SAVE LOGS.</li>
              <li>CHOOSE WHAT TO SAVE ABOUT THE LOG, E.G., ONLY NAME AND DATE.</li>
              <li>PROJECT SELECTION TO WORK WITH SPECIFIC LOGS.</li>
              <li>IA ASSISTANCE USING CHATGPT FOR ERROR LOGS.</li>
            </ul>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">HOW TO INSTALL THE DOOMSDAY LOGS</h2>
            <ol className="list-decimal list-inside text-left ml-4 text-lg md:text-xl lg:text-2xl">
              <li>DOWNLOAD THE ZIP FOLDER WITH THE FILES.</li>
              <li>EXTRACT THE FILES.</li>
              <li>EXECUTE THE SETUP.EXE.</li>
              <li>CHOOSE THE INSTALLATION SETTINGS THAT YOU WANT AND INSTALL THE DOOMSDAY LOGS.</li>
              <li>ACCESS THE INSTALL FOLDER, OPEN THE &quot;DOOMSDAYLOGS.DATABASE\CURRENTDATABASE&quot; FOLDER, OPEN THE PROPERTIES OF THE DATABASES, AND GIVE PERMISSION TO ALL USERS AND ADMIN ACCOUNTS.</li>
              <li>OPEN DOOMSDAY LOGS. TO USE THE MANAGEMENT FEATURES, SET UP THE DLL IN YOUR PROJECT:</li>
              <li>OPEN VISUAL STUDIO AS ADMINISTRATOR.</li>
              <li>REFERENCE THE DLL IN YOUR PROJECT TO SEE THE LOGS OPTIONS IN YOUR CODE.</li>
              <li>OPEN THE MANAGE NUGET PACKAGES OF YOUR APPLICATION AND INSTALL THE FOLLOWING PACKAGES:
                <ul className="list-disc list-inside ml-4">
                  <li>MICROSOFT.BCL.ASYNCINTERFACES</li>
                  <li>MICROSOFT.EXTENSIONS.PRIMITIVES</li>
                  <li>MICROSOFT.DATA.SQLCLIENT</li>
                  <li>SYSTEM.COMPONENTMODEL.ANNOTATIONS</li>
                  <li>SYSTEM.DRAWING.COMMON</li>
                </ul>
              </li>
              <li>NOW YOU CAN USE THE TOOL TO MANAGE YOUR LOGS.</li>
            </ol>
          </div>
          <div className="mt-auto mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-faded-red mt-4">@SIRLUCASWOLFF</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;








































