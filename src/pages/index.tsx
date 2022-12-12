import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { client } from '../lib/sanity';
import { GetStaticProps } from 'next';
import { IAbout, IHome, IProjects } from '../@types/IPortfolio';


interface HomeProps {
  home: IHome,
  projects: IProjects[],
  about: IAbout
}


export default function Home({ home, projects, about }:HomeProps ) {

  return (
    <>
      <Navbar />
      <Hero home={home} />
      <div className='w-full h-32 bg-[#181824]' />
      <main className='max-w-6xl w-full mx-auto px-4 overflow-hidden '>
        <About  about={about}/>
        <Skills />
        <Projects projects={projects} />
        <Footer />  
      </main>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const home = await client.fetch('*[_type == "home"][0]');
  const projects = await client.fetch('*[_type == "projects"]');
  const about = await client.fetch('*[_type == "about"][0]');

  return {
    props: {
      home,
      projects,
      about
    },
    revalidate: 10,
  };
};