// src/app/page.js
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Calendar, BookOpen, Users } from 'lucide-react'

export default function Home() {
  const [events, setEvents] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    fetchEvents()
    fetchNews()
  }, [])

  async function fetchEvents() {
    const { data } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true })
      .limit(3)
    
    setEvents(data || [])
  }

  async function fetchNews() {
    const { data } = await supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .order('created_at', { descending: true })
      .limit(3)
    
    setNews(data || [])
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to School Name
          </h1>
          <p className="text-xl mb-8">
            Excellence in Education Since 1990
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Teachers</p>
            </div>
            <div className="text-center">
              <Calendar className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h3 className="text-4xl font-bold mb-2">30+</h3>
              <p className="text-gray-600">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="border rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-blue-600 font-semibold">
                  {new Date(event.event_date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}