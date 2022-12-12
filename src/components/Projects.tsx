import { motion } from 'framer-motion';
import Image from 'next/image';


import { FiGithub, FiEye} from 'react-icons/fi';
import { BiLinkExternal} from 'react-icons/bi';
import { IProjects } from '../@types/IPortfolio';
import { useSanityImage } from '../hooks/useSanityImage';


import { Title } from './Title';

interface ProjectsProps {
  projects: IProjects[]
}

export function Projects({ projects }:ProjectsProps) {


  const imageUrl = useSanityImage();

  return (
    <section className=' min-h-screen pt-28' id='projects'>
  
      <Title title='Meus projetos' subTitle='Projetos Incríveis' />
      
      <motion.div
        initial={{x: 0, opacity: 0}}
        whileInView={{x: [-250, 0], opacity: 1}}
        transition={{ duration: 1}}
        exit={{opacity: 0, y: -50}}
        className='mt-20 grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>

        {projects.map(project => {
          return (
            <div key={project._id} className='max-w-sm h-64 mx-auto relative'>
              <Image src={imageUrl(project.image).url()} width={500} height={500} alt={'Project'} className='w-full h-full object-cover' />
              <div className='opacity-0 hover:opacity-100 transition-opacity bg-portfolio-primary absolute w-full h-full top-0 left-0 flex gap-4 justify-center items-center text-white z-10'>
                <a href={project.github} className='w-10 h-10 bg-black/25 flex justify-center items-center rounded-full hover:scale-125 transition-transform'> <FiGithub size={20} /></a>
                <a href={project.view} className='w-10 h-10 bg-black/25 flex justify-center items-center rounded-full hover:scale-125 transition-transform'> <FiEye size={20} /></a>
              </div>
            </div>  
          );
        })}

      </motion.div>

      <div className='w-full flex justify-end  mt-12'>
        <a 
          href="https://github.com/jonasmartinsdev?tab=repositories"
          target={'_blank'} 
          className='text-portfolio-primary font-bold  flex justify-center gap-2 items-center rounded-2xl' rel="noreferrer">
          Ver mais... <BiLinkExternal/>
        </a>
      </div>
       
    </section>
  );
}