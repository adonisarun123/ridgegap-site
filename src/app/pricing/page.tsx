import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

const pricingPlans = [
  {
    name: 'Starter',
    price: 299,
    billing: 'per month',
    description: 'Perfect for small teams getting started with corporate gifting.',
    features: [
      'Up to 100 gifts per month',
      'Basic gift catalog access',
      'Standard shipping',
      'Email support',
      'Basic reporting',
      'Team management'
    ],
    limitations: [
      'No automation features',
      'Limited customization',
      'No API access'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: 799,
    billing: 'per month',
    description: 'Everything you need to scale corporate gifting across your organization.',
    features: [
      'Up to 500 gifts per month',
      'Full gift catalog access',
      'Priority shipping',
      'Phone & email support',
      'Advanced reporting & analytics',
      'Team management',
      'Automated gifting workflows',
      'Custom gift collections',
      'Basic integrations (Slack, Teams)',
      'Budget controls & approvals'
    ],
    limitations: [
      'Limited API calls',
      'No white-label options'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: null,
    billing: 'custom pricing',
    description: 'Advanced features and dedicated support for large organizations.',
    features: [
      'Unlimited gifts',
      'Premium gift catalog access',
      'Express shipping',
      'Dedicated account manager',
      'Custom reporting & dashboards',
      'Advanced team management',
      'Full automation suite',
      'Custom branding & collections',
      'All integrations (CRM, HRIS, etc.)',
      'Advanced budget controls',
      'API access & white-label',
      'SSO & enterprise security',
      'Onboarding & training',
      'SLA guarantee'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false
  }
]

const addOnFeatures = [
  {
    name: 'Additional Gift Volume',
    description: 'Extra gifts beyond your plan limit',
    price: '$3.99 per gift'
  },
  {
    name: 'Express Shipping',
    description: '1-2 day delivery for urgent gifts',
    price: '$15 per shipment'
  },
  {
    name: 'Custom Swag Store',
    description: 'Branded employee merchandise portal',
    price: '$199/month'
  },
  {
    name: 'Advanced Analytics',
    description: 'Custom reports and ROI tracking',
    price: '$149/month'
  }
]

export default function PricingPage() {
  return (
    <Layout>
      <div className="bg-gradient-hero">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-main">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your organization's size and gifting needs. All plans include our full gift catalog and global shipping.
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
                <button className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-md">
                  Monthly
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600">
                  Annual (Save 20%)
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`p-8 relative ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      {plan.price ? (
                        <>
                          <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                          <span className="text-gray-600 ml-2">{plan.billing}</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-gray-900">Custom pricing</span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start">
                        <XMarkIcon className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                    className="w-full"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>

            {/* Add-ons Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-Ons & Extras</h2>
                <p className="text-xl text-gray-600">Enhance your plan with additional features</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addOnFeatures.map((addon, index) => (
                  <Card key={index} className="p-6 text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                    <p className="text-lg font-bold text-primary-600">{addon.price}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer a free trial?
                  </h3>
                  <p className="text-gray-600">
                    Yes! All plans come with a 14-day free trial. No credit card required to get started.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I change plans anytime?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's included in the gift catalog?
                  </h3>
                  <p className="text-gray-600">
                    Over 250,000 curated gifts across all categories including experiences, tech, wellness, food, and more from trusted vendors worldwide.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer volume discounts?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Enterprise customers receive volume discounts based on annual gift volume. Contact our sales team for custom pricing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, ACH transfers, and can accommodate purchase orders for enterprise customers.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 p-12 bg-primary-50 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using RidgeGap to build stronger relationships through thoughtful gifting.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/signup" size="lg">
                  Start Free Trial
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 