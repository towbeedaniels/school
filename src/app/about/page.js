// src/app/about/page.js
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Award, Target, Eye } from 'lucide-react'

export default function About() {
  const [staff, setStaff] = useState([])

  useEffect(() => {
    fetchStaff()
  }, [])

  async function fetchStaff() {
    const { data } = await supabase
      .from('staff')
      .select('*')
      .order('order_position', { ascending: true })
    
    setStaff(data || [])
  }

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-xl">Committed to Excellence Since 1990</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center p-8 border rounded-lg hover:shadow-lg transition">
            <Target className="w-16 h-16 mx-auto text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide quality education that empowers students to become 
              responsible, creative, and critical thinkers prepared for the 
              challenges of tomorrow.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-8 border rounded-lg hover:shadow-lg transition">
            <Eye className="w-16 h-16 mx-auto text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a leading educational institution recognized for academic 
              excellence, character development, and innovative teaching 
              methodologies.
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-8 border rounded-lg hover:shadow-lg transition">
            <Award className="w-16 h-16 mx-auto text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Respect, Excellence, Innovation, and Community. 
              These core values guide everything we do and shape the character 
              of our students.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Our History</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-blue-600">1990</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Foundation</h4>
                  <p className="text-gray-600">
                    School established with 100 students and 10 teachers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-blue-600">2000</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Expansion</h4>
                  <p className="text-gray-600">
                    New campus building opened, student enrollment reaches 500.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-blue-600">2010</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Technology Integration</h4>
                  <p className="text-gray-600">
                    Smart classrooms and computer labs introduced.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-blue-600">2024</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Present Day</h4>
                  <p className="text-gray-600">
                    Over 1000 students, 50+ faculty members, and state-of-the-art facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                  {member.photo_url ? (
                    <img 
                      src={member.photo_url} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-2">{member.department}</p>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-sm text-gray-500 hover:text-blue-600">
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">College Acceptance Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600">National Awards</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Qualified Teachers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Sports Championships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}