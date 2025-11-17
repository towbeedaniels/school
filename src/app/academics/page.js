// src/app/academics/page.js
'use client'
import { BookOpen, Users, Award, Lightbulb } from 'lucide-react'

export default function Academics() {
  const programs = [
    {
      level: 'Kindergarten',
      age: '3-5 years',
      description: 'Foundation learning through play-based activities',
      subjects: ['Language Arts', 'Math Basics', 'Art & Music', 'Physical Education'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      level: 'Elementary',
      age: '6-11 years',
      description: 'Building strong academic fundamentals',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Arts', 'PE'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      level: 'Middle School',
      age: '12-14 years',
      description: 'Developing critical thinking and independence',
      subjects: ['Advanced Math', 'Sciences', 'Languages', 'Technology', 'Electives'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      level: 'High School',
      age: '15-18 years',
      description: 'College preparation and career readiness',
      subjects: ['AP Courses', 'STEM', 'Humanities', 'Arts', 'College Prep'],
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const facilities = [
    {
      icon: BookOpen,
      name: 'Modern Library',
      description: '10,000+ books and digital resources'
    },
    {
      icon: Users,
      name: 'Science Labs',
      description: 'Fully equipped physics, chemistry & biology labs'
    },
    {
      icon: Award,
      name: 'Computer Lab',
      description: 'Latest technology and software'
    },
    {
      icon: Lightbulb,
      name: 'Innovation Center',
      description: 'Robotics, coding, and maker space'
    }
  ]

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl">Excellence in Education at Every Level</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="border rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className={`bg-gradient-to-r ${program.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-2">{program.level}</h3>
                  <p className="text-sm opacity-90">Ages {program.age}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <h4 className="font-bold mb-3">Core Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Curriculum Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">STEM Focus</h3>
              <p className="text-gray-600">
                Comprehensive Science, Technology, Engineering, and Mathematics 
                programs with hands-on learning experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                Foreign language instruction and cultural studies to prepare 
                students for an interconnected world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Arts Integration</h3>
              <p className="text-gray-600">
                Visual arts, music, drama, and dance programs to foster 
                creativity and self-expression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-xl font-bold mb-3">Physical Education</h3>
              <p className="text-gray-600">
                Daily PE classes and competitive sports programs promoting 
                health, teamwork, and sportsmanship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Critical Thinking</h3>
              <p className="text-gray-600">
                Project-based learning and problem-solving activities that 
                develop analytical and reasoning skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Character Education</h3>
              <p className="text-gray-600">
                Values-based curriculum promoting integrity, respect, 
                responsibility, and empathy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">World-Class Facilities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Extracurricular Activities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Sports</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basketball</li>
                <li>• Soccer</li>
                <li>• Swimming</li>
                <li>• Track & Field</li>
                <li>• Tennis</li>
                <li>• Volleyball</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Clubs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Robotics Club</li>
                <li>• Debate Team</li>
                <li>• Drama Club</li>
                <li>• Environmental Club</li>
                <li>• Chess Club</li>
                <li>• Student Council</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Arts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Band & Orchestra</li>
                <li>• Choir</li>
                <li>• Art Studio</li>
                <li>• Photography</li>
                <li>• Creative Writing</li>
                <li>• Dance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Academic Calendar 2024-2025</h2>
          <p className="text-gray-600 mb-8">
            Download our complete academic calendar to stay informed about important dates, 
            holidays, and school events throughout the year.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Download Academic Calendar (PDF)
          </button>
        </div>
      </section>
    </div>
  )
}