import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon 
} from '@heroicons/react/24/outline'

const giftCategories = [
  'All Categories',
  'Experiences',
  'Wellness',
  'Tech & Gadgets',
  'Food & Beverages',
  'Sports & Recreation',
  'Home & Lifestyle',
  'Books & Learning',
  'Fashion & Beauty'
]

const occasions = [
  'All Occasions',
  'Birthday',
  'Work Anniversary',
  'Thank You',
  'Welcome/Onboarding',
  'Promotion',
  'Retirement',
  'Holiday'
]

const sampleGifts = [
  {
    id: 1,
    name: 'Premium Coffee Subscription',
    price: 75,
    image: '☕',
    rating: 4.8,
    category: 'Food & Beverages',
    vendor: 'Blue Bottle Coffee',
    description: '3-month premium coffee subscription with curated beans from around the world.'
  },
  {
    id: 2,
    name: 'Wireless Noise-Canceling Headphones',
    price: 250,
    image: '🎧',
    rating: 4.9,
    category: 'Tech & Gadgets',
    vendor: 'Sony',
    description: 'Industry-leading noise canceling with 30-hour battery life.'
  },
  {
    id: 3,
    name: 'Spa Day Experience',
    price: 200,
    image: '🧘‍♀️',
    rating: 4.7,
    category: 'Wellness',
    vendor: 'Relax & Rejuvenate',
    description: 'Full day spa experience including massage, facial, and relaxation.'
  },
  {
    id: 4,
    name: 'Virtual Cooking Class',
    price: 125,
    image: '👨‍🍳',
    rating: 4.6,
    category: 'Experiences',
    vendor: 'ChefClass',
    description: 'Interactive online cooking class with professional chef and ingredients included.'
  },
  {
    id: 5,
    name: 'Ergonomic Desk Setup',
    price: 180,
    image: '💺',
    rating: 4.5,
    category: 'Home & Lifestyle',
    vendor: 'ErgoOffice',
    description: 'Complete ergonomic accessories for a healthier workspace.'
  },
  {
    id: 6,
    name: 'Fitness Tracker Watch',
    price: 199,
    image: '⌚',
    rating: 4.4,
    category: 'Tech & Gadgets',
    vendor: 'FitTech',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.'
  },
  {
    id: 7,
    name: 'Artisan Chocolate Collection',
    price: 65,
    image: '🍫',
    rating: 4.9,
    category: 'Food & Beverages',
    vendor: 'ChocolateCrafters',
    description: 'Hand-crafted premium chocolates from master chocolatiers.'
  },
  {
    id: 8,
    name: 'Plant Care Starter Kit',
    price: 95,
    image: '🌱',
    rating: 4.3,
    category: 'Home & Lifestyle',
    vendor: 'GreenThumb',
    description: 'Everything needed to start an indoor plant garden.'
  },
  {
    id: 9,
    name: 'Language Learning Subscription',
    price: 120,
    image: '📚',
    rating: 4.6,
    category: 'Books & Learning',
    vendor: 'LinguaLearn',
    description: '6-month premium language learning platform access.'
  }
]

export default function GiftsPage() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container-main">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Gift Catalog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover over 250,000 carefully curated gifts from trusted vendors worldwide. Find the perfect gift for every recipient and occasion.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search gifts, categories, or occasions..."
                  className="pl-12 pr-4 py-4 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-8">
          <div className="container-main">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-8">
                  <div className="flex items-center mb-6">
                    <FunnelIcon className="w-5 h-5 text-gray-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  </div>

                  {/* Price Range */}
                  <div className="mb-8">
                    <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="radio" name="price" className="mr-3" defaultChecked />
                        <span className="text-gray-700">All Prices</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="price" className="mr-3" />
                        <span className="text-gray-700">$25 - $50</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="price" className="mr-3" />
                        <span className="text-gray-700">$50 - $100</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="price" className="mr-3" />
                        <span className="text-gray-700">$100 - $200</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="price" className="mr-3" />
                        <span className="text-gray-700">$200+</span>
                      </label>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-8">
                    <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {giftCategories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked={category === 'All Categories'} />
                          <span className="text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Occasions */}
                  <div className="mb-8">
                    <h3 className="font-medium text-gray-900 mb-4">Occasions</h3>
                    <div className="space-y-2">
                      {occasions.map((occasion) => (
                        <label key={occasion} className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked={occasion === 'All Occasions'} />
                          <span className="text-gray-700">{occasion}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="secondary">
                    Clear All Filters
                  </Button>
                </Card>
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Gifts</h2>
                    <p className="text-gray-600">Showing 250,000+ results</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-400 mr-2" />
                      <select className="form-input py-2">
                        <option>Most Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest Rated</option>
                        <option>Newest</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Gift Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sampleGifts.map((gift) => (
                    <Card key={gift.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl">
                        {gift.image}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {gift.category}
                          </span>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm text-gray-600">{gift.rating}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{gift.name}</h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{gift.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-gray-900">${gift.price}</span>
                            <p className="text-xs text-gray-500">by {gift.vendor}</p>
                          </div>
                          <Button size="sm">
                            Add to Collection
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center mt-12 space-x-2">
                  <Button variant="secondary" disabled>Previous</Button>
                  <Button variant="secondary">1</Button>
                  <Button>2</Button>
                  <Button variant="secondary">3</Button>
                  <span className="px-3 py-2 text-gray-500">...</span>
                  <Button variant="secondary">28,571</Button>
                  <Button variant="secondary">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 