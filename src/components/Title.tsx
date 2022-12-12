
import { motion } from 'framer-motion';


interface TitleProps {
  title: string;
  subTitle: string;
}

export function Title({ title, subTitle }:TitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      className='text-center' 
    >
      <span className='text-portfolio-primary text-xs font-bold'>{title}</span>
      <h2 className='text-white text-4xl sm:text-5xl font-bold'>{subTitle}</h2>
    </motion.div>
  );
}