// src/components/Footer.jsx
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +1 234 567 890
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                info@school.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                123 School Street, City
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/admissions" className="hover:text-blue-400">Admissions</a></li>
              <li><a href="/events" className="hover:text-blue-400">Events</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 School Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}