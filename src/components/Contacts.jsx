import React, { useState } from 'react'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';


function Contacts() {
  const serviceId = import.meta.env.VITE_server_ID;
const templateId = import.meta.env.VITE_template_ID;
const publicKey = import.meta.env.VITE_public_Key;
const servertemplate = import.meta.env.VITE_autoTemplate_ID;


const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'satul95060@gmail.com',
    href: 'mailto:satul95060@gmail.com'
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Phone',
    value: '+91-9506087372',
    href: 'tel:9506087372'
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Location',
    value: 'Greater Noida, Uttar-Pradesh',
    href: 'https://maps.google.com/?q=Greater+Noida,+Uttar+Pradesh'
  }
];

const socialLinks = [
  { icon: <Github className="h-6 w-6" />, href: 'https://github.com/anand-Thakur95', label: 'GitHub' },
  { icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/in/anand-thakur-66a782291', label: 'LinkedIn' },
  { icon: <Twitter className="h-6 w-6" />, href: 'https://x.com/anand_thakuur?t=jxSolm8fhpdjwglAyizXWA&s=09', label: 'Twitter' }
];


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit=(e)=>{
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    emailjs
    .send(
      serviceId,
      templateId,
      formData,
      publicKey
    )
    .then(() => {
      // Then auto-reply to user
      return emailjs.send(
        serviceId,
        servertemplate,
        formData,
        publicKey
      );
    })
    .then(() => {
      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.");
      console.error("Email send error:", error);
    });
};

   
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  
  return (
 <>
 <section id='contact' className='py-20 section-bg'>
    <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-foreground'> Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>

        </div>
<div className='grid lg:grid-cols-2 gap-12'>
 <Card className="p-8 shadow-soft">
  <h3 className='text-3xl md:text-4xl font-semibold mb-4'>Send Message</h3>
  <form onSubmit={handleSubmit} className='space-y-6'>
  <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
  </form>
 </Card>

 <div className='space-y-8'>
  <Card className="p-8 shadow-soft">
  <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
  <div className='space-y-6'>
    {
      contactInfo.map((info, index)=>(
        <div key={index} className='flex items-center space-x-4'>
          <div className='flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary'>
            {info.icon}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{info.label}</p>
            <a
              href={info.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {info.value}
            </a>
          </div>

        </div>
      ))
    }

  </div>

  </Card>
  <Card className="p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300"
                    onClick={() => window.open(link.href, '_blank')}
                  >
                    {link.icon}
                  </Button>
                ))}
              </div>
              <p className="text-muted-foreground mt-4">
                Connect with me on social media or check out my latest work on GitHub.
              </p>
            </Card>

 </div>
</div>
    </div>

 </section>
 <ToastContainer
   position="top-right"
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
 />
 </>
  )
}

export default Contacts
