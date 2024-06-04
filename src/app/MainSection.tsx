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
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/doomsdaylogs-site/images/Image2.PNG" 
            alt="Background Image" 
            layout="fill" 
            objectFit="cover" 
            quality={100} 
            className="w-full h-full" 
          />
        </div>
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-0">
          <div className="scroll-image absolute left-1/2 top-[20%] md:top-[10%] transform -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3 text-center">
            <Image src="/doomsdaylogs-site/images/Image.png" alt="Center Image" width={500} height={300} className="w-full" />
          </div>
          <div className="scroll-text text-left text-faded-red mt-10 md:mt-80">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">APPLICATION TO MANAGE LOGS</h2>
            <div className="mb-4">
              <p className="text-base md:text-lg lg:text-xl mb-4">
                IT&apos;S VERY USEFUL WHILE YOU ARE WORKING WITH LOGS IN DEBUG MODE
              </p>
              <p className="text-base md:text-lg lg:text-xl mb-4">
                AND OFFERS MANY FEATURES LIKE:
              </p>
            </div>
            <ul className="list-disc list-inside text-left ml-4 mb-4 text-base md:text-lg lg:text-xl">
              <li>LOGS MANAGEMENT: CREATE, EDIT, VISUALIZE, AND REMOVE LOGS.</li>
              <li>DATABASE TO SAVE LOGS.</li>
              <li>CHOOSE WHAT TO SAVE ABOUT THE LOG, E.G., ONLY NAME AND DATE.</li>
              <li>PROJECT SELECTION TO WORK WITH SPECIFIC LOGS.</li>
              <li>IA ASSISTANCE USING CHATGPT FOR ERROR LOGS.</li>
            </ul>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">HOW TO INSTALL THE DOOMSDAY LOGS</h2>
            <ol className="list-decimal list-inside text-left ml-4 text-base md:text-lg lg:text-xl">
              <li>DOWNLOAD THE ZIP FOLDER WITH THE FILES.</li>
              <li>EXTRACT THE FILES.</li>
              <li>EXECUTE THE SETUP.EXE.</li>
              <li>CHOOSE THE INSTALLATION SETTINGS THAT YOU WANT AND INSTALL THE DOOMSDAY LOGS.</li>
              <li>ACCESS THE INSTALL FOLDER, OPEN THE &quot;DOOMSDAYLOGS.DATABASE\CURRENTDATABASE&quot; FOLDER, OPEN THE PROPERTIES OF THE DATABASES, E DAR PERMISSÃO A TODOS OS USUÁRIOS E CONTAS ADMINISTRATIVAS.</li>
              <li>OPEN DOOMSDAY LOGS. PARA USAR OS RECURSOS DE GERENCIAMENTO, CONFIGURE A DLL EM SEU PROJETO:</li>
              <li>ABRA O VISUAL STUDIO COMO ADMINISTRADOR.</li>
              <li>REFERENCIE A DLL EM SEU PROJETO PARA VER AS OPÇÕES DE LOGS EM SEU CÓDIGO.</li>
              <li>ABRA O GERENCIADOR DE PACOTES NUGET DO SEU APLICATIVO E INSTALE OS SEGUINTES PACOTES:
                <ul className="list-disc list-inside ml-4">
                  <li>MICROSOFT.BCL.ASYNCINTERFACES</li>
                  <li>MICROSOFT.EXTENSIONS.PRIMITIVES</li>
                  <li>MICROSOFT.DATA.SQLCLIENT</li>
                  <li>SYSTEM.COMPONENTMODEL.ANNOTATIONS</li>
                  <li>SYSTEM.DRAWING.COMMON</li>
                </ul>
              </li>
              <li>AGORA VOCÊ PODE USAR A FERRAMENTA PARA GERENCIAR SEUS LOGS.</li>
            </ol>
          </div>
          <div className="mt-auto mb-8">
            <p className="text-base md:text-lg lg:text-xl text-faded-red mt-4">@SIRLUCASWOLFF</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;














































