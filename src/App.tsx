import React, { useState } from 'react'
import { Bell, User, BookOpen, Award, HelpCircle, Home } from 'lucide-react'
import { Button } from './components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Badge } from './components/ui/badge'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import Certificates from './components/Certificates'
import Help from './components/Help'

type Tab = 'dashboard' | 'courses' | 'certificates' | 'help'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'courses':
        return <Courses />
      case 'certificates':
        return <Certificates />
      case 'help':
        return <Help />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L2C</span>
            </div>
            <h1 className="text-lg font-semibold text-gray-900">Learn2care</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">
                2
              </Badge>
            </Button>
            
            <Button variant="ghost" size="sm">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-xs bg-primary text-white">JD</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex items-center justify-around max-w-md mx-auto py-2">
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 py-2 px-3 ${
              activeTab === 'dashboard' ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Dashboard</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 py-2 px-3 ${
              activeTab === 'courses' ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('courses')}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-medium">Courses</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 py-2 px-3 ${
              activeTab === 'certificates' ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('certificates')}
          >
            <Award className="h-5 w-5" />
            <span className="text-xs font-medium">Certificates</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 py-2 px-3 ${
              activeTab === 'help' ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('help')}
          >
            <HelpCircle className="h-5 w-5" />
            <span className="text-xs font-medium">Help</span>
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default App