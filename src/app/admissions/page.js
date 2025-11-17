// src/app/admissions/page.js
'use client'
import { useState } from 'react'
import { FileText, CheckCircle, Send, Download } from 'lucide-react'

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Here you would send to Supabase or email service
    console.log('Form submitted:', formData)
    
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    
    // Reset form
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      grade: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl">Join Our Learning Community</p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Admission Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Inquiry</h3>
              <p className="text-gray-600">Submit an inquiry form or schedule a campus visit</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Application</h3>
              <p className="text-gray-600">Complete and submit the admission application</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">Student assessment and parent interview</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Enrollment</h3>
              <p className="text-gray-600">Receive decision and complete enrollment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Required Documents</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <ul className="space-y-4">
                {[
                  'Completed application form',
                  'Birth certificate (original and copy)',
                  'Previous school records/transcripts',
                  'Recent passport-sized photographs',
                  'Medical records and immunization certificate',
                  'Proof of residence',
                  'Transfer certificate (if applicable)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mx-auto">
                  <Download className="w-5 h-5" />
                  Download Application Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Fee Structure</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Kindergarten */}
            <div className="border rounded-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-center">Kindergarten</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$5,000</span>
                <span className="text-gray-600">/year</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Full day program</li>
                <li>✓ Meals included</li>
                <li>✓ Learning materials</li>
                <li>✓ Extracurricular activities</li>
              </ul>
            </div>

            {/* Elementary */}
            <div className="border-2 border-blue-600 rounded-lg p-8 hover:shadow-xl transition relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Elementary</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$8,000</span>
                <span className="text-gray-600">/year</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Core curriculum</li>
                <li>✓ Lunch program</li>
                <li>✓ Books & supplies</li>
                <li>✓ Sports & arts</li>
                <li>✓ Field trips</li>
              </ul>
            </div>

            {/* High School */}
            <div className="border rounded-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-center">High School</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$12,000</span>
                <span className="text-gray-600">/year</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Advanced curriculum</li>
                <li>✓ Lab facilities</li>
                <li>✓ College counseling</li>
                <li>✓ All materials</li>
                <li>✓ Exam preparation</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            * Scholarships and payment plans available. Contact us for more information.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Submit Inquiry</h2>
          <p className="text-center text-gray-600 mb-8">
            Interested in enrolling? Fill out the form below and we'll get back to you soon.
          </p>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you! We'll contact you within 24 hours.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Grade Applying For *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select grade</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="grade-1">Grade 1</option>
                  <option value="grade-2">Grade 2</option>
                  <option value="grade-3">Grade 3</option>
                  <option value="grade-4">Grade 4</option>
                  <option value="grade-5">Grade 5</option>
                  <option value="grade-6">Grade 6</option>
                  <option value="grade-7">Grade 7</option>
                  <option value="grade-8">Grade 8</option>
                  <option value="grade-9">Grade 9</option>
                  <option value="grade-10">Grade 10</option>
                  <option value="grade-11">Grade 11</option>
                  <option value="grade-12">Grade 12</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Any questions or additional information..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}