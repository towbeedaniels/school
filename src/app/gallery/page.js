// src/app/gallery/page.js
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Image as ImageIcon, X } from 'lucide-react'

export default function Gallery() {
  const [gallery, setGallery] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['all', 'sports', 'academic', 'cultural', 'events', 'campus']

  useEffect(() => {
    fetchGallery()
  }, [])

  async function fetchGallery() {
    const { data } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { descending: true })
    
    setGallery(data || [])
  }

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory)

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl">Capturing Moments, Creating Memories</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredGallery.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <p className="text-2xl text-gray-500">No images in this category yet</p>
              <p className="text-gray-400 mt-2">Check back soon for updates!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div 
                  key={item.id}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  {item.image_url ? (
                    <img 
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      <ImageIcon className="w-20 h-20 text-white opacity-50" />
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm opacity-90">{item.description}</p>
                      )}
                      {item.event_date && (
                        <p className="text-xs mt-1 opacity-75">
                          {new Date(item.event_date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="mt-2 text-gray-300">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sample data info */}
      {gallery.length === 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Add Images to Gallery</h3>
            <p className="text-gray-700 font-medium mb-6">
              To populate the gallery, add images to the 'gallery' table in Supabase:
            </p>
            <div className="bg-gray-800 text-green-400 p-4 rounded-lg text-left text-sm overflow-x-auto">
              <pre>{`INSERT INTO gallery (title, description, image_url, category) VALUES
('Science Fair 2024', 'Students presenting projects', 'image-url', 'academic'),
('Sports Day', 'Annual athletics competition', 'image-url', 'sports');`}</pre>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}