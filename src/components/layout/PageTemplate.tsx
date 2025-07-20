import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface PageTemplateProps {
  title: string
  description: string
  icon?: string
  comingSoon?: boolean
}

export function PageTemplate({ 
  title, 
  description, 
  icon = '🚧', 
  comingSoon = false 
}: PageTemplateProps) {
  return (
    <Layout>
      <section className="bg-gradient-hero section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {description}
            </p>
            
            {comingSoon && (
              <Card className="p-8 bg-primary-50 border-primary-200 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                <p className="text-gray-600 mb-6">
                  We're working hard to bring you this feature. In the meantime, 
                  explore our other solutions or get in touch to learn more.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button href="/">
                    Back to Home
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Contact Us
                  </Button>
                </div>
              </Card>
            )}
            
            {!comingSoon && (
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" size="lg">
                  Learn More
                </Button>
                <Button href="/" variant="secondary" size="lg">
                  Back to Home
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
} 