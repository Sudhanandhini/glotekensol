import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'



import ScrollToTop from '../components/ScrollToTop';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [openFAQ, setOpenFAQ] = useState(null)
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const [responseType, setResponseType] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setLoading(true)
    setResponseMessage('')
    setResponseType('')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setResponseMessage(data.message || 'Thank you for your message! We will get back to you soon.')
        setResponseType('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setResponseMessage(data.message || 'Failed to send message. Please try again.')
        setResponseType('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setResponseMessage('An error occurred while sending your message. Please check if the backend server is running.')
      setResponseType('error')
    } finally {
      setLoading(false)
    }
  }

  const contactCards = [
    {
      icon: <Phone className="text-white" size={28} />,
      title: 'Phone',
      info: ['+91 7892-504-910 ', '+91 9535-331-282'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: <Mail className="text-white" size={28} />,
      title: 'Email',
      info: ['info@example.com', 'support@example.com'],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: <MapPin className="text-white" size={28} />,
      title: 'Address',
      info: ['Glotek Ensol Private Limited ', 
'#67 Achutham, First Floor',  
'Vidhana Soudha Layout Phase - 1  ',
'7th Cross 60ft Road  ',
'Agrahara, Kogilu ', 
'Bangalore – 64'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: <Clock className="text-white" size={28} />,
      title: 'Working Hours',
      info: ['Mon - Fri: 9AM - 6:30PM', 'Sat - Sun: Half Day'],
      color: 'from-blue-400 to-indigo-500'
    }
  ]

  const faqs = [
    {
      q: 'How do I request a quote?',
      a: 'You can request a quote by filling out the contact form above, calling us directly, or visiting our office. We provide free estimates for all projects.'
    },
    {
      q: 'What areas do you serve?',
      a: 'We serve the entire metropolitan area and surrounding regions. Contact us to confirm if we service your specific location.'
    },
    {
      q: 'Are you licensed and insured?',
      a: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers compensation coverage.'
    },
    {
      q: 'How long does a typical project take?',
      a: 'Project timelines vary depending on scope and complexity. We provide detailed schedules during the planning phase and keep you updated throughout construction.'
    },
    {
      q: 'Do you offer warranties?',
      a: 'Yes, we stand behind our work with comprehensive warranties on both materials and workmanship.'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[300px] bg-cover bg-center overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.8), rgba(0, 27, 61, 0.8)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600')"
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 h-full flex items-center justify-center"
        >
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl"
            >
              Get In Touch With Our Team
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-32 relative z-10"
          >
            {contactCards.map((card, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" 
                }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-xl text-center hover:shadow-2xl transition-all"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-[#001B3D] mb-2">{card.title}</h3>
                {card.info.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <motion.div 
                variants={fadeInUp}
                className="mb-8"
              >
                <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Get In Touch</p>
                <h2 className="text-4xl font-bold text-[#001B3D] mb-4">Send Us A Message</h2>
                <p className="text-gray-600">
                  Have a question or need a quote? Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </motion.div>

              {responseMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-4 rounded-lg text-sm font-medium ${
                    responseType === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  {responseMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.2)" }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name*"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all"
                    required
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.2)" }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email*"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all"
                    required
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.2)" }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.2)" }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject*"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255, 107, 53, 0.2)" }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message*"
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35] transition-all resize-none"
                    required
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg hover:bg-[#ff5722] transition-all font-medium flex items-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'SENDING...' : 'Send Message'}</span>
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <motion.div 
                variants={fadeInUp}
                className="mb-8"
              >
                <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Our Location</p>
                <h2 className="text-4xl font-bold text-[#001B3D] mb-4">Visit Our Office</h2>
                <p className="text-gray-600 mb-6">
                  Stop by our office to discuss your project in person. We're always happy to meet with potential clients.
                </p>
              </motion.div>

              {/* Map */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-300 h-96 rounded-xl mb-6 flex items-center justify-center overflow-hidden shadow-xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </motion.div>

              {/* Additional Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)" }}
                className="bg-gradient-to-br from-[#001B3D] to-[#002447] text-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <motion.ul 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    '24/7 Emergency Support Available',
                    'Free Consultation and Estimates',
                    'Licensed and Insured Professionals',
                    'Quality Workmanship Guaranteed'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="text-[#FF6B35] mr-3 mt-0.5 flex-shrink-0" size={20} />
                      </motion.div>
                      <span className="group-hover:text-[#FF6B35] transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">FAQ</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                className="bg-gray-50 rounded-xl overflow-hidden transition-all"
              >
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-6 font-bold text-[#001B3D] cursor-pointer hover:text-[#FF6B35] transition-colors flex items-center justify-between"
                >
                  <span>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openFAQ === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#FF6B35] text-2xl"
                  >
                    +
                  </motion.span>
                </motion.button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-white mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-white/90 mb-8"
          >
            Contact us today for a free consultation and see how we can help bring your vision to life.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="tel:+12345678900"
            className="bg-[#001B3D] text-white px-10 py-4 rounded-lg hover:bg-[#002447] transition-all font-medium inline-flex items-center space-x-2 shadow-xl"
          >
            <Phone size={20} />
            <span>Call Now: +1 (234) 567-8900</span>
          </motion.a>
        </motion.div>
      </section>

 <ScrollToTop />

    </div>
  )
}

export default Contact