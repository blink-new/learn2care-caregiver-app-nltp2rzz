import React, { useState } from 'react'
import { Download, Search, Calendar, Award, ExternalLink, Filter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'

const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'recent', name: 'Recent', count: 5 },
    { id: 'expired', name: 'Expiring Soon', count: 2 },
    { id: 'completed', name: 'Completed', count: 10 }
  ]

  const certificates = [
    {
      id: 1,
      name: "CPR Certification",
      course: "Cardiopulmonary Resuscitation",
      issueDate: "2024-12-15",
      expiryDate: "2026-12-15",
      status: "active",
      type: "PDF",
      thumbnail: "🫀",
      credentialId: "CPR-2024-001234",
      issuedBy: "American Heart Association"
    },
    {
      id: 2,
      name: "First Aid Training Certificate",
      course: "Basic First Aid & Emergency Response",
      issueDate: "2024-11-28",
      expiryDate: "2026-11-28",
      status: "active",
      type: "PDF",
      thumbnail: "🩹",
      credentialId: "FA-2024-005678",
      issuedBy: "Red Cross"
    },
    {
      id: 3,
      name: "Patient Safety Certification",
      course: "Patient Safety Fundamentals",
      issueDate: "2024-11-10",
      expiryDate: "2025-11-10",
      status: "expiring",
      type: "PDF",
      thumbnail: "🛡️",
      credentialId: "PS-2024-009012",
      issuedBy: "Healthcare Safety Institute"
    },
    {
      id: 4,
      name: "Hygiene Standards Certificate",
      course: "Infection Control & Prevention",
      issueDate: "2024-10-22",
      expiryDate: "2026-10-22",
      status: "active",
      type: "PDF",
      thumbnail: "🧼",
      credentialId: "HS-2024-003456",
      issuedBy: "Health Department"
    },
    {
      id: 5,
      name: "Communication Skills Certificate",
      course: "Effective Patient Communication",
      issueDate: "2024-10-05",
      expiryDate: "2027-10-05",
      status: "active",
      type: "PDF",
      thumbnail: "💬",
      credentialId: "CS-2024-007890",
      issuedBy: "Communication Institute"
    },
    {
      id: 6,
      name: "Medication Management Certificate",
      course: "Safe Medication Administration",
      issueDate: "2024-09-18",
      expiryDate: "2025-09-18",
      status: "expiring",
      type: "PDF",
      thumbnail: "💊",
      credentialId: "MM-2024-001122",
      issuedBy: "Pharmacy Board"
    },
    {
      id: 7,
      name: "Mental Health Support Certificate",
      course: "Mental Health First Aid",
      issueDate: "2024-08-30",
      expiryDate: "2026-08-30",
      status: "active",
      type: "PDF",
      thumbnail: "🧠",
      credentialId: "MH-2024-004455",
      issuedBy: "Mental Health Foundation"
    },
    {
      id: 8,
      name: "Emergency Response Certificate",
      course: "Emergency Protocols & Procedures",
      issueDate: "2024-08-12",
      expiryDate: "2026-08-12",
      status: "active",
      type: "PDF",
      thumbnail: "🚨",
      credentialId: "ER-2024-006677",
      issuedBy: "Emergency Services"
    }
  ]

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.course.toLowerCase().includes(searchQuery.toLowerCase())
    
    let matchesFilter = true
    if (selectedFilter === 'recent') {
      const issueDate = new Date(cert.issueDate)
      const threeMonthsAgo = new Date()
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
      matchesFilter = issueDate >= threeMonthsAgo
    } else if (selectedFilter === 'expired') {
      matchesFilter = cert.status === 'expiring'
    } else if (selectedFilter === 'completed') {
      matchesFilter = cert.status === 'active'
    }
    
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'expiring': return 'bg-yellow-100 text-yellow-800'
      case 'expired': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active'
      case 'expiring': return 'Expiring Soon'
      case 'expired': return 'Expired'
      default: return 'Unknown'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">My Certificates</h2>
        <p className="text-gray-600">Your earned certifications</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search certificates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Filters */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={selectedFilter === filter.id ? "default" : "outline"}
            size="sm"
            className={`whitespace-nowrap ${
              selectedFilter === filter.id 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedFilter(filter.id)}
          >
            {filter.name}
            <Badge variant="secondary" className="ml-2 text-xs">
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">10</div>
            <div className="text-xs text-green-600">Active</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-700">2</div>
            <div className="text-xs text-yellow-600">Expiring</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">12</div>
            <div className="text-xs text-blue-600">Total</div>
          </CardContent>
        </Card>
      </div>

      {/* Certificates List */}
      <div className="space-y-4">
        {filteredCertificates.map((cert) => (
          <Card key={cert.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex space-x-3">
                <div className="text-2xl">{cert.thumbnail}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      {cert.name}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${getStatusColor(cert.status)}`}
                    >
                      {getStatusText(cert.status)}
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-2">
                    {cert.course}
                  </p>

                  <div className="text-xs text-gray-500 mb-2">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Issued: {formatDate(cert.issueDate)}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Expires: {formatDate(cert.expiryDate)}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mb-3">
                    <div>ID: {cert.credentialId}</div>
                    <div>Issued by: {cert.issuedBy}</div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates found</h3>
          <p className="text-gray-600">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  )
}

export default Certificates