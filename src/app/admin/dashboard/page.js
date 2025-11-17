// src/app/admin/dashboard/page.js
'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { 
  LayoutDashboard, 
  Calendar, 
  Newspaper, 
  Users, 
  Image as ImageIcon,
  LogOut,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState({
    events: 0,
    news: 0,
    staff: 0,
    gallery: 0
  })

  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin')
    } else {
      fetchStats()
    }
  }, [])

  async function fetchStats() {
    const { data: events } = await supabase.from('events').select('id')
    const { data: news } = await supabase.from('news').select('id')
    const { data: staff } = await supabase.from('staff').select('id')
    const { data: gallery } = await supabase.from('gallery').select('id')

    setStats({
      events: events?.length || 0,
      news: news?.length || 0,
      staff: staff?.length || 0,
      gallery: gallery?.length || 0
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    localStorage.removeItem('adminEmail')
    router.push('/admin')
  }

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'news', name: 'News', icon: Newspaper },
    { id: 'staff', name: 'Staff', icon: Users },
    { id: 'gallery', name: 'Gallery', icon: ImageIcon },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h1 className="font-bold text-lg">Admin Dashboard</h1>
                <p className="text-xs text-gray-500">School Management</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                View Website →
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                        activeTab === item.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'overview' && <OverviewTab stats={stats} />}
            {activeTab === 'events' && <EventsTab />}
            {activeTab === 'news' && <NewsTab />}
            {activeTab === 'staff' && <StaffTab />}
            {activeTab === 'gallery' && <GalleryTab />}
          </div>
        </div>
      </div>
    </div>
  )
}

// Overview Tab Component
function OverviewTab({ stats }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-10 h-10 text-blue-600" />
            <span className="text-3xl font-bold">{stats.events}</span>
          </div>
          <h3 className="text-gray-600 font-semibold">Events</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <Newspaper className="w-10 h-10 text-green-600" />
            <span className="text-3xl font-bold">{stats.news}</span>
          </div>
          <h3 className="text-gray-600 font-semibold">News Articles</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-10 h-10 text-purple-600" />
            <span className="text-3xl font-bold">{stats.staff}</span>
          </div>
          <h3 className="text-gray-600 font-semibold">Staff Members</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <ImageIcon className="w-10 h-10 text-pink-600" />
            <span className="text-3xl font-bold">{stats.gallery}</span>
          </div>
          <h3 className="text-gray-600 font-semibold">Gallery Items</h3>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition">
            <Plus className="text-blue-600" />
            <span className="font-semibold">Add New Event</span>
          </button>
          <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-600 hover:bg-green-50 transition">
            <Plus className="text-green-600" />
            <span className="font-semibold">Post News Article</span>
          </button>
          <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition">
            <Plus className="text-purple-600" />
            <span className="font-semibold">Add Staff Member</span>
          </button>
          <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-pink-600 hover:bg-pink-50 transition">
            <Plus className="text-pink-600" />
            <span className="font-semibold">Upload Photos</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Events Tab Component
function EventsTab() {
  const [events, setEvents] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  async function fetchEvents() {
    const { data } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true })
    setEvents(data || [])
  }

  async function deleteEvent(id) {
    if (confirm('Are you sure you want to delete this event?')) {
      await supabase.from('events').delete().eq('id', id)
      fetchEvents()
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Events</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Event
        </button>
      </div>

      {showForm && (
        <EventForm 
          onClose={() => {
            setShowForm(false)
            setEditingEvent(null)
            fetchEvents()
          }}
          event={editingEvent}
        />
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{event.title}</td>
                <td className="px-6 py-4">
                  {new Date(event.event_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {event.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingEvent(event)
                        setShowForm(true)
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {events.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No events yet. Click "Add Event" to create one.
          </div>
        )}
      </div>
    </div>
  )
}

// Event Form Component
function EventForm({ onClose, event }) {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    description: event?.description || '',
    event_date: event?.event_date || '',
    event_time: event?.event_time || '',
    location: event?.location || '',
    category: event?.category || 'academic',
    image_url: event?.image_url || ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (event) {
      // Update existing
      await supabase
        .from('events')
        .update(formData)
        .eq('id', event.id)
    } else {
      // Create new
      await supabase
        .from('events')
        .insert([formData])
    }

    onClose()
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">
        {event ? 'Edit Event' : 'Add New Event'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="academic">Academic</option>
              <option value="sports">Sports</option>
              <option value="cultural">Cultural</option>
              <option value="admissions">Admissions</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Date *</label>
            <input
              type="date"
              value={formData.event_date}
              onChange={(e) => setFormData({...formData, event_date: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Time</label>
            <input
              type="time"
              value={formData.event_time}
              onChange={(e) => setFormData({...formData, event_time: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="e.g., Main Hall"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Image URL</label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="https://..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
          ></textarea>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {event ? 'Update Event' : 'Create Event'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

// Placeholder components for other tabs
function NewsTab() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Manage News</h2>
      <p className="text-gray-600">News management coming soon...</p>
    </div>
  )
}

function StaffTab() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Staff</h2>
      <p className="text-gray-600">Staff management coming soon...</p>
    </div>
  )
}

function GalleryTab() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Gallery</h2>
      <p className="text-gray-600">Gallery management coming soon...</p>
    </div>
  )
}