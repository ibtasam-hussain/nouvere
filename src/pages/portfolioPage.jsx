import { useNavigate } from 'react-router-dom'
import PortfolioSection from '../components/portfolio'
import { ArrowLeft } from 'lucide-react'

export default function PortfolioPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Back Button */}
      <div className="pt-8 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-medium tracking-wider">BACK TO HOME</span>
          </button>
        </div>
      </div>

      {/* Full Portfolio Section */}
      <PortfolioSection showAll={true} />
    </div>
  )
}
