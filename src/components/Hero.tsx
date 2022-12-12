import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaRegFolder } from 'react-icons/fa';
import { FiDownload  } from 'react-icons/fi';

import { IHome } from '../@types/IPortfolio';
import { useSanityImage } from '../hooks/useSanityImage';

interface HeroProps {
  home: IHome
}

export function Hero({ home }:HeroProps) {

  const imageUrl = useSanityImage();

  return (
    <section 
      id='home'
      className="max-w-6xl w-full px-4 pt-16 mx-auto min-h-screen grid grid-cols-1 justify-items-center sm:grid-cols-2 items-center overflow-hidden"
    >
      <motion.div 
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={
          {
            duration: 2,
            delay: 0.5
          }
        }
        className= " text-white max-w-[435px] w-full flex flex-col items-center justify-center ">

        <span className=" text-xl sm:text-3xl">Olá <img src='https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif' className='w-[25px] inline-block' /> eu sou </span>
        <h2 className="text-4xl sm:text-6xl font-semibold text-portfolio-light">Jonas Martins</h2>
        <p className="mt-3 text-lg max-sm:text-center">{home.about} </p>

        <div className="mt-8 flex items-center gap-8">
          <div className="px-6 py-3  bg-portfolio-primary rounded-lg text-sm">
            <a href="#projects" className='text-white font-semibold flex items-center gap-2'>
              Projetos 
              <FaRegFolder  size={20}  />
            </a>
          </div>
          <a href={'./resume.pdf'} className=" px-6 py-3 border border-portfolio-primary rounded-lg font-semibold flex items-center gap-2">
            Download CV
            <FiDownload  size={20}  />
          </a>
        </div>
      </motion.div>
     
      <motion.div 
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }} 
        className={' max-w-xl w-full'}
      >
        <img src={imageUrl(home.image).url()} alt='' className='' />
      </motion.div>    
    </section>
  );
}