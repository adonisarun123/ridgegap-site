import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: '👩‍💼',
    bio: 'Former VP of People Operations at tech unicorns. Passionate about building meaningful workplace cultures.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    image: '👨‍💻',
    bio: 'Ex-Amazon engineer with 15+ years building scalable platforms. Loves solving complex logistics challenges.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Operations',
    image: '👩‍🔧',
    bio: 'Supply chain expert who scaled global fulfillment at Fortune 500 companies. Detail-oriented perfectionist.'
  },
  {
    name: 'David Kim',
    role: 'VP of Sales',
    image: '👨‍💼',
    bio: 'Sales leader who helped enterprise software companies grow from startup to IPO. Customer-obsessed.'
  }
]

const values = [
  {
    title: 'Recipients First',
    description: 'Every decision we make prioritizes the gift recipient experience. Choice and quality are non-negotiable.',
    icon: '🎁'
  },
  {
    title: 'Thoughtful Automation',
    description: 'Technology should enhance human connection, not replace it. We automate logistics, not relationships.',
    icon: '🤖'
  },
  {
    title: 'Global Impact',
    description: 'Building bridges across cultures and distances through meaningful gift experiences worldwide.',
    icon: '🌍'
  },
  {
    title: 'Transparent Partnerships',
    description: 'Clear pricing, honest communication, and genuine partnerships with our customers and vendors.',
    icon: '🤝'
  }
]

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About RidgeGap
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to transform how businesses build relationships through thoughtful, 
              meaningful gifting experiences that bring people closer together.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  RidgeGap was born from a simple frustration: why is corporate gifting so impersonal and complicated? 
                  Our founders experienced this firsthand while trying to show appreciation to their global teams.
                </p>
                <p>
                  Traditional gifting platforms offered limited choices, poor recipient experiences, and complex logistics. 
                  We knew there had to be a better way—one that puts recipients first and makes thoughtful gifting effortless for organizations.
                </p>
                <p>
                  Since 2020, we've delivered over 7 million gifts worldwide, helping thousands of companies build 
                  stronger relationships with their employees, customers, and partners. Every gift tells a story of appreciation, 
                  and we're honored to be part of those moments.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Growth</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-primary-600">7M+</div>
                      <div className="text-sm text-gray-600">Gifts Delivered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-600">500+</div>
                      <div className="text-sm text-gray-600">Enterprise Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-600">150+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-600">95%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make meaningful gifting accessible and effortless for every organization, 
                enabling authentic appreciation that strengthens relationships and builds lasting connections.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where every gesture of appreciation is personal, thoughtful, and creates 
                genuine moments of joy that bring people and organizations closer together.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind RidgeGap, dedicated to making every gift experience exceptional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to join our team?</p>
            <Button href="/careers">View Open Positions</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Gifting?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of companies who trust RidgeGap to help them build stronger relationships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today
              </Button>
              <Button href="/pricing" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary-600">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 