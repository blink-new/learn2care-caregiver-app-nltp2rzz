import React from 'react'
import { Clock, Download, ChevronRight, Play } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'

const Dashboard = () => {
  // Mock data
  const progressData = {
    totalHours: 120,
    completedHours: 75,
    remainingHours: 45
  }

  const recentCourses = [
    {
      id: 1,
      title: "Basic Patient Care",
      progress: 85,
      duration: "2h 30m",
      lastAccessed: "2 hours ago",
      thumbnail: "🏥"
    },
    {
      id: 2,
      title: "Medication Management",
      progress: 60,
      duration: "3h 15m",
      lastAccessed: "1 day ago",
      thumbnail: "💊"
    },
    {
      id: 3,
      title: "Emergency Response",
      progress: 40,
      duration: "4h 00m",
      lastAccessed: "3 days ago",
      thumbnail: "🚨"
    }
  ]

  const certificates = [
    { id: 1, name: "CPR Certification", date: "Dec 15, 2024", type: "PDF" },
    { id: 2, name: "First Aid Training", date: "Nov 28, 2024", type: "PDF" },
    { id: 3, name: "Patient Safety", date: "Nov 10, 2024", type: "PDF" },
    { id: 4, name: "Hygiene Standards", date: "Oct 22, 2024", type: "PDF" },
    { id: 5, name: "Communication Skills", date: "Oct 5, 2024", type: "PDF" }
  ]

  const completionPercentage = Math.round((progressData.completedHours / progressData.totalHours) * 100)

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      {/* Welcome Section */}
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
        <p className="text-gray-600">Continue your learning journey</p>
      </div>

      {/* Progress Chart */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-center">Learning Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#58CC02"
                  strokeWidth="3"
                  strokeDasharray={`${completionPercentage}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{completionPercentage}%</div>
                  <div className="text-xs text-gray-600">Complete</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-gray-900">{progressData.totalHours}h</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary">{progressData.completedHours}h</div>
              <div className="text-xs text-gray-600">Completed</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-accent">{progressData.remainingHours}h</div>
              <div className="text-xs text-gray-600">Remaining</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Courses */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Courses</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentCourses.map((course) => (
            <div key={course.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-2xl">{course.thumbnail}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{course.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Progress value={course.progress} className="flex-1 h-2" />
                  <span className="text-xs text-gray-600">{course.progress}%</span>
                </div>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </span>
                  <span className="text-xs text-gray-500">{course.lastAccessed}</span>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="text-primary">
                <Play className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Latest Certificates */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Latest Certificates</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {certificates.slice(0, 5).map((cert) => (
            <div key={cert.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">{cert.type}</Badge>
                <Button size="sm" variant="ghost" className="text-primary">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard