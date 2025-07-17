import React, { useState } from 'react'
import { Search, ChevronRight, MessageCircle, Phone, Mail, ExternalLink, HelpCircle, Book, Video, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'courses', name: 'Courses', icon: '📖' },
    { id: 'certificates', name: 'Certificates', icon: '🏆' },
    { id: 'technical', name: 'Technical', icon: '⚙️' },
    { id: 'account', name: 'Account', icon: '👤' }
  ]

  const helpArticles = [
    {
      id: 1,
      title: "How to get started with Learn2care",
      description: "Complete guide to setting up your account and taking your first course",
      category: 'getting-started',
      type: 'article',
      readTime: '5 min read',
      popular: true
    },
    {
      id: 2,
      title: "Understanding course progress tracking",
      description: "Learn how your progress is calculated and displayed",
      category: 'courses',
      type: 'article',
      readTime: '3 min read',
      popular: true
    },
    {
      id: 3,
      title: "How to download certificates",
      description: "Step-by-step guide to downloading and sharing your certificates",
      category: 'certificates',
      type: 'video',
      readTime: '2 min watch',
      popular: true
    },
    {
      id: 4,
      title: "Troubleshooting video playback issues",
      description: "Common solutions for video and audio problems",
      category: 'technical',
      type: 'article',
      readTime: '4 min read',
      popular: false
    },
    {
      id: 5,
      title: "Managing your profile and preferences",
      description: "How to update your personal information and notification settings",
      category: 'account',
      type: 'article',
      readTime: '3 min read',
      popular: false
    },
    {
      id: 6,
      title: "Course completion requirements",
      description: "What you need to do to complete a course and earn a certificate",
      category: 'courses',
      type: 'article',
      readTime: '4 min read',
      popular: true
    },
    {
      id: 7,
      title: "Mobile app navigation guide",
      description: "Tips for using the Learn2care mobile app effectively",
      category: 'getting-started',
      type: 'video',
      readTime: '3 min watch',
      popular: false
    },
    {
      id: 8,
      title: "Certificate expiration and renewal",
      description: "Understanding when certificates expire and how to renew them",
      category: 'certificates',
      type: 'article',
      readTime: '5 min read',
      popular: false
    }
  ]

  const contactOptions = [
    {
      id: 1,
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      availability: "Available 24/7",
      action: "Start Chat"
    },
    {
      id: 2,
      title: "Phone Support",
      description: "Call us for immediate help",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM EST",
      action: "Call Now"
    },
    {
      id: 3,
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      availability: "Response within 24 hours",
      action: "Send Email"
    }
  ]

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />
      case 'article': return <FileText className="h-4 w-4" />
      default: return <Book className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-blue-100 text-blue-800'
      case 'article': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h2>
        <p className="text-gray-600">Find answers and get assistance</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search help articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">Need immediate help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {contactOptions.map((option) => (
            <div key={option.id} className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <option.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">{option.title}</h3>
                  <p className="text-xs text-gray-600">{option.availability}</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-primary border-primary">
                {option.action}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            className={`h-auto p-3 flex flex-col items-center space-y-1 ${
              selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="text-xs font-medium text-center leading-tight">{category.name}</span>
          </Button>
        ))}
      </div>

      {/* Popular Articles */}
      {selectedCategory === 'all' && (
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center">
              <span className="mr-2">🔥</span>
              Popular Articles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {helpArticles.filter(article => article.popular).slice(0, 3).map((article) => (
              <div key={article.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight mb-1">
                    {article.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className={`text-xs ${getTypeColor(article.type)}`}>
                      <span className="mr-1">{getTypeIcon(article.type)}</span>
                      {article.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Help Articles */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">
            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {filteredArticles.map((article) => (
            <div key={article.id} className="flex items-start justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {article.title}
                  </h3>
                  {article.popular && (
                    <Badge variant="secondary" className="ml-2 text-xs bg-orange-100 text-orange-800">
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className={`text-xs ${getTypeColor(article.type)}`}>
                    <span className="mr-1">{getTypeIcon(article.type)}</span>
                    {article.type}
                  </Badge>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400 mt-1" />
            </div>
          ))}
        </CardContent>
      </Card>

      {filteredArticles.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600">Try adjusting your search or browse different categories</p>
        </div>
      )}

      {/* Additional Resources */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">Additional Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              Community Forum
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <Video className="h-4 w-4 mr-2" />
              Video Tutorials
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              User Manual
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Help