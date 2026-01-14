import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'



import img2 from "../assets/j2.jpg"
import img1 from "../assets/j1.jpg"
import img3 from "../assets/j3.jpg"


import ScrollToTop from '../components/ScrollToTop';



const RenovationWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
   img1
  ]

  const projectImages = [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
    'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const processSteps = [
    {
      number: '01.',
      title: 'EXPERTISE',
      description: 'Our team comprises experienced professionals with a deep understanding of renovation techniques, materials, and industry best practices.'
    },
    {
      number: '02.',
      title: 'SKILLED CRAFTSMANSHIP',
      description: 'We uphold the highest standards of craftsmanship, ensuring quality materials and precise techniques to deliver lasting results.'
    },
    {
      number: '03.',
      title: 'PROJECT MANAGEMENT EXCELLENCE',
      description: 'From initial concept stage to final execution, we manage every aspect of the renovation project with meticulous planning and attention to detail.'
    },
    {
      number: '04.',
      title: 'INNOVATION AND SUSTAINABILITY',
      description: 'Our approach integrates innovative solutions and sustainable practices to create environmentally-friendly and energy-efficient spaces.'
    },
    {
      number: '05.',
      title: 'CLIENT COLLABORATION',
      description: 'We work closely with clients to understand their vision, requirements, and budget, delivering tailored solutions that meet their expectations.'
    },
    {
      number: '06.',
      title: 'COMPLIANCE AND SAFETY',
      description: 'Our renovation works adhere to industry standards, building codes, and safety regulations to ensure a safe and compliant environment.'
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
              Renovation Works
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
            
            {/* Renovation Works Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase">
                Renovation Works by Global Tech Engineering Solutions
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row gap-8"
                >
                  <img
                    src={img3}
                    alt="Renovation 3D Model"
                    className="w-full lg:w-1/2 rounded-lg shadow-xl"
                  />

                  <div className="text-gray-700 leading-relaxed lg:w-1/2">
                    <p>
                      Whether you're looking to modernize your space, enhance functionality, or breathe new life into existing structures through our comprehensive renovation works. With a proven track record of successful projects, we take pride in transforming spaces that exceed expectations while preserving their inherent charm and character.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Renovation Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Our Renovation Services
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                The beauty of renovation lies in its ability to turn dreams into reality, one wall at a time.
              </p>

              {/* Residential Renovations */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#001B3D] mb-6">Residential Renovations</h4>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Comprehensive renovations that enhance functionality, aesthetics, and comfort for homeowners.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Customization options to align with personal style preferences to meet modern living standards.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Structural repairs, roofing replacements, and energy-efficient upgrades for enhanced performance.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Commercial Renovations */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#001B3D] mb-6">Commercial Renovations</h4>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Strategic renovations that optimize productivity, efficiency, and employee satisfaction.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Retail space transformations, including storefront enhancements, interior redesign, and customer experience-focused renovations.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Hospitality industry renovations focused on creating inviting atmospheres and memorable guest experiences.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Industrial Renovations */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#001B3D] mb-6">Industrial Renovations</h4>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Infrastructure renovations that maximize storage capacity, operational efficiency, and logistical functionality.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Facility upgrades, equipment modernization, and productive plant optimizations for streamlined workflows.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Industrial infrastructure improvements for safety, compliance, and sustainability in industrial settings.
                    </p>
                  </motion.div>
                </div>
              </div>

            

           
            </motion.div>

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
                        alt={`Renovation ${index + 1}`}
                        className="w-full h-full object-cover"
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

            {/* Why Us Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="inline-block border-2 border-[#FF6B35] px-8 py-3 rounded-full">
                <span className="text-[#FF6B35] font-bold uppercase tracking-wider text-lg">Why Us?</span>
              </div>
            </motion.div>

            {/* Flawless and Reliable Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase text-center">
                Flawless and Reliable Process
              </h3>

              <p className="text-center text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mb-12">
                From concept to completion, we prioritize precision, excellence, and innovation in every aspect of our work. Our solutions meet the highest industry standards while fulfilling our clients' unique project requirements. Trust us to bring your structural needs to life.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#FF6B35] text-white px-12 py-4 rounded text-lg font-bold hover:bg-[#ff5722] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase"
                >
                  Get Your Free Quote Now !!
                </Link>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF6B35] hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h4 className="text-5xl font-bold text-[#FF6B35] mb-4">{step.number}</h4>
                    <h5 className="text-xl font-bold text-[#001B3D] mb-4 uppercase">{step.title}</h5>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
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

export default RenovationWorks