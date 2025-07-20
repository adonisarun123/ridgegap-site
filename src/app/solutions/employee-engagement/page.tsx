import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Automated Birthday & Anniversary Gifts',
    description: 'Never miss an important milestone with automated gifting triggered by HRIS data.',
    icon: '🎂'
  },
  {
    title: 'Milestone Recognition Programs',
    description: 'Celebrate work anniversaries, promotions, and achievements with meaningful rewards.',
    icon: '🏆'
  },
  {
    title: 'Manager Nomination Tools',
    description: 'Empower managers to recognize outstanding performance with budget-controlled gifting.',
    icon: '⭐'
  },
  {
    title: 'Peer-to-Peer Recognition',
    description: 'Enable team members to appreciate each other with company-sponsored gifts.',
    icon: '🤝'
  },
  {
    title: 'Onboarding Welcome Packages',
    description: 'Make great first impressions with personalized welcome gifts for new hires.',
    icon: '👋'
  },
  {
    title: 'Performance Incentives',
    description: 'Motivate teams with achievement-based gifting programs and leaderboards.',
    icon: '📈'
  }
]

const benefits = [
  'Increase employee retention by 23%',
  'Boost team morale and engagement scores',
  'Reduce manager workload with automation',
  'Create a culture of appreciation',
  'Track ROI with detailed analytics',
  'Global delivery to remote teams'
]

export default function EmployeeEngagementPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Employee Engagement & Recognition
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build a culture of appreciation that drives retention, productivity, and happiness. 
                Make recognition meaningful, personal, and effortless with automated gifting programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get Started
                </Button>
                <Button href="/pricing" variant="secondary" size="lg">
                  View Pricing
                </Button>
              </div>
            </div>
            
            <div className="relative">
                             <Card className="p-8 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Recognition Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                                         <div className="text-center">
                       <div className="text-3xl font-bold text-primary-600">79%</div>
                       <div className="text-sm text-gray-600">Feel More Appreciated</div>
                     </div>
                    <div className="text-center">
                                             <div className="text-3xl font-bold text-primary-700">23%</div>
                      <div className="text-sm text-gray-600">Higher Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">41%</div>
                      <div className="text-sm text-gray-600">Lower Absenteeism</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">15%</div>
                      <div className="text-sm text-gray-600">Productivity Boost</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Employee Recognition Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From onboarding to retirement, create meaningful moments that show your team how much they matter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Employee Recognition Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Companies with strong recognition cultures have 31% lower voluntary turnover rates and 
                12% better business outcomes. RidgeGap makes it easy to build that culture.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Success Story</h3>
                                     <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 mb-6 italic">
                  "Since implementing RidgeGap's employee recognition program, our engagement scores 
                  have increased by 34% and voluntary turnover decreased by 28%. The automated 
                  birthday and anniversary gifts have been especially popular."
                </blockquote>
                
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Jennifer Liu</div>
                  <div className="text-sm text-gray-600">VP of People, TechCorp</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Set up your recognition program in minutes, not months.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect Your Systems</h3>
              <p className="text-gray-600">
                Integrate with your HRIS, Slack, or Teams to automatically sync employee data and milestones.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Configure Recognition Rules</h3>
              <p className="text-gray-600">
                Set up automated triggers for birthdays, anniversaries, promotions, and custom achievements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Watch Engagement Soar</h3>
              <p className="text-gray-600">
                Employees receive personalized gifts automatically while you track the impact with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Integrates With Your Existing Tools
            </h2>
            <p className="text-xl text-gray-600">
              Connect RidgeGap to your HR and communication platforms for seamless automation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['BambooHR', 'Workday', 'ADP', 'Slack', 'Microsoft Teams', 'Salesforce'].map((integration) => (
              <Card key={integration} className="p-6 text-center">
                <div className="font-semibold text-gray-700">{integration}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build a Culture of Appreciation?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of companies using RidgeGap to engage and retain their best talent.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" className="bg-white text-primary-600 hover:bg-gray-100">
                Schedule a Demo
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