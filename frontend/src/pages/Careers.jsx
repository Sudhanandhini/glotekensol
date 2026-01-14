import { useState } from 'react'
import { Award, DollarSign, Shield, Upload, Briefcase, Clock, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

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

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    lookingFor: '',
    jobType: '',
    message: '',
    cv: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
    alert('Application submitted successfully! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      position: '',
      lookingFor: '',
      jobType: '',
      message: '',
      cv: null
    })
  }

  const jobOpenings = [
    {
      title: 'Business Development Manager',
      type: 'FULL TIME / PART TIME',
      experience: '3 to 10 Year in Current Industry',
      education: 'Education Qualification - BE or Master Degree',
      icon: <Briefcase className="text-[#FF6B35]" size={24} />
    },
    {
      title: 'Tekla Detailer',
      type: 'FULL TIME',
      experience: '2 to 3 Year',
      education: 'Education Qualification - Diploma or BE in Civil/Mechanical',
      icon: <Briefcase className="text-[#FF6B35]" size={24} />
    },
    {
      title: 'Tekla Modeler',
      type: 'FULL TIME',
      experience: '3+ Year',
      education: 'Education Qualification - Diploma or BE in Civil/Mechanical',
      icon: <Briefcase className="text-[#FF6B35]" size={24} />
    },
    {
      title: 'Checker',
      type: 'FULL TIME / PART TIME',
      experience: '2+ Year',
      education: 'Education Qualification - Diploma or BE in Civil/Mechanical',
      icon: <Briefcase className="text-[#FF6B35]" size={24} />
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[400px] bg-cover bg-center overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.85), rgba(0, 27, 61, 0.85)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600')"
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 h-full flex items-center justify-center"
        >
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl font-bold mb-4"
            >
              CAREER
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-white mx-auto opacity-50"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block border-2 border-[#FF6B35] px-6 py-2 rounded-full mb-4"
            >
              <span className="text-[#FF6B35] font-medium uppercase tracking-wide">Vacancy / Careers</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-[#001B3D] mb-4"
            >
              LET'S JOIN WITH US !!
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Job Listings */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 space-y-6"
            >
              {jobOpenings.map((job, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInLeft}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
                    borderColor: "#FF6B35"
                  }}
                  transition={{ duration: 0.3 }}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all bg-white"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-orange-50 rounded-lg"
                      >
                        {job.icon}
                      </motion.div>
                      <div>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-[#FF6B35] text-sm font-semibold px-3 py-1 bg-orange-50 rounded-full inline-block"
                        >
                          {job.type}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#001B3D] mb-4 hover:text-[#FF6B35] transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-start text-gray-600">
                      <Clock className="text-[#FF6B35] mr-2 mt-1 flex-shrink-0" size={18} />
                      <p>
                        <strong className="text-[#001B3D]">Experience:</strong> {job.experience}
                      </p>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <GraduationCap className="text-[#FF6B35] mr-2 mt-1 flex-shrink-0" size={18} />
                      <p>
                        <strong className="text-[#001B3D]">{job.education}</strong>
                      </p>
                    </div>
                  </div>

                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-[#FF6B35] font-semibold hover:text-[#001B3D] transition-colors flex items-center"
                  >
                    Apply Now →
                  </motion.button> */}
                </motion.div>
              ))}
            </motion.div>

            {/* Application Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="lg:col-span-1"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] p-8 rounded-2xl text-white h-fit sticky top-24 shadow-2xl"
              >
                <motion.h3 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold mb-6 text-center"
                >
                  JOIN OUR TEAM
                </motion.h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium mb-2">Name*</label>
                    <motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255,255,255,0.3)" }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name*"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium mb-2">Email*</label>
                    <motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255,255,255,0.3)" }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email*"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-2">Current Position*</label>
                    <motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255,255,255,0.3)" }}
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Your Current Position*"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium mb-2">Looking For</label>
                    <motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255,255,255,0.3)" }}
                      type="text"
                      name="lookingFor"
                      value={formData.lookingFor}
                      onChange={handleInputChange}
                      placeholder="Tekla Modeler"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2">Job Type</label>
                    <motion.select
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255,255,255,0.3)" }}
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none transition-all"
                    >
                      <option value="">FULL TIME / PART TIME</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                    </motion.select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(255,255,255,0.3)" }}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-all resize-none"
                    ></motion.textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium mb-2">Upload Your CV</label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="cv-upload"
                      />
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        htmlFor="cv-upload"
                        className="flex items-center justify-center w-full px-4 py-3 bg-white text-gray-800 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
                      >
                        <Upload className="mr-2" size={20} />
                        {formData.cv ? formData.cv.name : 'Choose File'}
                      </motion.label>
                    </div>
                    <p className="text-xs mt-1 text-white/80">
                      {formData.cv ? 'File selected' : 'No file chosen'}
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-[#001B3D] text-white px-6 py-4 rounded-lg hover:bg-[#002447] transition-all font-medium text-lg shadow-lg"
                  >
                    SEND APPLICATION
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block border-2 border-[#FF6B35] px-6 py-2 rounded-full mb-4"
            >
              <span className="text-[#FF6B35] font-medium uppercase tracking-wide">Our Benefits</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-[#001B3D]"
            >
              Why Work With Us
            </motion.h2>
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
                icon: <Award className="text-white" size={32} />,
                title: 'Award Winning',
                desc: 'Join an award-winning team recognized for excellence in the construction industry.',
                color: 'from-orange-400 to-red-500'
              },
              {
                icon: <DollarSign className="text-white" size={32} />,
                title: 'Competitive Salary',
                desc: 'Competitive compensation packages with performance bonuses and benefits.',
                color: 'from-blue-400 to-indigo-500'
              },
              {
                icon: <Shield className="text-white" size={32} />,
                title: 'Health Insurance',
                desc: 'Comprehensive health insurance coverage for you and your family.',
                color: 'from-green-400 to-teal-500'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)" 
                }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#001B3D] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

 <ScrollToTop />


    </div>
  )
}

export default Careers