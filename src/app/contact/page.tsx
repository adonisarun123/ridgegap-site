import { Layout } from '@/components/layout/Layout'
import { ContactForm } from '@/components/forms/ContactForm'
import { Card } from '@/components/ui/Card'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-gradient-hero">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-main">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your corporate gifting? Let's discuss how RidgeGap can help your organization build stronger relationships.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Talk to Sales
                  </h2>
                  <ContactForm />
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPinIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                        <p className="text-gray-600">
                          Ridge Gap Solutions Pvt. Ltd.<br />
                          Ground Floor, (Out House) No. 15, 12th Block,<br />
                          5th Main, Kumar Park West<br />
                          Bengaluru, Karnataka 560003<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <PhoneIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">(+91) 82968-13621</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <EnvelopeIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">sunny@ridgegap.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ClockIcon className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                          Saturday: 10:00 AM - 2:00 PM IST<br />
                          Sunday: By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About Ridge Gap Solutions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Company</h4>
                      <p className="text-sm text-gray-600">Ridge Gap Solutions Pvt. Ltd.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-sm text-gray-600">Bengaluru, Karnataka, India</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Serving</h4>
                      <p className="text-sm text-gray-600">Global clients with local expertise</p>
                    </div>
                  </div>
                </Card>

                {/* FAQ Section */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Answers</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">How quickly can we get started?</h4>
                      <p className="text-sm text-gray-600">Most clients are up and running within 2-3 business days.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Do you offer enterprise pricing?</h4>
                      <p className="text-sm text-gray-600">Yes, we have custom enterprise plans for teams of 500+ employees.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">What integrations do you support?</h4>
                      <p className="text-sm text-gray-600">We integrate with 50+ platforms including Salesforce, HubSpot, Slack, and major HRIS systems.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 