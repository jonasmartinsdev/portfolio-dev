
import { useForm } from 'react-hook-form';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { client } from '../lib/sanity';
import { Spinner } from './Spinner';


interface IContact {
  name: string
  email: string
  message: string
}

export function Footer() {

  const {register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<IContact>();

  async function handleSendEmail(data: IContact) {    
    const contactData = {
      _type: 'contact',
      email: data.email,
      message: data.message,
      name: data.name,
    };
  
    try {
      await client.create(contactData);
      reset();

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer className="my-32" id='contact'>
      <div className='flex items-start justify-center md:justify-between flex-wrap'>
        <div className=''>
          <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary ">Conecte-se comigo: </h2>

          <p className='mt-4 text-lg text-white font-medium'>Satisfeito comigo? Por favor entre em contato</p>

          <div className='my-6 flex items-center gap-4 text-portfolio-primary'>
            <AiFillInstagram size={32} />
            <AiFillLinkedin  size={32}/>
            <AiFillGithub  size={32}/>
          </div>
        </div>

        <div className='max-w-md w-full'>
          {
            isSubmitSuccessful ? (
              <h2 className='text-white text-2xl font-semibold'>
            Obrigado pela mensagem prometo retornar em breve!😃
              </h2>

            ) : (
              <>
                <h2 className='text-white font-semibold text-xl sm:text-2xl'>Entre em contato comigo</h2> 
         
                <form onSubmit={handleSubmit(handleSendEmail)} className='flex flex-col gap-4 mt-6'>
                  <input 
                    type="text" 
                    placeholder='Nome:' 
                    className={`h-14 bg-portfolio-secondary p-4 rounded-lg text-portfolio-light 
                  ${errors.name ? 'border border-red-400' : ''}`} 
                    {...register('name', {required: true, })}
                  />
                  <input 
                    type="text" 
                    placeholder='Email:'  
                    className={`h-14 bg-portfolio-secondary p-4 rounded-lg text-portfolio-light 
                  ${errors.email ? 'border border-red-400' : ''}`} 
                    {...register('email', {required: true, pattern: /^\S+@\S+$/i })}
    
                  />
                  <textarea  
                    id='message'
                    placeholder='Mensagem:' 
                    className={`h-98 bg-portfolio-secondary p-4 rounded-lg text-portfolio-light resize-none 
                  ${errors.message ? 'border border-red-400' : ''}`} 
                    {...register('message', {required: true })}
                  />
    
                  <button 
                    className='bg-portfolio-primary text-white max-w-[174px] p-4 rounded-md'>
                    {isSubmitting ? <Spinner /> : 'Enviar'}
                  </button>
                </form> 
              </>
            )
          }
        </div>

      </div>
    </footer>
  );
}