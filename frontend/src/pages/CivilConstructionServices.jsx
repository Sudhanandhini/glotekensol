import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'


import ScrollToTop from '../components/ScrollToTop';

import img1 from "../assets/i1.jpg"
import img2 from "../assets/i2.jpg"
import img3 from "../assets/i3.webp"
import img4 from "../assets/i4.jpg"

const CivilConstructionServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    img2, img3, img4
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
      description: 'Our team comprises seasoned engineers, architects, and construction professionals with extensive knowledge. This proven track record of delivering successful and construction projects.'
    },
    {
      number: '02.',
      title: 'INNOVATION',
      description: 'We leverage cutting-edge technologies, methodologies, and sustainable design solutions to deliver projects that exceed client expectations.'
    },
    {
      number: '03.',
      title: 'QUALITY ASSURANCE',
      description: 'We maintain quality craftsmanship and meticulous attention to detail throughout the construction process.'
    },
    {
      number: '04.',
      title: 'CLIENT-CENTRIC APPROACH',
      description: 'We collaborate closely with clients, architects, contractors, and stakeholders, fostering open communication, transparency, and alignment with project goals and timelines.'
    },
    {
      number: '05.',
      title: 'ATTENTION TO DETAIL',
      description: 'We pay attention to every detail from initial planning and design to construction and completion, we ensure quality and precision at every stage.'
    },
    {
      number: '06.',
      title: 'CLIENT SATISFACTION',
      description: 'Our ultimate goal is client satisfaction, and we strive to exceed expectations by delivering projects on time, within budget, and to the highest standards of quality.'
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
              Civil Construction Services
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
            
            {/* Civil Construction Services Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-8 uppercase">
                Civil Construction Services
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
                    alt="Construction Building"
                    className="w-full lg:w-1/2 rounded-lg shadow-xl"
                  />

                  <div className="text-gray-700 leading-relaxed lg:w-1/2">
                    <p>
                      At Global Tech Engineering Solutions, we provide comprehensive design and analysis services for both steel and reinforced concrete structures. Our commitment to excellence ensures compliance with a range of international standards, including BIS, AISC, BS, CISC, Eurocode, and others. Here's a glimpse into the key aspects of our civil construction services.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Commitment to Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Our Commitment to Excellence
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Quality Craftsmanship:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We prioritize quality in every aspect of every project, ensuring durability, functionality, and aesthetic appeal in our constructions.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Innovative Solutions:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Embracing the latest technologies and construction methodologies, we offer innovative solutions tailored to meet unique requirements and challenges.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Client-Centric Approach:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our client-centric approach involves collaborating closely with stakeholders to understand their vision, needs, preferences, and goals, ensuring their satisfaction from concept to completion.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Diverse Sector Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Diverse Sector Expertise
              </h3>
              
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  We cater to diverse sectors, offering specialized construction services well-tailored to the unique needs of each industry.
                </p>
                <p>
                  Our diverse skills equip us with the expertise to handle projects, we create living spaces that reflect our clients' lifestyles and vision.
                </p>
              </div>

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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Residential Buildings:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our construction services span various types of residential properties, including offices, retail spaces, hospitality venues, healthcare facilities, educational institutions, and business centers.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Industrial Facilities:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We have specialized in constructing warehouses, manufacturing facilities, distribution centers, and logistics hubs, optimizing operations and growth.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Residential and Commercial Images */}
              <div className="grid grid-cols-2 gap-6 my-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400"
                    alt="Residential Building"
                    className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400"
                    alt="Commercial Building"
                    className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Residential Building */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Residential Building
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                For residential projects, we offer comprehensive construction services aimed at creating comfortable, functional, and aesthetically pleasing living spaces with structural integrity. Our services include:
              </p>

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
                    Custom design and architecture reflecting individual preferences, lifestyle needs and budget considerations.
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
                    Structural engineering services ensure stable and safe construction in detail.
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
                    Quality construction practices, including foundation work, framing, roofing, electrical, plumbing, and HVAC installations, project management, ensuring smooth execution, such as apartments, townhouses, and townhomes, emphasizing affordable yet high-quality construction.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Renovation and remodeling: we offer renovation and refurbishment services to enhance and transform existing residential or commercial properties incorporating structural upgrades, modernizing, and aesthetic improvements.
                  </p>
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

            {/* Commercial Building */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Commercial Building
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In the commercial sector, we excel in delivering commercial building projects that combine functionality, sustainability, and design excellence, ranging from office buildings and retail spaces to hotels and healthcare facilities.
              </p>

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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Office Buildings:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We design and construct modern office spaces that promote productivity, collaboration, and employee well-being. Integrating innovative design elements and sustainable features.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Retail Spaces:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our expertise extends to constructing retail establishments, from shopping malls and outlets to specialized stores and boutiques, with strategic planning, efficient space utilization, and customer-centric design.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Hospitality Facilities:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Incorporating hotels, resorts, restaurants, and entertainment venues, we specialize in creating inviting, functional, and operationally efficient.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Industrial Construction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-[#001B3D] mb-8 uppercase">
                Industrial Construction
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We undertake industrial construction projects focused on efficiency, safety, and regulatory compliance, including warehouses, factories, and specialized construction solutions tailored to meet the unique demands of industrial facilities. Our services include:
              </p>

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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Warehouse and Distribution:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We design and construct efficient and flexible warehouses for both storage and logistics operations.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Manufacturing Facilities:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our team constructs manufacturing plants and facilities that support efficient production processes, workflow optimization, and compliance with industry standards.
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
                    <h4 className="text-xl font-bold text-[#001B3D] mb-2">Infrastructure Structures:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We undertake infrastructure projects such as bridges, dams, water treatment plants, power plants, airports, seaports, and infrastructure projects, leveraging our technical prowess and industry knowledge.
                    </p>
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
                        alt={`Construction ${index + 1}`}
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

            {/* Why Choose Us Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="inline-block border-2 border-[#FF6B35] px-8 py-3 rounded-full">
                <span className="text-[#FF6B35] font-bold uppercase tracking-wider text-lg">Why Choose Us?</span>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
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

export default CivilConstructionServices