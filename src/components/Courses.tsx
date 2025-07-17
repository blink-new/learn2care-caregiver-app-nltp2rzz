import React, { useState } from 'react'
import { Search, Filter, Clock, Users, Star, Play, BookOpen } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Courses', count: 24 },
    { id: 'basic', name: 'Basic Care', count: 8 },
    { id: 'advanced', name: 'Advanced', count: 6 },
    { id: 'emergency', name: 'Emergency', count: 5 },
    { id: 'specialized', name: 'Specialized', count: 5 }
  ]

  const courses = [
    {
      id: 1,
      title: "Basic Patient Care Fundamentals",
      description: "Learn essential patient care skills and techniques",
      category: 'basic',
      duration: "2h 30m",
      lessons: 12,
      rating: 4.8,
      students: 1250,
      progress: 85,
      thumbnail: "🏥",
      difficulty: "Beginner",
      isEnrolled: true
    },
    {
      id: 2,
      title: "Medication Management & Safety",
      description: "Comprehensive guide to safe medication administration",
      category: 'basic',
      duration: "3h 15m",
      lessons: 18,
      rating: 4.9,
      students: 980,
      progress: 60,
      thumbnail: "💊",
      difficulty: "Intermediate",
      isEnrolled: true
    },
    {
      id: 3,
      title: "Emergency Response Protocols",
      description: "Critical emergency procedures and response techniques",
      category: 'emergency',
      duration: "4h 00m",
      lessons: 24,
      rating: 4.7,
      students: 750,
      progress: 40,
      thumbnail: "🚨",
      difficulty: "Advanced",
      isEnrolled: true
    },
    {
      id: 4,
      title: "Infection Control & Prevention",
      description: "Best practices for maintaining hygiene and preventing infections",
      category: 'basic',
      duration: "2h 45m",
      lessons: 15,
      rating: 4.6,
      students: 1100,
      progress: 0,
      thumbnail: "🧼",
      difficulty: "Beginner",
      isEnrolled: false
    },
    {
      id: 5,
      title: "Mental Health Support",
      description: "Understanding and supporting patient mental health needs",
      category: 'specialized',
      duration: "3h 30m",
      lessons: 20,
      rating: 4.8,
      students: 650,
      progress: 0,
      thumbnail: "🧠",
      difficulty: "Intermediate",
      isEnrolled: false
    },
    {
      id: 6,
      title: "Advanced Life Support",
      description: "Advanced techniques for critical care situations",
      category: 'advanced',
      duration: "5h 15m",
      lessons: 30,
      rating: 4.9,
      students: 420,
      progress: 0,
      thumbnail: "⚡",
      difficulty: "Advanced",
      isEnrolled: false
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Courses</h2>
        <p className="text-gray-600">Expand your caregiving skills</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            className={`whitespace-nowrap ${
              selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
            <Badge variant="secondary" className="ml-2 text-xs">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="space-y-4">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex space-x-3">
                <div className="text-3xl">{course.thumbnail}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      {course.title}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${getDifficultyColor(course.difficulty)}`}
                    >
                      {course.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  {course.isEnrolled && course.progress > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Progress</span>
                        <span className="text-xs font-medium text-primary">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {course.lessons} lessons
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {course.students}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {course.isEnrolled ? (
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                        <Play className="h-3 w-3 mr-1" />
                        {course.progress > 0 ? 'Continue' : 'Start'}
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="flex-1">
                        Enroll Now
                      </Button>
                    )}
                    <Button size="sm" variant="ghost">
                      <BookOpen className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  )
}

export default Courses