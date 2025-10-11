import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Code, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card'
function About() {
    const Skills = [
        'Javascript', 'React', 'Redux', 'Next.js', 'Node.js', 'RESTful APIs', 'Express', 'MongoDB', 'HTML', 'CSS', 'Git', 'GitHub', 'CI/CD'
    ]

    const highlights = [
        {
          icon: <Code className="h-8 w-8 text-primary" />,
          title: 'Clean Code',
          description: 'Writing maintainable, scalable, and well-documented code following best practices.'
        },
        {
          icon: <Palette className="h-8 w-8 text-primary" />,
          title: 'UI/UX Design',
          description: 'Creating intuitive user interfaces with attention to design principles and user experience.'
        },
        {
          icon: <Zap className="h-8 w-8 text-primary" />,
          title: 'Performance',
          description: 'Optimizing applications for speed, accessibility, and seamless user interactions.'
        }
      ];

  return (
   <section id='about' className='py-20 section-bg'>
    <div className='container mx-auto px-6'>
        <div className='text-center mb-16 '>
<h2 className='text-4xl md:text-5xl font-bold  text-foreground mb-6'>About Me</h2>
<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>I'm a recent computer science graduate with a strong foundation in the MERN stack and a passion for building dynamic, user-friendly web applications. I enjoy transforming ideas into functional and visually appealing digital solutions.</p>
        </div>
<div className='grid lg:grid-cols-2 gap-12 items-center mb-16 '>
    <div className='space-y-6'>
        <h1 className='text-2xl font-semibold text-foreground mb-4'>My Journey</h1>
        <p className='text-muted-foreground leading-relaxed'>
        During my studies, I discovered my passion for MERN Stack development while working on 
              various projects. I enjoy the challenge of creating responsive, accessible websites 
              that provide excellent user experiences.
        </p>
        <p className='text-muted-foreground leading-relaxed'>  I'm constantly learning new technologies and best practices. My goal is to contribute 
        to meaningful projects while growing as a developer in a collaborative environment</p>
        <div className='pt-4'>
            <h4 className='text-lg text-foreground font-semibold mb-3'>
Technical Skills
            </h4>
            <div className='flex flex-wrap gap-2 '>
                {Skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-skill-bg text-black dark:text-white hover:bg-transparent" >
                    {skill}
                  </Badge>
                ))}
            </div>

        </div>
    </div>
    <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        

</div>
    </div>
   </section>
  )
}

export default About
