import { motion } from 'framer-motion';
import { SiCss3, SiDocker, SiExpress, SiFramer, SiGit, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiNodedotjs, SiPrisma, SiReact, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si';

import { Title } from './Title';

export function Skills() {
  return (
    <section className='pt-28' id='skills'>

      <Title title='Minhas habilidades' subTitle='Habilidades' />
     
      <motion.div
        initial={{x: 0, opacity: 0}}
        whileInView={{x: [-250, 0], opacity: 1}}
        transition={{ duration: 1}}
        exit={{opacity: 0, y: -50}}
        className='mt-20 flex flex-wrap gap-12 justify-center max-w-3xl w-full mx-auto text-white'>

        <SiHtml5 size={100}/>
        <SiCss3 size={100}/>
        <SiStyledcomponents size={100} />
        <SiTailwindcss size={100}/>
        <SiJavascript size={100}/>
        <SiTypescript size={100}/>
        <SiReact size={100}/>
        <SiNodedotjs size={100}/>
        <SiDocker size={100}/>
        <SiNextdotjs size={100}/>
        <SiExpress size={100}/>
        <SiJest size={100}/>
        <SiFramer size={100}/>
        <SiPrisma size={100}/>
        <SiGit size={100}/>
        
      </motion.div>
       
    </section>
  );
}