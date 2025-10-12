import React from 'react'
import { Button } from '@/components/ui/button'
import heroImage from "../assets/hero-bg.jpg"
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Resume from "../assets/Anand_mern_1.0.pdf"
function Home() {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <section id="home" className=' min-h-screen flex items-center justify-center relative overflow-hidden '> 
<div 
        className="absolute inset-0 z-0 animate-fade-in-up "
        style={{
           
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-sky-600/80"></div>
      </div>

      <div className='container mx-auto px-6 relative z-10 '>
        <div className='text-center text-white'>
            <div className='mt-20 animate-fade-in-up'>
            <h1 className="text-5xl md:text-7xl  font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-yellow-300">Anand Thakur</span>
            </h1>
            </div>
            <div className='animate-fade-in-up-delay-1'>  
            <p className="text-xl md:text-2xl mb-4 text-gray-100">
            Full-Stack JavaScript (MERN) Developer & Design Enthusiast
            </p>  
            <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300'>
            Enthusiastic MERN Stack Developer and recent graduate, skilled in JavaScript and eager to build responsive, efficient, and user-friendly full-stack web applications
            </p>

<div className='animate-fade-in-up-delay-2 flex flex-col items-center justify-center sm:flex-row gap-4 mb-12'>
   <Button size="lg"
   onClick={scrollToAbout}
   className="bg-white text-primary hover:bg-gray-200 shadow-medium dark:bg-gray-900 dark:text-white cursor-pointer " 
   >
Learn more About me 
   </Button>
   <Button className="bg-white dark:text-white dark:bg-gray-900 text-primary  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer  shadow-large "
   onClick={() => window.open('https://github.com/anand-Thakur95', '_blank')}
   >
   <Github />
   </Button>

   <Button className="bg-white dark:text-white dark:bg-gray-900 text-primary  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer  shadow-large"
    onClick={()=>window.open('https://www.linkedin.com/in/anand-thakur-66a782291', '_blank')}>
   <Linkedin />
   </Button>

   <Button className="bg-white dark:text-white dark:bg-gray-900 text-primary  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer  shadow-large"
    onClick={()=>window.open('mailto:satul95060@gmail.com', '_blank')}>
   <Mail/>
   </Button>

   <Button title="download resume" className="bg-white dark:text-white dark:bg-gray-900 text-primary hover:  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer  shadow-large"
     onClick={() => {
      const link = document.createElement('a');
      link.href = Resume; 
      link.download = 'Anand_Thakur_Resume.pdf';
      link.click();
    }}>
   <Download/>
   </Button>
</div>
            </div>

            <div className="animate-fade-in-up-delay-3">
            <button 
              onClick={scrollToAbout}
              className="animate-float text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>

      </div>
  </section>
  )
}

export default Home
