import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'


import ScrollToTop from '../components/ScrollToTop';


import img1 from "../assets/g1.jpg"
import img2 from "../assets/g2.jpg"
import img3 from "../assets/g3.jpg"
import img4 from "../assets/g4.jpg"



const RebarQuantityEstimation = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
 img2, img3, img4
  ]

  const projectImages = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
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

  const benefits = [
    {
      number: '01.',
      title: 'COST SAVINGS',
      description: 'Precise quantity estimation helps in optimizing material usage, reducing waste, and lowering overall construction costs.'
    },
    {
      number: '02.',
      title: 'EFFICIENCY',
      description: 'Precise estimation and planning improve project efficiency, reduce delays, and streamline construction processes.'
    },
    {
      number: '03.',
      title: 'QUALITY ASSURANCE',
      description: 'Ensures the correct quantity of rebar and reinforcement materials maintains structural integrity, durability, and safety of buildings and structures.'
    },
    {
      number: '04.',
      title: 'COMPLIANCE',
      description: 'Quantity estimation services ensure compliance with design standards, codes, and regulations, avoiding costly rework or non-compliance issues.'
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
              Rebar/Reinforcement Quantity<br />Estimation
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
            
            {/* Reinforcement Quantity Estimation Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase">
                Reinforcement Quantity Estimation
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
                    src={img1}
                    alt="Quantity Estimation Tools"
                    className="w-full lg:w-1/2 rounded-lg shadow-xl"
                  />

                  <div className="text-gray-700 leading-relaxed lg:w-1/2">
                    <p className="mb-4">
                      Accurate estimation of rebar/reinforcement quantities is essential for successful structural projects. At Global Tech Engineering Solutions, we offer advanced reinforcement estimation services that enable precise planning, cost control, and efficient resource allocation, and optimal utilization of materials.
                    </p>
                    <p>
                      Our reinforcement quantity estimation services involve the process of calculating and determining the amount of reinforcing steel (rebar) required for reinforced concrete structures in construction projects. This estimation is crucial in structural engineering and construction to ensure that adequate strength, durability, and safety are achieved.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Our Process
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Reviewing Structural Drawings:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Engineers review the structural drawings, plans, and specifications provided for the project to understand the layout and design requirements.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Identifying Reinforcement Elements:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our team identifies the various reinforcement elements required, including rebars, stirrups, ties, meshes, and other steel components used in concrete structures.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Quantity Take-off:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Determine the quantities of each reinforcement element needed based on factors such as structural codes, design specifications, and concrete cover.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Material Optimization:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our team of professionals' reinforcement estimation also considers factors like splicing lengths, overlaps, bend radii, development to ensure structural integrity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Software and Tools:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Advanced software and tools are often used to streamline the estimation process, improve accuracy, and generate detailed reports.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Collaboration:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Effective communication and collaboration between structural engineers and configurations to minimize material waste, reduce costs, and meet project budget constraints.
                    </p>
                  </div>
                </motion.div>
              </div>

             
            </motion.div>

            {/* IT Includes Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                IT Includes
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Detailed Take-offs:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We conduct detailed quantity take-offs of rebar and reinforcement materials from structural drawings and specifications, accounting for sizes, lengths, shapes, and quantities required for construction.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Advanced Technology:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We leverage advanced software tools and technology for accurate quantity calculations, material optimization, and improving overall project efficiency.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Comprehensive Reports:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our services include detailed reports based on the estimated quantities of materials required for each element. This aids in material ordering and procurement strategies.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Compliance:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We ensure that our estimation strategies to minimize material wastage requirements, while maintaining structural integrity and meeting design requirements.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">On-site Verification:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our services may include on-site verification of rebar and reinforcement quantities during construction phases to ensure compliance with design specifications and minimize deviations.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
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
                        alt={`Estimation ${index + 1}`}
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

            {/* Benefits Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="inline-block border-2 border-[#FF6B35] px-8 py-3 rounded-full">
                <span className="text-[#FF6B35] font-bold uppercase tracking-wider text-lg">Benefits</span>
              </div>
            </motion.div>

            {/* Benefits of Rebar Quantity Estimation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-12 uppercase text-center">
                Benefits of Rebarquantity Estimation
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF6B35] hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h4 className="text-5xl font-bold text-[#FF6B35] mb-4">{benefit.number}</h4>
                    <h5 className="text-xl font-bold text-[#001B3D] mb-4 uppercase">{benefit.title}</h5>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
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

export default RebarQuantityEstimation