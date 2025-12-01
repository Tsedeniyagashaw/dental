import { FaUserMd } from 'react-icons/fa'
import aboutImg from '/Rectangle 10 (1).png'

const About = () => {
  return (
    <section id='about' className='py-20 scroll-mt-20 bg-sky-50'>
      <div className='container mx-auto px-4 flex flex-col-reverse 
      lg:flex-row items-center gap-12'>
        <div className='w-full lg:w-1/2 flex justify-center'>
        <img src={aboutImg} alt="About" 
        className='w-80 lg:w-[420px] rounded-full shadow-md '/>
        </div>

        <div className='w-full lg:w-1/2 space-y-6 text-center lg:text-left px-8'>
           <div className='flex items-center justify-center lg:justify-start space-x-2'>
                <FaUserMd  className='text-sky-600 w-7 h-7 '/>
                <h2 className='text-3xl font-bold text-sky-900'>
                    About Our Clinic
                </h2>
           </div>
           <p className='text-gray-700 text-md leading-relaxed'>
            At our Dental Clinic, we are committed to providing exceptional dental care in a warm and welcoming environment.
             Our experienced team of dental professionals utilizes the latest technology and techniques to ensure that each 
             patient receives personalized treatment tailored to their unique needs.

           </p>
           <p className='text-gray-700 text-md leading-relaxed'>
          From routine check-ups and cleanings to advanced restorative and cosmetic procedures, we prioritize your oral health and overall well-being.

          Your comfort and satisfaction are our top priorities, and we strive to make every visit a positive experience.

           </p>
        </div>

      </div>
    </section>
  )
}

export default About
