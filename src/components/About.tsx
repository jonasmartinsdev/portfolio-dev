import { motion } from 'framer-motion';
import { IAbout } from '../@types/IPortfolio';
import { useSanityImage } from '../hooks/useSanityImage';
import { Title } from './Title';


interface AboutProps {
  about: IAbout
}

export function About({ about }: AboutProps) {

  const imageUrl = useSanityImage();

  return (
    <section className='max-w-6xl w-full mx-auto min-h-screen pt-28 px-6' id='about'>

      <Title title='Quem sou eu?' subTitle='Sobre mim' />

      <span className='text-portfolio-primary text-xs font-bold'></span>
      <h1 className='text-white text-4xl sm:text-5xl font-bold'></h1>


      <div className='grid grid-cols-1 sm:grid-cols-2 place-self-center sm:mt-24'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={imageUrl(about.image).url()}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div 
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white p-4 flex flex-col gap-4 text-sm sm:text-base"
        >
          {about.text.map(text => {
            return <p key={text._key}>{text.paragraph}</p>;
          })}
        </motion.div>

      </div>
    </section>
  );
}
