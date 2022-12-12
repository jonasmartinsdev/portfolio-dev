import { motion } from 'framer-motion';
import { Title } from './Title';

export function About() {
  return (
    <section className='max-w-6xl w-full mx-auto min-h-screen pt-28 px-6' id='about'>

      <Title title='Quem sou eu?' subTitle='Sobre min' />

      <span className='text-portfolio-primary text-xs font-bold'></span>
      <h1 className='text-white text-4xl sm:text-5xl font-bold'></h1>


      <div className='grid grid-cols-1 sm:grid-cols-2 place-self-center sm:mt-24'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={'/about.svg'}
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
          <p >Olá! Meu nome é Jonas e gosto de desenvolver aplicações bonitas e funcionais. 
            Meu interesse em desenvolvimento web começou em 2017. Sempre fui bastante curioso, e
            quando conheci os sites de delivery me bateu a curiosidade de saber como tudo isso funcionava. </p>
          <p>Comecei a aprender programar com o `Gustavo Guanabara` no YouTube.</p>
          <p>Atualmente não trabalho em nenhuma empresa, mais tenho bastante aplicações web disponíveis no meu github, e aqui também no meu portfolio.
                Inclusive tenho aplicações similares a delivery (sim aprendi como funciona as aplicações delivery kkk).
          </p>
          <p >Sou desenvolvedor Front end, com foco em React.js, participo também de projetos open source em Nodejs e
            React native.
          </p>

        </motion.div>

      </div>
    </section>
  );
}