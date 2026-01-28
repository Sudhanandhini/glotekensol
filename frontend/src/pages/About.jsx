import { CheckCircle, Award, Users, Target, Eye, Clock, Shield, Lightbulb, Star, TrendingUp,  Building2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Handshake } from 'lucide-react'

import founder from '../assets/vinod-2.png'
import ScrollToTop from '../components/ScrollToTop';



// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <span ref={countRef}>{count}{suffix}</span>
}

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
      staggerChildren: 0.2
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

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[300px] bg-cover bg-center overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.8), rgba(0, 27, 61, 0.8)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')"
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
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl"
            >
              Building Excellence Since 1999
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
             
              <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-[#FF6B35] mb-3 text-sm uppercase tracking-wide font-semibold"
              >
                Who We Are
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-[#001B3D] mb-6 leading-tight"
              >
                Building Excellence Since 2025
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-700 mb-5 text-lg leading-relaxed"
              >
                Established in 2025, we are committed to delivering quality-driven engineering solutions built on trust, innovation, and professionalism. Our firm specializes in structural engineering design and detailing services, supporting projects across residential, commercial, industrial, and infrastructure sectors.
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-700 mb-5 text-lg leading-relaxed"
              >
                Bringing over <span className="font-bold text-[#FF6B35]">60 years of combined professional industry experience</span>, we are backed by deep technical expertise and industry knowledge.
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-700 text-lg leading-relaxed"
              >
                We work closely with clients, architects, and contractors to deliver safe, efficient, and code-compliant structural solutions. From concept design to detailed drawings and construction support, we focus on accuracy, reliability, and long-term performance.
              </motion.p>
            </motion.div>
            
          
        
             
            
        
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="relative"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800" 
                alt="Construction Site" 
                className="rounded-lg shadow-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-[#FF6B35] text-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-5xl font-bold mb-1">
                  <AnimatedCounter end={300} suffix="+" />
                </div>
                <div className="text-sm">Completed Projects</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    
      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-[#FF6B35] mb-3 text-sm uppercase tracking-wide font-semibold"
            >
              Our Foundation
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D] mb-4">
              What Drives Us Forward
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {/* Our Vision */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 30px 70px rgba(0, 27, 61, 0.15)" 
              }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative w-28 h-28 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Eye className="text-white" size={48} strokeWidth={2} />
              </motion.div>
              
              <h3 className="relative text-2xl font-bold text-[#001B3D] mb-6 uppercase tracking-wide text-center">
                Our Vision
              </h3>
              <p className="relative text-gray-700 leading-relaxed text-base text-center">
                To become a trusted engineering partner recognized for technical excellence, innovation, and dependable structural solutions that shape safe and sustainable built environments.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 30px 70px rgba(0, 27, 61, 0.15)" 
              }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative w-28 h-28 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Target className="text-white" size={48} strokeWidth={2} />
              </motion.div>
              
              <h3 className="relative text-2xl font-bold text-[#001B3D] mb-6 uppercase tracking-wide text-center">
                Our Mission
              </h3>
              <ul className="relative space-y-4">
                {[
                  'To deliver high-quality structural engineering design and detailing services that meet international standards and project-specific requirements',
                  'To provide practical, economical, and constructible engineering solutions',
                  'To build long-term relationships through integrity, transparency, and consistent performance',
                  'To continuously improve through learning, technology, and engineering best practices'
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Values */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 30px 70px rgba(0, 27, 61, 0.15)" 
              }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative w-28 h-28 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Star className="text-white" size={48} strokeWidth={2} fill="white" />
              </motion.div>
              
              <h3 className="relative text-2xl font-bold text-[#001B3D] mb-6 uppercase tracking-wide text-center">
                Our Values
              </h3>
              <ul className="relative space-y-4">
                {[
                  { title: 'Quality & Safety', desc: 'We prioritize structural safety, accuracy, and compliance in every project' },
                  { title: 'Integrity', desc: 'We operate with honesty, accountability, and professional ethics' },
                  { title: 'Innovation', desc: 'We embrace modern tools, technologies, and creative engineering approaches' },
                  { title: 'Collaboration', desc: 'We work closely with clients and project stakeholders for seamless coordination' },
                  { title: 'Reliability', desc: 'We deliver on our commitments with consistency and precision' }
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#001B3D] font-semibold text-sm">{value.title}</span>
                      <span className="text-gray-600 text-sm"> – {value.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Experience Section */}
 
      {/* Why Choose Us */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">What Makes Us Different</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Award className="text-[#FF6B35]" size={48} />,
                title: 'Award Winning',
                desc: 'Recognized industry leader with multiple awards for excellence in construction and project management.'
              },
              {
                icon: <Users className="text-[#FF6B35]" size={48} />,
                title: 'Expert Team',
                desc: 'Our team consists of highly skilled professionals with extensive experience in all aspects of construction.'
              },
              {
                icon: <CheckCircle className="text-[#FF6B35]" size={48} />,
                title: 'Quality Assurance',
                desc: 'Rigorous quality control processes ensure every project meets our exacting standards and client requirements.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 hover:shadow-xl transition-all rounded-lg bg-gray-50"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#001B3D] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Stats with Animated Counters */}
      <section className="py-16 bg-[#FF6B35] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white"
          >
            {[
              { end: 300, suffix: '+', label: 'Projects Completed' },
            
              { end: 80, suffix: '+', label: 'Happy Clients' },
              { end: 50, suffix: '+', label: 'Expert Team' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Our Team</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">Meet Our Experts</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { name: 'John Anderson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
              { name: 'Sarah Williams', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
              { name: 'Michael Chen', role: 'Chief Engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
              { name: 'Emily Davis', role: 'Architect', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#FF6B35]/20"
                  ></motion.div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#001B3D] mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}


     

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
              className="relative order-2 lg:order-1"
            >
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800" 
                alt="Engineering Expertise" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="order-1 lg:order-2"
            >
              <motion.p 
                variants={fadeInUp}
                className="text-[#FF6B35] mb-3 text-sm uppercase tracking-wide font-semibold"
              >
                Our Services
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-[#001B3D] mb-6 leading-tight"
              >
                Our Expertise
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-700 mb-8 text-lg leading-relaxed"
              >
                We offer end-to-end structural engineering services, including:
              </motion.p>

              <motion.div 
                variants={staggerContainer}
                className="space-y-4 mb-8"
              >
                {[
                  'Structural analysis and design',
                  'RCC and steel structure design',
                  'Reinforcement detailing and shop drawings',
                  'Structural modelling and optimization',
                  'Design review and value engineering',
                  'Construction-stage engineering support'
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start group"
                  >
                    <CheckCircle className="text-[#FF6B35] mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={22} />
                    <p className="text-gray-700 text-lg">{text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p 
                variants={fadeInUp}
                className="text-gray-700 text-base leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-[#FF6B35]"
              >
                Our experience spans residential buildings, commercial developments, industrial facilities, warehouses, and infrastructure projects, with solutions tailored to meet applicable codes and site conditions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#001B3D] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#FF6B35] mb-3 text-sm uppercase tracking-wide font-semibold">Why Partner With Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Award className="text-[#FF6B35]" size={48} />,
                title: 'Technical Excellence',
                desc: 'Our designs are driven by sound engineering principles, detailed analysis, and strict compliance with applicable codes and standards.'
              },
              {
                icon: <CheckCircle className="text-[#FF6B35]" size={48} />,
                title: 'Quality-Driven Approach',
                desc: 'We focus on accuracy, constructability, and long-term performance in every design and drawing we deliver.'
              },
              {
                icon: <Users className="text-[#FF6B35]" size={48} />,
                title: 'Experienced Engineering Team',
                desc: 'Backed by decades of combined industry experience, our team brings practical knowledge and reliable solutions to every project.'
              },
              {
                icon: <Target className="text-[#FF6B35]" size={48} />,
                title: 'Client-Centric Collaboration',
                desc: 'We work closely with clients, architects, and contractors to ensure clear communication and smooth project execution.'
              },
              {
                icon: <Clock className="text-[#FF6B35]" size={48} />,
                title: 'Timely & Reliable Delivery',
                desc: 'We understand project schedules and are committed to delivering on time without compromising quality.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, boxShadow: "0 25px 60px rgba(255, 107, 53, 0.3)" }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       {/* Founder's Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#FF6B35] mb-3 text-sm uppercase tracking-wide font-semibold">Message</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D]">Founder's Message</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">

  {/* Left Side - Image (1/3 on large screens) */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInLeft}
    className="relative lg:col-span-1"
  >
    <motion.img 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      src={founder}
      alt="Founder" 
      className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
    />
    {/* <div className="absolute -bottom-6 -right-6 bg-[#FF6B35] text-white p-8 rounded-2xl shadow-2xl">
      <div className="text-5xl font-bold mb-2">2025</div>
      <div className="text-lg font-medium">Established</div>
    </div> */}
  </motion.div>

  {/* Right Side - Message (2/3 on large screens) */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInRight}
    className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 rounded-3xl shadow-2xl border-l-8 border-[#FF6B35] relative lg:col-span-2"
  >
    <div className="absolute top-6 left-6 text-[#FF6B35]/10 text-8xl font-serif leading-none">"</div>
    
    <div className="relative z-10 space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
      <p>
        Our journey began in 2025 with a simple yet powerful belief: great engineering has the ability to shape safer, stronger, and more sustainable communities.
      </p>
      <p>
        This company was founded with a passion for excellence in structural engineering and a commitment to doing things the right way—through integrity, innovation, and attention to detail. Backed by decades of combined industry experience, we bring not only technical knowledge but also real-world insight into every project we undertake.
      </p>
      <p>
        We believe engineering is more than design—it is responsibility. Every structure we design carries trust, safety, and long-term value for those who depend on it.
      </p>
      <p>
        Our focus has always been on building meaningful partnerships, delivering quality without compromise, and continuously evolving with modern engineering practices.
      </p>
      <p className="font-semibold text-[#001B3D]">
        As we grow, our vision remains clear: to create lasting impact through reliable engineering solutions and to contribute positively to the built environment of tomorrow.
      </p>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-200">
      <p className="text-[#001B3D] font-bold text-xl">— Founder</p>
    </div>
  </motion.div>
</div>

        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#FF6B35] mb-3 text-sm uppercase tracking-wide font-semibold">Our Differentiators</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D]">What Makes Us Different</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <Building2 className="text-[#FF6B35]" size={44} />,
                title: 'Design with Buildability in Mind',
                desc: 'Our solutions are practical, economical, and easy to execute on site.'
              },
              {
                icon: <Target className="text-[#FF6B35]" size={44} />,
                title: 'Attention to Detail',
                desc: 'From analysis models to reinforcement detailing, precision is at the core of our work.'
              },
              {
                icon: <Lightbulb className="text-[#FF6B35]" size={44} />,
                title: 'Modern Tools & Technology',
                desc: 'We utilize advanced structural analysis and detailing software to deliver efficient and optimized designs.'
              },
              {
                icon: <TrendingUp className="text-[#FF6B35]" size={44} />,
                title: 'Flexible & Scalable Services',
                desc: 'Whether it\'s a small residential project or a large commercial development, we adapt to project needs.'
              },
              {
                icon: <Shield className="text-[#FF6B35]" size={44} />,
                title: 'Strong Professional Ethics',
                desc: 'We operate with integrity, transparency, and accountability in every engagement.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 50px rgba(255, 107, 53, 0.15)" 
                }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#001B3D] mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder's Message Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-3 text-sm uppercase tracking-wide font-semibold">Message</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D]">Founder's Message</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-14 rounded-3xl shadow-2xl border-l-8 border-[#FF6B35] relative"
          >
            <div className="absolute top-8 left-8 text-[#FF6B35]/10 text-9xl font-serif leading-none">"</div>
            
            <div className="relative z-10 space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Our journey began in 2025 with a simple yet powerful belief: great engineering has the ability to shape safer, stronger, and more sustainable communities.
              </p>
              <p>
                This company was founded with a passion for excellence in structural engineering and a commitment to doing things the right way—through integrity, innovation, and attention to detail. Backed by decades of combined industry experience, we bring not only technical knowledge but also real-world insight into every project we undertake.
              </p>
              <p>
                We believe engineering is more than design—it is responsibility. Every structure we design carries trust, safety, and long-term value for those who depend on it.
              </p>
              <p>
                Our focus has always been on building meaningful partnerships, delivering quality without compromise, and continuously evolving with modern engineering practices.
              </p>
              <p className="font-semibold text-[#001B3D]">
                As we grow, our vision remains clear: to create lasting impact through reliable engineering solutions and to contribute positively to the built environment of tomorrow.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-[#001B3D] font-bold text-xl">— Founder</p>
            </div>
          </motion.div>
        </div>
      </section> */}





 <ScrollToTop />

    </div>
  )
}

export default About