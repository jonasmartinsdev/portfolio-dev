import {FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { HiMenuAlt4, HiX } from 'react-icons/hi';


export function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <motion.header 
        initial={{y: -25}}
        animate={{y: 0}}
        transition={{duration: 0.5 }}
        className={`fixed top-0 left-0 z-20  w-full ${scroll ? 'bg-black/30 backdrop-blur-lg ' : ''}`}>
        <nav className='max-w-6xl mx-auto  flex justify-between items-center px-8 py-5  '>
          <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
            <h2 className='font-bold'>JM</h2>
          </div>
             
          <ul className="flex max-md:hidden">

            {[
              {name: 'Home', ref: 'home'}, 
              {name: 'Sobre min', ref: 'about'}, 
              {name: 'Habilidades', ref: 'skills'},
              {name: 'Projetos', ref: 'projects'},
              {name: 'Contato', ref: 'contact'},
            ].map((item, index) => {
              return (
                <li key={index} className="ml-12">
                  <a className='transition-all text-white opacity-60 uppercase text-sm hover:opacity-100' href={`#${item.ref}`}>{item.name}</a>
                </li>

              );
            })}
          </ul>


          <div className='flex max-md:hidden'>
            {[ 
              {name: 'Github', icon: <FaGithub/> , href: 'https://github.com/JonasMartinsDev'},
              {name: 'Linkedin', icon: <FaLinkedin/> , href: 'https://www.linkedin.com/in/jonas-martins-950a30184/'},
              {name: 'Instagram', icon: <FaInstagram/> , href: 'https://www.instagram.com/ijonas.martins/'}

            ].map((item, index) => {
              return (
                <a 
                  href={item.href} 
                  target={'_blank'} 
                  className='cursor-pointer ml-4 text-white opacity-60 transition-opacity z-10 hover:opacity-100' key={index} rel="noreferrer">
                  {item.icon}
                </a>
              );
            })}
          </div>



          <div className="w-8 h-8 cursor-pointer rounded-full bg-white flex items-center justify-center sm:hidden">
            <HiMenuAlt4 className='w-3/4 h-3/4' size={30}   onClick={() => setToggle(true)}/>
          </div>
        </nav>
      </motion.header>

      {/* Toggle Menu */}
      {
        toggle && (
          <motion.div 
            className="fixed right-0 bottom-0 top-0 z-30 w-4/5 max-h-screen bg-portfolio-header text-white shadow-lg flex justify-end items-end flex-col"
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
       
            <HiX size={30}  onClick={() => setToggle(false)} className='mr-4 mt-6' />

            <ul className='w-full h-screen uppercase flex flex-col items-center justify-center gap-7 p-4 '>

              {[
                {name: 'Home', ref: 'home'}, 
                {name: 'Sobre min', ref: 'about'}, 
                {name: 'Projetos', ref: 'projects'},
                {name: 'Contato', ref: 'contact'},
              ].map((item, index) => {
                return (
                  <li key={index}>
                    <a href={`#${item.ref}`} onClick={() => setToggle(false)}>{item.name}</a>
                  </li>

                );
              })}
             
            </ul>
          </motion.div>
        )
      }
    </>
  );
}