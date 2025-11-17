// src/components/Input.jsx
export function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-gray-800 font-bold mb-2 text-sm">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-gray-900 font-semibold placeholder-gray-400"
        {...props}
      />
    </div>
  )
}

export function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-gray-800 font-bold mb-2 text-sm">
        {label}
      </label>
      <textarea
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-gray-900 font-semibold placeholder-gray-400"
        {...props}
      />
    </div>
  )
}

export function Select({ label, children, ...props }) {
  return (
    <div>
      <label className="block text-gray-800 font-bold mb-2 text-sm">
        {label}
      </label>
      <select
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-gray-900 font-semibold"
        {...props}
      >
        {children}
      </select>
    </div>
  )
}