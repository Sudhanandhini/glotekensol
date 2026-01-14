import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'



import img1 from "../assets/e1.jpg"
import img2 from "../assets/e2.jpg"
import img3 from "../assets/e3.jpg"
import img4 from "../assets/e4.jpg"

import ScrollToTop from '../components/ScrollToTop';



const Structural3DModeling = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
   img2, img3, img4,
  ]

  const projectImages = [
    'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const services = [
    'Steel Detailing',
    'Estimating and Costing',
    'BIM Services',
    'Point Clouds 3D Modelling'
  ]

  const clients = [
    {
      number: '01.',
      title: 'STRUCTURAL ENGINEERS',
      description: 'We offer comprehensive solutions for Structural Engineers, catering to their CAD and 3D modeling needs.'
    },
    {
      number: '02.',
      title: 'ENGINEERING COMPANIES',
      description: 'We collaborate to support Engineering Companies to alleviate their workload, the align project goals consistently and strive to meet the requirements of Engineering firms.'
    },
    {
      number: '03.',
      title: 'GENERAL CONTRACTORS',
      description: 'Our solutions offer contractors occupancy and save time and money for Contractors.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600')`
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
              Structural 3D Modeling
            </h1>
          </motion.div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* 3D Modeling Services USA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase">
                Structural 3D Modeling Services USA
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={img1}
                    alt="3D Modeling Construction"
                    className="w-full rounded-lg shadow-xl mb-6"
                  />
                  
                
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Others Services */}
                 <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      At <span className="font-bold text-[#001B3D]">Global Tech Engineering Solutions</span>, we specialize in high notch structural 3D modeling services tailored to meet your specific project requirements. Our expertise in 3D modeling brings 3D models, providing visual representations of your vision. These models grant you enhanced flexibility to refine designs and create precise data, ultimately improving construction project management.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Approach Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Our Approach
              </h3>
              
              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Cutting-Edge Technology:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our team utilizes the latest 3D and 3D software to craft precise and authentic structural models. With cutting-edge technology, we ensure our models meet and exceed customer expectations.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Efficiency and Compliance:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our structural 3D modeling services are designed to deliver accuracy and efficiency. We align with international building codes and adherence to industry guidelines and country-specific standards, ensuring compliance and quality.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Reduced Time and Costs:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Leveraging advanced 3D modeling services, you can significantly reduce construction time and costs while maintaining high standards of accuracy and precision.
                    </p>
                  </div>
                </motion.div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                We proudly serve <span className="font-bold">all regions of the USA</span> with our exceptional 3D modeling services.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#FF6B35] text-white px-12 py-4 rounded text-lg font-bold hover:bg-[#ff5722] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase"
                >
                  Get Your Free Quote Now !!
                </Link>
              </motion.div>
            </motion.div>

            {/* Project Images Grid */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid grid-cols-2 gap-6">
                {projectImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg overflow-hidden shadow-xl"
                  >
                    <img
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* Image Slider Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
                {/* Slides */}
                <div className="relative h-[500px]">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={slide}
                        alt={`3D Model ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg z-10 hover:scale-110"
                >
                  <ChevronLeft className="text-[#001B3D]" size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg z-10 hover:scale-110"
                >
                  <ChevronRight className="text-[#001B3D]" size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide 
                          ? 'bg-[#FF6B35] w-10 h-3' 
                          : 'bg-white/60 w-3 h-3 hover:bg-white/90'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Customer Satisfaction Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <div className="inline-block border-2 border-[#FF6B35] px-8 py-3 rounded-full">
                <span className="text-[#FF6B35] font-bold uppercase tracking-wider text-lg">Customer Satisfaction</span>
              </div>
            </motion.div>

            {/* Our Commitment Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-6 uppercase">
                Our Commitment
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                At the heart of our success lies our unwavering commitment to <span className="font-bold">customer satisfaction</span>. Our dedicated team of 3D modelers is focused on delivering top-notch structural 3D modeling services in the USA. Reach out to us for your upcoming 3D modeling projects and experience excellence firsthand.
              </p>
            </motion.div>

            {/* Our Clients Include Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="inline-block border-2 border-[#FF6B35] px-8 py-3 rounded-full">
                <span className="text-[#FF6B35] font-bold uppercase tracking-wider text-lg">Our Clients Include</span>
              </div>
            </motion.div>

            {/* Client Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF6B35] hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h4 className="text-5xl font-bold text-[#FF6B35] mb-4">{client.number}</h4>
                    <h5 className="text-xl font-bold text-[#001B3D] mb-4 uppercase">{client.title}</h5>
                    <p className="text-gray-700 leading-relaxed">{client.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[#FF6B35] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
              Contact Us For Further Information!
            </h3>
          </motion.div>
        </div>
      </section>

 <ScrollToTop />


    </div>
  )
}

export default Structural3DModeling