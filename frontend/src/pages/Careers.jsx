import { useState } from 'react'
import { Award, DollarSign, Shield, Upload } from 'lucide-react'

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
      education: 'Education Qualification - BE or Master Degree'
    },
    {
      title: 'Tekla Detailer',
      type: 'FULL TIME',
      experience: '2 to 3 Year',
      education: 'Education Qualification - Diploma or BE in Civil/Mechanical'
    },
    {
      title: 'Tekla Modeler',
      type: 'FULL TIME',
      experience: '3+ Year',
      education: 'Education Qualification - Diploma or BE in Civil/Mechanical'
    },
    {
      title: 'Checker',
      type: 'FULL TIME / PART TIME',
      experience: '2+ Year',
      education: 'Education Qualification - Diploma or BE in Civil/Mechanical'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.85), rgba(0, 27, 61, 0.85)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600')"
      }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">CAREER</h1>
            <div className="w-32 h-1 bg-white mx-auto opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block border-2 border-[#FF6B35] px-6 py-2 rounded-full mb-4">
              <span className="text-[#FF6B35] font-medium uppercase tracking-wide">Vacancy / Careers</span>
            </div>
            <h2 className="text-4xl font-bold text-[#001B3D] mb-4">LET'S JOIN WITH US !!</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Job Listings */}
            <div className="lg:col-span-2 space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="mb-3">
                    <span className="text-[#FF6B35] text-sm font-medium">{job.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001B3D] mb-3">{job.title}</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Experience:</strong> {job.experience}
                  </p>
                  <p className="text-gray-600">
                    <strong>{job.education}</strong>
                  </p>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div className="bg-[#FF6B35] p-8 rounded-lg text-white h-fit sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-center">JOIN OUR TEAM</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name*"
                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Position*</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Your Current Position*"
                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Looking For</label>
                  <input
                    type="text"
                    name="lookingFor"
                    value={formData.lookingFor}
                    onChange={handleInputChange}
                    placeholder="Tekla Modeler"
                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Job Type</label>
                  <select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-white text-gray-800"
                  >
                    <option value="">FULL TIME / PART TIME</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Upload Your CV</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="cv-upload"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="flex items-center justify-center w-full px-4 py-3 bg-white text-gray-800 rounded cursor-pointer hover:bg-gray-100 transition"
                    >
                      <Upload className="mr-2" size={20} />
                      {formData.cv ? formData.cv.name : 'Choose File'}
                    </label>
                  </div>
                  <p className="text-xs mt-1 text-white/80">No file chosen</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#001B3D] text-white px-6 py-3 rounded hover:bg-[#002447] transition font-medium"
                >
                  SEND APPLICATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block border-2 border-[#FF6B35] px-6 py-2 rounded-full mb-4">
              <span className="text-[#FF6B35] font-medium uppercase tracking-wide">Our Benefits</span>
            </div>
            <h2 className="text-4xl font-bold text-[#001B3D]">Why Work With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#001B3D] mb-3">Award Winning</h3>
              <p className="text-gray-600">
                Join an award-winning team recognized for excellence in the construction industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#001B3D] mb-3">Competitive Salary</h3>
              <p className="text-gray-600">
                Competitive compensation packages with performance bonuses and benefits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#001B3D] mb-3">Health Insurance</h3>
              <p className="text-gray-600">
                Comprehensive health insurance coverage for you and your family.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}

export default Careers
