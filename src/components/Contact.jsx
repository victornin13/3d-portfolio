import React from 'react'
import { useState, useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

// EmailJS and recipient settings come from .env (see .env.example)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const CONTACT_TO_EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name:form.name,
      to_name: 'Victor',
      from_email: form.email,
      to_email: CONTACT_TO_EMAIL,
      message: form.message,
    },
    EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email:'',
        message: '',
      })
    },
    (error) => {
      setLoading(false);

      console.log(error);
      alert('Sorry, something went wrong. Please try again.')
    }
    );
  };
  
  return (
    <div className='cl:mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden mb-1'>
      <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className='flex-[0.75] bg-black-100 p-8
        rounded-2xl border border-white-500'
      >
        <p className={`${styles.sectionSubText} text-pink-600 `}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium
            mb-4'>
              Your Name</span>
              <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Name:"
                className='bg-tertiary py-4 px-6
                placeholder:text-secondary
                text-white rounded-lf outlined-none
                border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium
            mb-4'>
              Your Email</span>
              <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Email:"
                className='bg-tertiary py-4 px-6
                placeholder:text-secondary
                text-white rounded-lf outlined-none
                border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium
            mb-4'>
              Message</span>
              <textarea 
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className='bg-tertiary py-4 px-6
                placeholder:text-secondary
                text-white rounded-lf outlined-none
                border-none font-medium'
              />
          </label>
          <button 
          type="submit"
          className='tagline'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")