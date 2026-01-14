import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

import img1 from "../assets/c1.jpg"
import img2 from "../assets/c2.jpg"
import img3 from "../assets/c3.jpg"
import img4 from "../assets/c4.jpg"
import img5 from "../assets/c5.jpg"
import img6 from "../assets/c6.jpg"
import img7 from "../assets/c7.jpg"
import img8 from "../assets/c8.jpg"
import img9 from "../assets/c9.jpg"
import img10 from "../assets/c10.jpg"

import ScrollToTop from '../components/ScrollToTop';



const StructuralSteelDetailing = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    img1, img2, img3, img4, img5,  img8,  
  ]

  const technicalDrawings = [
    img6, img7,
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
    'Point Cloud 3D Modelling'
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
              Structural Steel Detailing<br />Services
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
            
            {/* Precision and Excellence Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase">
                Structural Steel Detailing: Precision and Excellence
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={img10 }
                    alt="Structural Steel Detailing"
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
                    <p>
                      Structural steel detailing plays a pivotal role in construction projects, ensuring accuracy and precision during the fabrication and erection of steel structures. At Global Tech Engineering Solutions, we specialize in providing top-notch steel detailing services tailored to meet the unique requirements of each project.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* What Does Structural Steel Detailing Involve */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                What Does Structural Steel Detailing Involve?
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Intricate Drawings:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our specialized structural steel detailing professionals create intricate drawings of steel structures, encompassing both fixed installations and precise measurements, serving as the blueprint for the entire structure.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Critical Role:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      When engineers devise plans for buildings or construction ventures, spanning bridges to commercial complexes, structural steel detailing brings these visions to life.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">TEKLA Software Expertise:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We collaborate with skilled Steel Detailing professionals proficient in utilizing Tekla software, California, Texas, capable- Structural Steel Detailing Services and meticulously crafted Steel Fabrication drawings.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Technical Drawings Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {technicalDrawings.map((drawing, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 p-4 rounded-lg shadow-lg"
                  >
                    <img
                      src={drawing}
                      alt={`Technical Drawing ${index + 1}`}
                      className="w-full rounded"
                    />
                  </motion.div>
                ))}
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

            {/* What Sets Us Apart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                What Sets Us Apart
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Experienced Team:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our architects and draftsmen excel with competitive pricing, making us a preferred choice in the industry.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Dedicated Team:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      As supported by a dedicated team, we excel in Structural Steel Design and Construction. Our specialized services include bonfide shop drawings and shop fabrication.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Meticulous Attention:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our architects and draftsmen pay meticulous attention to various steel structure detailing tasks. From your shop drawings to connection beam shop drawings and comprehensive shop drawings, we execute them flawlessly using TEKLA software.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Meticulous Attention:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our architects and draftsmen pay meticulous attention to various steel structure detailing tasks. From your shop drawings to connection beam shop drawings and comprehensive shop drawings, we execute them flawlessly using TEKLA software.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-10"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#FF6B35] text-white px-12 py-4 rounded text-lg font-bold hover:bg-[#ff5722] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase"
                >
                  Get Your Free Quote Now !!
                </Link>
              </motion.div>
            </motion.div>

            {/* Precision and Excellence - Second Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 bg-gradient-to-b from-blue-50 to-white py-16 -mx-4 px-4 rounded-lg"
            >
              <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-12 uppercase text-center">
                  Structural Steel Detailing: Precision and Excellence
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-[#001B3D] mb-4 uppercase">Project Scope</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Whether it's a commercial, industrial, or residential project, our steel detailing services are tailored to meet your specific needs, transforming concepts into reality.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-[#001B3D] mb-4 uppercase">Our Approach</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We streamline project delivery by offering integrated services that ensure seamless coordination. With our team of engineers, we provide:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-bold text-[#001B3D]">Steel Connection Design:</h5>
                            <p className="text-gray-700">We ensure robust connections for structural stability.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-bold text-[#001B3D]">Structural Engineering (QA/QC Services):</h5>
                            <p className="text-gray-700">Our experts provide guidance throughout the project lifecycle.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-bold text-[#001B3D]">Steel Stair Design:</h5>
                            <p className="text-gray-700">We specialize in crafting safe and functional staircases.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-xl"
                  >
                    <img
                      src={img9}
                      alt="Technical Drawing"
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
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

export default StructuralSteelDetailing