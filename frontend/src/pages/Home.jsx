import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { HardHat, Wrench, Box, Blocks, CheckSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600",
      title: "We Are Best Builders",
      subtitle: "Leading Construction",
      description: "We have been providing top-quality construction services for over two decades. Your trusted partner in building excellence."
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600",
      title: "Building Your Dreams",
      subtitle: "Expert Construction",
      description: "Transforming visions into reality with precision engineering and innovative construction solutions."
    },
    {
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600",
      title: "Quality Craftsmanship",
      subtitle: "Professional Services",
      description: "Delivering excellence in every project with attention to detail and commitment to quality."
    }
  ]

  const whatWeDoServices = [
    {
      icon: <HardHat className="w-12 h-12" />,
      title: 'Structural steel connection design',
      description: 'We design safe, efficient, and code-compliant steel connections that ensure strength, stability, and constructability for all types of projects.'
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Structural steel detailing',
      description: 'Our detailed fabrication drawings provide accurate shop and erection details to support smooth manufacturing and on-site installation.'
    },
    {
      icon: <Box className="w-12 h-12" />,
      title: 'Reinforcement 3D modelling',
      description: 'We create precise 3D reinforcement models that improve coordination, reduce errors, and enhance project visualization.'
    },
    {
      icon: <Blocks className="w-12 h-12" />,
      title: 'Reinforcement detailing',
      description: 'Our reinforcement detailing services deliver clear, accurate drawings that ensure proper placement, compliance, and efficient construction.'
    }
  ]


  const features = [
    'Structural Steel Connection Design',
    'Structural Steel Detailing',
    'Reinforcement 3D Modelling',
    'REBAR Detailing Solutions',
    'AISC Code Compliance',
    'On-time Project Delivery'
  ]

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 27, 61, 0.7), rgba(0, 27, 61, 0.7)), url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white max-w-2xl"
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-5xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={index === currentSlide ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg mb-8 text-gray-200"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="bg-[#FF6B35] text-white px-8 py-3 rounded hover:bg-[#ff5722] transition-all duration-300 font-medium hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Get Started
                  </Link>
                  <button className="bg-white text-[#001B3D] px-8 py-3 rounded hover:bg-gray-100 transition-all duration-300 font-medium flex items-center hover:shadow-lg transform hover:-translate-y-1">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform">
                      <Play size={16} className="ml-1" />
                    </div>
                    How We Work
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-[#FF6B35]'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#FF6B35] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start justify-between mb-12"
          >
            <div className="text-white mb-6 md:mb-0">
              <p className="text-sm font-semibold tracking-wider mb-2">WHAT WE DO?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D]">We Work Creatively.</h2>
            </div>
            <Link
              to="/services"
              className="bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition-all duration-300 font-medium flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
            >
              Discover More
              <span>→</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-2xl ${
                  index === 3 ? 'bg-[#001B3D] hover:bg-[#FF6B35]' : 'bg-white hover:bg-[#001B3D]'
                }`}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`mb-6 transition-all duration-300 transform group-hover:scale-110 ${
                      index === 3 ? 'text-white group-hover:text-[#FF6B35]' : 'text-[#FF6B35] group-hover:text-white'
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      index === 3 ? 'text-white group-hover:text-[#001B3D]' : 'text-[#FF6B35] group-hover:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm mb-6 transition-colors duration-300 ${
                      index === 3 ? 'text-white group-hover:text-gray-700' : 'text-gray-700 group-hover:text-white'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Button */}
                  <Link
                    to="/services"
                    className={`inline-block px-6 py-2.5 rounded font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                      index === 3
                        ? 'bg-[#FF6B35] text-white hover:bg-white hover:text-[#FF6B35]'
                        : 'bg-[#FF6B35] text-white group-hover:bg-white group-hover:text-[#FF6B35]'
                    }`}
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
                alt="Blueprint"
                className="rounded-lg shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-[#FF6B35] text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold">2+</div>
                <div className="text-sm">Years Experience</div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">About Company</p>
              <h2 className="text-4xl font-bold text-[#001B3D] mb-4">
                World's Largest And Trusted Construction Company
              </h2>
              <p className="text-gray-600 mb-6">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Professional and experienced construction team with decades of expertise.',
                  'Quality materials and modern construction techniques for lasting results.',
                  'On-time project delivery and comprehensive customer support.'
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{text}</p>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition-all duration-300 font-medium inline-block hover:shadow-lg transform hover:-translate-y-1"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Orange Content */}
        <div className="bg-[#FF6B35] text-white p-8 lg:p-16 flex items-center">
          <div >
            <p className="text-sm uppercase tracking-wider mb-4 font-semibold">Who We Are</p>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#001B3D] mb-6 leading-tight">
              10+ Years Of Professional Industry Experience.
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-white leading-relaxed">
                <strong>WELCOME TO GTES</strong>
              </p>
              <p className="text-white leading-relaxed">
                GTES was established in 2023 as a structural engineering design and detailing company. 
                We provide Structural Design & Detailing services for all kinds of structures in Imperial 
                as well as Metric units complying with AISC, Canadian, and Middle-East Standards.
              </p>
              <p className="text-white leading-relaxed">
                We at GTES provide total Steel Detailing & REBAR Detailing solutions to our valued customers 
                worldwide and assist them in creating outsourcing strategies to build long-term relationships 
                and harness the power of outsourcing efficiently.
              </p>
              <p className="text-white leading-relaxed">
                Our Expert team of Structural Engineers, Tekla Modelers, Checkers, and Steel detailers has 
                decades of experience working with AISC codes to execute various Industrial, Commercial buildings 
                (Small, mid, and high-rise structures), Residential buildings, Super Markets, Malls, Airports, 
                and Miscellaneous projects (Stairs, Handrails, Ladders, Canopy, Grating Platforms, etc.) on the 
                expected turnaround time and per your specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckSquare className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition-all duration-300 font-medium"
            >
              Read More
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right - Fixed Background Image */}
        <div
          className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200')`,
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Play Button */}
          <div className="text-center z-10">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform mb-6 mx-auto">
              <Play className="w-8 h-8 text-[#FF6B35] ml-1" fill="#FF6B35" />
            </button>
            <div className="text-white max-w-md mx-auto px-4">
              <p className="text-lg leading-relaxed">
                There are many variations of passages of Lorem Ipsum available majority have suffered alteration.
              </p>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white/20 rounded-full"></div>
        </div>
      </div>
    </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#001B3D] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '25+', label: 'Years Experience' },
              { number: '350+', label: 'Happy Clients' },
              { number: '50+', label: 'Expert Team' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl font-bold text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Our Services</p>
            <h2 className="text-4xl font-bold text-[#001B3D] mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive construction services for residential, commercial, and industrial projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600',
                title: 'Building Construction',
                desc: 'Complete building construction services from foundation to finishing.'
              },
              {
                img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600',
                title: 'Renovation & Remodeling',
                desc: 'Transform your existing space with our expert renovation services.'
              },
              {
                img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600',
                title: 'Architecture Design',
                desc: 'Innovative architectural designs that combine beauty and functionality.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm mb-3">{service.desc}</p>
                  <Link
                    to="/services"
                    className="text-[#FF6B35] font-medium flex items-center hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/services"
              className="bg-[#FF6B35] text-white px-8 py-3 rounded hover:bg-[#ff5722] transition-all duration-300 font-medium inline-block hover:shadow-lg transform hover:-translate-y-1"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF6B35]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-3xl font-bold mb-2">Ready to Start Your Project?</h3>
              <p className="text-white/90">Get in touch with us today for a free consultation and quote.</p>
            </div>
            <Link
              to="/contact"
              className="bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition-all duration-300 font-medium hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Testimonials</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'John Smith',
                role: 'Homeowner',
                text: 'Excellent work! The team was professional, timely, and the quality exceeded our expectations.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Business Owner',
                text: 'Outstanding service from start to finish. Our commercial project was completed on time and within budget.'
              },
              {
                name: 'Michael Brown',
                role: 'Property Developer',
                text: 'Highly recommend! Their expertise and attention to detail made our project a huge success.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-[#001B3D]">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home