import { Calendar, CalendarCheck } from 'lucide-react'
import hero from '/image (1).png'

const Hero = () => {
  return (
    <section id='home' className='scroll-m-20 bg-sky-50 py-16 px-1 lg:px-20'>
        <div className='container mx-auto px-20 flex flex-col-reverse
        lg:flex-row items-center justify-between gap-10'>
         <div className='max-w-xl text-center lg:text-left space-y-6 '>
            <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
                Brighter Smiles <br/> with Expert Dental Care 
            </h1>
            <p className='text-gray-700 text-sm lg:text-lg'>
                Experience top-notch dental care with our expert team. From routine check-ups to advanced treatments, we are dedicated to your oral health and radiant smile.
            </p>

            <a href="#"
            className='inline-flex items-center
             bg-sky-600 text-white px-3 py-1
              sm:px-6 sm-py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium'>
                <CalendarCheck className='w-8 h-8 mr-2' /> Book Appointment
              </a>

         </div>

         <div className='flex justify-center'>
            <img src={hero} alt="Dental" className='w-80 lg:w-[499px] rounded-4xl'  />

         </div>

        </div>

    </section>
  )
}

export default Hero
