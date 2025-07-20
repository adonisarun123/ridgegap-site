import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const caseStudies = [
  {
    company: 'TechCorp',
    industry: 'Technology',
    employees: '1,200+',
    challenge: 'Low employee engagement and high turnover rates affecting productivity',
    solution: 'Automated birthday and anniversary gifts, milestone recognition program',
    results: ['34% increase in engagement scores', '28% reduction in voluntary turnover', '95% gift satisfaction rate'],
    quote: 'RidgeGap transformed our culture of appreciation. Employees feel valued and engagement has never been higher.',
    author: 'Jennifer Liu, VP of People',
    icon: '💻'
  },
  {
    company: 'HealthFirst',
    industry: 'Healthcare',
    employees: '800+',
    challenge: 'Remote workforce feeling disconnected, difficult to show appreciation',
    solution: 'Global gift delivery, wellness-focused gift collections, team celebration packages',
    results: ['42% improvement in team cohesion', 'Global reach to 15 countries', '89% participation rate'],
    quote: 'Being able to send meaningful gifts to our global team has strengthened our culture tremendously.',
    author: 'Dr. Sarah Martinez, Chief People Officer',
    icon: '🏥'
  },
  {
    company: 'RetailMax',
    industry: 'Retail',
    employees: '2,500+',
    challenge: 'Customer retention declining, need to improve loyalty program effectiveness',
    solution: 'Customer milestone gifting, loyalty program integration, personalized thank you gifts',
    results: ['18% increase in customer retention', '25% boost in repeat purchases', '92% positive feedback'],
    quote: 'Our customers love the personal touch. Gift recipients become our most loyal advocates.',
    author: 'Michael Thompson, Customer Experience Director',
    icon: '🛒'
  }
]

export default function CaseStudiesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              See how leading organizations use RidgeGap to build stronger relationships, 
              improve engagement, and drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{study.icon}</div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{study.company}</h2>
                        <p className="text-gray-600">{study.industry} • {study.employees} employees</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    
                    <blockquote className="text-lg text-gray-900 font-medium mb-6 leading-relaxed">
                      "{study.quote}"
                    </blockquote>
                    
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{study.author}</div>
                      <div className="text-sm text-gray-600">{study.company}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Results That Matter
            </h2>
            <p className="text-xl text-gray-600">
              Our customers consistently see measurable improvements across key metrics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">31%</div>
              <div className="text-gray-600">Average engagement increase</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">25%</div>
              <div className="text-gray-600">Reduction in turnover</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">92%</div>
              <div className="text-gray-600">Customer satisfaction</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Countries served</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of companies already transforming their relationships with RidgeGap.
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