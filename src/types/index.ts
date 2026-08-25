export interface CoursePrice {
  duration: string;
  price: string;
  isPopular?: boolean;
  tag?: string;
}

export interface Course {
  id: string;
  name: string;
  englishName: string;
  description: string;
  detailedPoints: string[];
  prices: CoursePrice[];
  badge?: string;
  bestFor: string;
}

export interface AreaInfo {
  name: string;
  subName: string;
  description: string;
  arrivalEstimate: string;
  landmarks: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  course: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
}

export interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface RegionData {
  regionCode: string;
  cityKo: string;
  cityEn: string;
  mainKeyword: string;
  pageTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  domain: string;
  phone: string;
  phoneFormatted: string;
  kakaoUrl: string;
  kakaoId: string;
  smsMessage: string;
  operatingHours: string;
  pricingPolicy: string;
  responseTime: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroParagraph: string;
  introTitle: string;
  introLead: string;
  introParagraphs: string[];
  areas: AreaInfo[];
  courses: Course[];
  faqs: FaqItem[];
  reviews: ReviewItem[];
  features: FeatureItem[];
  steps: StepItem[];
}
