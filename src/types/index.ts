export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'user'
  companyId: string
  avatar?: string
  createdAt: Date
  lastLogin?: Date
}

export interface Company {
  id: string
  name: string
  industry: string
  size: 'small' | 'medium' | 'large' | 'enterprise'
  planType: 'starter' | 'professional' | 'enterprise'
  settings: CompanySettings
  branding: CompanyBranding
  billingInfo: BillingInfo
}

export interface CompanySettings {
  autoApprovalLimit: number
  defaultBudget: number
  requireApproval: boolean
  allowCustomMessages: boolean
  enableAutomation: boolean
}

export interface CompanyBranding {
  logo?: string
  primaryColor: string
  secondaryColor: string
  fontFamily?: string
  customDomain?: string
}

export interface BillingInfo {
  plan: string
  billingCycle: 'monthly' | 'yearly'
  nextBillingDate: Date
  paymentMethod: string
}

export interface Gift {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: GiftCategory
  vendor: Vendor
  tags: string[]
  customizable: boolean
  inStock: boolean
  rating: number
  reviewCount: number
}

export interface GiftCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
  parentId?: string
}

export interface Vendor {
  id: string
  name: string
  logo: string
  description: string
  website: string
}

export interface Order {
  id: string
  userId: string
  recipientId: string
  giftId: string
  status: OrderStatus
  amount: number
  customization?: OrderCustomization
  message?: string
  shippingAddress: Address
  createdAt: Date
  shippedAt?: Date
  deliveredAt?: Date
  trackingNumber?: string
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

export interface OrderCustomization {
  logo?: string
  branding?: boolean
  packaging?: 'standard' | 'premium' | 'custom'
  message?: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Recipient {
  id: string
  name: string
  email: string
  phone?: string
  companyId: string
  preferences: RecipientPreferences
  addresses: Address[]
  optInStatus: boolean
}

export interface RecipientPreferences {
  categories: string[]
  allergies?: string[]
  dietaryRestrictions?: string[]
  sizes?: Record<string, string>
  interests?: string[]
}

export interface Campaign {
  id: string
  name: string
  type: CampaignType
  triggerConditions: TriggerCondition[]
  giftOptions: GiftOption[]
  budgetLimit: number
  status: CampaignStatus
  createdBy: string
  startDate: Date
  endDate?: Date
  metrics: CampaignMetrics
}

export type CampaignType = 
  | 'birthday'
  | 'anniversary'
  | 'milestone'
  | 'holiday'
  | 'custom'

export type CampaignStatus = 
  | 'draft'
  | 'active'
  | 'paused'
  | 'completed'
  | 'cancelled'

export interface TriggerCondition {
  type: string
  value: any
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than'
}

export interface GiftOption {
  giftId: string
  probability?: number
  customization?: OrderCustomization
}

export interface CampaignMetrics {
  totalSent: number
  totalSpent: number
  engagementRate: number
  satisfactionScore: number
  conversionRate?: number
}

export interface Analytics {
  totalGifts: number
  totalSpend: number
  satisfactionScore: number
  engagementRate: number
  recentActivity: ActivityItem[]
  trends: TrendData[]
}

export interface ActivityItem {
  id: string
  type: 'gift_sent' | 'gift_delivered' | 'campaign_started' | 'user_joined'
  description: string
  timestamp: Date
  userId?: string
  giftId?: string
  campaignId?: string
}

export interface TrendData {
  date: Date
  value: number
  metric: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: PaginationInfo
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  pages: number
}

export interface SearchFilters {
  category?: string[]
  priceMin?: number
  priceMax?: number
  occasion?: string[]
  vendor?: string[]
  inStock?: boolean
  rating?: number
}

export interface DropdownOption {
  value: string
  label: string
  icon?: string
}

export interface NavigationItem {
  name: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

export interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
} 