import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

import ScrollToTop from '../components/ScrollToTop';

import img1 from "../assets/e1.jpg"
import img2 from "../assets/e2.jpg"
import img3 from "../assets/e3.jpg"
import img4 from "../assets/e4.jpg"



const RebarReinforcement3DModelling = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
 img2, img3, img4   
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

  const processSteps = [
    {
      number: '01.',
      title: 'EXPERTISE',
      description: 'Having a team of skilled engineers and detailers. Their extensive experience in structural modelling and analysis ensures high-quality, accurate, and reliable 3D models. Their deep knowledge of reinforced elements is essential for the overall integrity and durability of buildings.'
    },
    {
      number: '02.',
      title: 'EFFICIENCY',
      description: 'Streamlining the modelling process minimizes errors and accelerates utilizing efficient workflows and advanced software tools contributes to cost-effective solutions. This efficiency translates into faster project times and optimized project schedules.'
    },
    {
      number: '03.',
      title: 'ACCURACY',
      description: 'Delivering detailed and precision are paramount in structural engineering. Accurately representing reinforcement elements ensures that the final structures meet design specifications. Precision contributes to the safety and longevity of structures.'
    },
    {
      number: '04.',
      title: 'COLLABORATION',
      description: 'Integrating reinforcement models faster and smoother construction processes with other disciplines. Architects, engineers, and contractors can coordinate effectively, reducing errors and clashes. Effective communication enhances project outcomes.'
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
              Rebar/Reinforcement 3D Modelling
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
            
            {/* Rebar/Reinforcement 3D Modelling Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase">
                Rebar/Reinforcement 3D Modelling
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
                    alt="3D Modelling Construction"
                    className="w-full rounded-lg shadow-xl mb-6"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-700 leading-relaxed"
                >
                  <p>
                    At Global Tech Engineering Solutions, we specialize in advanced Rebar/Reinforcement 3D Modelling services that revolutionize the construction industry's approach to structural design. Our experienced team utilizes cutting-edge software and techniques to create detailed 3D models of reinforced elements, ensuring structural integrity and performance.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* What is Reinforcement 3D Modelling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                What is Reinforcement 3D Modelling?
              </h3>
              
              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="text-2xl font-bold text-[#FF6B35] flex-shrink-0">1.</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Increased Accuracy:</h4>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      3D modeling software allows for greater precision in placing and sizing rebar.
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>By creating a millimeter-perfect 3D model of the structure, rebar can be positioned with high accuracy.</li>
                      <li>Precise 3D models minimize errors that can occur with traditional 2D drawings, where existing elements must interface seamlessly with new rebar.</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="text-2xl font-bold text-[#FF6B35] flex-shrink-0">2.</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Improved Visualization:</h4>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Allows for better visualization of reinforcing steel:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Engineers and contractors can identify potential clashes or issues before construction begins.</li>
                      <li>Helps visualize complex areas like in the design, ensuring smoother placement of rebar.</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="text-2xl font-bold text-[#FF6B35] flex-shrink-0">3.</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Better Coordination:</h4>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Rebar clashes can be detected early using 3D models:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Collaborators can work together to address any conflicts, minimizing rework and delays.</li>
                      <li>The integration of rebar modelling with other disciplines (such as architecture, MEP, and structural design) enables a more disciplinary environment.</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="text-2xl font-bold text-[#FF6B35] flex-shrink-0">4.</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Reduced Waste:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Accurate 3D models lead to efficient material usage.</li>
                      <li>Contractors can estimate rebar placements, minimizing waste and associated costs.</li>
                    </ul>
                  </div>
                </motion.div>
              </div>

            
            </motion.div>

            {/* Our Rebar/Reinforcement 3D Modelling Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Our Rebar/Reinforcement 3D Modelling Services
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Detailed Modelling:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Creating highly detailed 3D models of rebar and reinforcement elements is crucial.</li>
                      <li>Accurate representation of bars, meshes, stirrups, and ties ensures precise placement within structural components.</li>
                      <li>These models serve as a visual guide for construction during construction, leading to better execution and fewer errors.</li>
                    </ul>
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Integration with BIM:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>3D provides a holistic view of the entire project, allowing stakeholders (architects, engineers, and contractors) to collaborate effectively.</li>
                      <li>Coordinating rebar detailing within the broader project context enhances overall efficiency.</li>
                    </ul>
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Clash Detection:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Identifying and resolving clashes or conflicts between reinforcement elements and other building components is critical.</li>
                      <li>Clash detection services save time, reduce rework, and prevent construction delays.</li>
                    </ul>
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Quantity Take-off:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Accurate quantity take-offs are essential for material procurement and cost estimation.</li>
                      <li>3D models provide precise calculations, optimizing resource allocation and budget planning.</li>
                    </ul>
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Visualization and Communication:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Realistic visualizations and simulations empower stakeholders.</li>
                      <li>Decision-makers can see how often reinforcement elements fit into the overall structure.</li>
                      <li>Effective communication between architects, engineers, and contractors ensures successful outcomes.</li>
                    </ul>
                  </div>
                </motion.div>
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
                        alt={`3D Modelling ${index + 1}`}
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
              <h3 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-12 uppercase text-center">
                Flawless and Reliable Process
              </h3>
              
              <p className="text-center text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mb-12">
                From concept to completion, we provide unmatched excellence and innovation in every aspect of our work. Our solutions meet the highest industry standards while fulfilling our clients' unique professional capabilities. That set us doing your structural needs to us.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
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

export default RebarReinforcement3DModelling