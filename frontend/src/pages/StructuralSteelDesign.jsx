import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'


import img1 from "../assets/b1.jpg"
import img2 from "../assets/b2.jpg"
import img3 from "../assets/b3.jpg"
import img4 from "../assets/b4.jpg"
import img5 from "../assets/b5.jpg"

import ScrollToTop from '../components/ScrollToTop';

const StructuralSteelDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
   img2, img3, img4, img5
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
    'Patent Consult 3D Simulating'
  ]

  const structures = [
    'Residential Structural Design Analysis',
    'Industrial Structures',
    'Commercial Building Structures',
    'Connection Design & Detailing',
    'Structural Analysis Reports',
    'Structural Calculations',
    'Foundation Design',
    'Bar Bending Schedules',
    'Framing Plans',
    'Construction Sketches',
    'Plumblines',
    'Site blocks, Laddders, Tanks, etc.'
  ]

  const whyChooseUs = [
    {
      number: '01.',
      title: 'COMMITMENT TO EXCELLENCE',
      description: 'At Global Tech Engineering Solutions, we are committed to excellence in structural steel design and analysis. Whether you\'re planning a new construction, renovation, or retrofit, we have the integrity of existing structures, we are here to provide the expertise and solutions you need.'
    },
    {
      number: '02.',
      title: 'CODE COMPLIANCE',
      description: 'Our designs are meticulously performed to meet AISC, CISC, IS, and other codes with the latest structural engineering and material specific design codes and standards.'
    },
    {
      number: '03.',
      title: 'EXPERTISE',
      description: 'Our team boasts years of experience, accuracy, and lead time and money for Contractors.'
    },
    {
      number: '04.',
      title: 'CUSTOMER SATISFACTION',
      description: 'We believe in the value of a service or product being determined by the satisfaction and benefits perceived by clients. For this reason, we give utmost importance to customer satisfaction and build long-term business relationships.'
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
              Structural Steel Design and<br />Analysis
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
            
            {/* Expert Solutions Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase">
                Expert Solutions For Your Construction Needs
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
                    alt="Structural Engineering"
                    className="w-full rounded-lg shadow-xl"
                  />
                  
                  
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Get A Free Quotes Form */}
                   <div className="mt-6 text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      Welcome to <span className="font-bold text-[#001B3D]">Global Tech Engineering Solutions</span>, your premier destination for structural <span className="font-bold">steel design and analysis services</span>. Our team of skilled engineers specializes in crafting innovative solutions tailored to meet your specific construction requirements. With our expertise in structural engineering and cutting-edge technology, we ensure that every project we undertake is executed with precision and excellence.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Our Structural Steel Engineering Services
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Headquartered in Delaware, the company offers a wide range of integrating robust, inventive structural steel design and analysis services spanning diverse sectors — constructing commercial buildings, industrial facilities, bridges, or residential complexes, we have the knowledge and experience to bring your vision to life. Our team is developing innovative solutions from concept to completion using state-of-the-art technology and practices.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-bold">Structural Analysis:</span> Our structural analysis services help assess the performance and behavior of steel structures under various loading conditions. Using advanced software and modeling techniques, we evaluate factors such as stress distribution, deflection, and stability to optimize designs and ensure compliance with relevant building codes and regulations.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-bold">Design Optimization:</span> We excel in optimizing structural designs, through careful analysis and innovative design solutions. Our team leverages our expertise to maximize efficiency, minimize material usage, and enhance overall performance.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold">Retrofitting and Rehabilitation:</span> Our team provides retrofitting and renovation services to strengthen the structure's integrity and extend its existing steel structures; whether you're looking to address structural deficiencies, accommodate changes in use or improve performance to meet modern standards and codes, we have the skills and experience to deliver cost-effective solutions.
                    </p>
                  </motion.div>

                  {/* Images Grid */}
               

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                  >
                    <Link
                      to="/contact"
                      className="inline-block bg-[#FF6B35] text-white px-12 py-4 rounded text-lg font-bold hover:bg-[#ff5722] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase"
                    >
                      Get Your Free Quote Now !!
                    </Link>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Others Services */}
                  {/* <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg shadow-lg"
                  >
                    <h4 className="text-xl font-bold text-white bg-[#001B3D] py-3 px-6 -mx-6 -mt-6 mb-6 rounded-t-lg uppercase">
                      Others Services
                    </h4>
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-gray-700 hover:text-[#FF6B35] transition-colors cursor-pointer"
                        >
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full flex-shrink-0"></div>
                          <span className="font-medium">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div> */}

                  {/* Engineering Structures */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg shadow-lg"
                  >
                    <h4 className="text-xl font-bold text-white bg-[#001B3D] py-3 px-6 -mx-6 -mt-6 mb-6 rounded-t-lg uppercase">
                      Engineering Structures Offered By Us
                    </h4>
                    <ul className="space-y-3">
                      {structures.map((structure, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{structure}</span>
                        </motion.li>
                      ))}
                    </ul>
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
                        alt={`Engineering Drawing ${index + 1}`}
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

            {/* Why Choose Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <div className="inline-block border-2 border-[#FF6B35] px-8 py-2 rounded-full mb-4">
                  <span className="text-[#FF6B35] font-bold uppercase tracking-wider">Why Choose Us?</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF6B35] hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h4 className="text-5xl font-bold text-[#FF6B35] mb-4">{item.number}</h4>
                    <h5 className="text-xl font-bold text-[#001B3D] mb-4 uppercase">{item.title}</h5>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#FF6B35] text-white px-12 py-4 rounded text-lg font-bold hover:bg-[#ff5722] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase"
                >
                  Get Your Free Quote Now !!
                </Link>
              </motion.div>
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

export default StructuralSteelDesign