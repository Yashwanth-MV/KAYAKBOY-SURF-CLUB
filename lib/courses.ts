export interface PricingOption {
  label: string;
  price: string;
  advance: string;
  remaining: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  activities: string[];
  learnings: string;
}

export interface CourseFAQ {
  q: string;
  a: string;
}

export interface Course {
  slug: string;
  title: string;
  location: string;
  price: string; // Base price
  image: string;
  tag?: string;
  shortDesc: string;
  fullDesc: string;
  includes: string[];
  notIncludes?: string[];
  importantNotes: string[];
  pricingNote?: string;
  itinerary?: ItineraryDay[];
  pricingOptions?: PricingOption[];
  holidayPricing?: PricingOption[];
  wellnessPackage?: string[];
  timings?: string;
  whatToBring?: string[];
  faqs?: CourseFAQ[];
}

export const courses: Course[] = [
  {
    slug: '3-day-beginner-surfing',
    title: '3 Day Beginner Surfing + Stay + Wellness',
    location: 'Mulki, Mangalore',
    price: '₹7,100',
    image: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Popular',
    shortDesc: 'Includes 3 surf lessons, 2 nights stay, and wellness sessions.',
    fullDesc: "It's a 3-day beginner surf course. Includes 3 surf lessons, 1 lesson/day and 2 night accommodation in a river side resort. No cash, digital payments only. Our surf camp is primarily a surf-focused place designed around learning surfing. We maintain a calm and safe atmosphere with a 10:30 PM quiet time policy. Perfect for those looking to learn surfing and meet like-minded people in a chill, ocean-centered lifestyle.",
    includes: [
      '3 Surf sessions (1.5 hours each)',
      '2 Night Stay (Type can be chosen)',
      'Surf Board rental & necessary equipment',
      'Beach transfer from starting point',
      'Certified Instructor fees',
      'Certificate of completion',
      'Wi-Fi & Common work station',
      'Board games',
      'Wellness package access'
    ],
    wellnessPackage: [
      'Skate', 'Volleyball', 'Trampoline', 'Hammocks', 'Balance board', 'Slackline', 'Ice bath', 'Gym'
    ],
    notIncludes: [
      'Food during your stay',
      'Other water activities (kayaking, bioluminescence, etc.)'
    ],
    importantNotes: [
      'No cash, digital payments only.',
      'Refund is not available. Reschedule is possible (check policy).',
      'Participants under 18 must be accompanied by a parent.',
      'On-site accommodation for Indian citizens only. Foreigners please contact via Instagram.',
      'Quiet time from 10:30 PM to maintain a peaceful vibe.',
      'Alcohol and drugs are strictly prohibited.',
      'Mid-May to August is off-season (Monsoon).'
    ],
    pricingNote: 'Our pricing is very competitive in the market please don\'t call for a discount or final price, the price mentioned here is final and non-negotiable. Remaining charges settled during checkin via UPI only.',
    pricingOptions: [
      { label: 'Mixed A/C Dorm (7100 Total)', price: '₹7,100', advance: '₹1,500', remaining: '₹5,600' },
      { label: 'Female A/C Dorm (7600 Total)', price: '₹7,600', advance: '₹1,500', remaining: '₹6,100' },
      { label: 'Private Room (No Balcony)', price: '₹10,500', advance: '₹2,500', remaining: '₹8,000' },
      { label: 'Premium Private (Balcony)', price: '₹13,000', advance: '₹3,500', remaining: '₹9,500' }
    ],
    holidayPricing: [
      { label: 'Mixed A/C Dorm', price: '₹8,999', advance: '₹2,000', remaining: '₹6,999' },
      { label: 'Female A/C Dorm', price: '₹9,499', advance: '₹2,000', remaining: '₹7,499' },
      { label: 'Private Room (No Balcony)', price: '₹14,499', advance: '₹3,500', remaining: '₹10,999' },
      { label: 'Premium Private (Balcony)', price: '₹18,700', advance: '₹4,500', remaining: '₹14,200' }
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Introduction & First Ride',
        activities: [
          'Report by 6:30 AM & Registration',
          'Warmup & Safety Briefing',
          'Introduction to Surfing Do\'s & Don\'ts',
          '1st Surf Session (Catching waves with help)'
        ],
        learnings: 'The joy of being in the ocean! Body balance on the board while lying down. Understanding body placement and experiencing your first pop-ups.'
      },
      {
        day: 'Day 2',
        title: 'Paddling & Technique',
        activities: [
          'Warmup',
          'Introduction to paddling techniques',
          '2nd Surf Session (Minimal instructor help)',
          'Rest & Campus Facilities'
        ],
        learnings: 'How to body balance and paddle against/with waves. Improved pop-ups and catching waves with less assistance.'
      },
      {
        day: 'Day 3',
        title: 'Mastery & Lineup',
        activities: [
          'Warmup',
          'Paddling through waves to reach Lineup',
          '3rd Surf Session (Supervised)',
          'Graduation & Checkout by 10 AM'
        ],
        learnings: 'Comfortable body balance, efficient paddling, and reaching the lineup. Final practice and technique refinement.'
      }
    ],
    timings: 'Surf lessons: 6:30 AM - 11 AM. Check-in after 12 Noon. Check-out by 10 AM.',
    whatToBring: [
      'Sunscreen', 'Towel', 'Mosquito repellent (Odomos)', 'Sunglasses & Hat', 'Water bottle', 'Personal toiletries', 'Flip-flops', 'Nylon/UV clothes'
    ],
    faqs: [
      { q: 'Should we know swimming?', a: 'Not mandatory. We surf in shallow water (around 4ft deep), though it helps.' },
      { q: 'Is it safe for valuables?', a: 'Yes, CCTV is active. Lockers available in dorms; others can use the office.' },
      { q: 'What about food?', a: 'Food is not included. We have an outdoor cafe on-site (Cafe Shambhavi).' }
    ]
  },
  {
    slug: '1-day-introductory-surf-lesson',
    title: 'Surfing: 1 Day Introductory Surf Lesson',
    location: 'Mulki, Mangalore',
    price: '₹1,750',
    image: 'https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Beginner',
    shortDesc: 'Quick 1.5-hour session to get your feet wet and catch your first wave.',
    fullDesc: 'Join us for an exhilarating 1.5-hour surfing session at Mulki. Perfect for first-timers who want to feel the power of the ocean and experience the joy of catching their very first wave. Join us for surfing at Mulki. Online booking is required before you come.',
    includes: [
      '1 Surf session (1.5 hours)',
      'Surf Board rental and necessary equipment',
      'Certified Instructor fees',
      'Beach transfer from our starting point'
    ],
    notIncludes: [
      'Food during your stay',
      'Accommodation (must be booked separately)',
      'Other water activities'
    ],
    importantNotes: [
      'Advance payment of ₹750 required online.',
      'Remaining ₹1,000 to be paid on spot via UPI only.',
      'No cash, digital payments only.',
      'Participants under 18 must be accompanied by a parent.',
      'Refund is not available. Reschedule is possible.',
      'Exact session timing assigned upon registration.'
    ],
    pricingOptions: [
      { label: '1 Day Surf Lesson', price: '₹1,750', advance: '₹750', remaining: '₹1,000' }
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Introduction to Waves',
        activities: [
          'Report by 6:30 AM for registration',
          'Warmup & Theory on Beach',
          '1.5-hour Surf Session with Instructor help'
        ],
        learnings: 'Body balance on the board, understanding ocean safety, and catching your first waves.'
      }
    ],
    timings: 'Surf lessons: 6:30 AM - 10:30 AM (may extend on holidays).',
    whatToBring: [
      'Sunscreen', 'Towel', 'Sunglasses', 'Hat', 'Water bottle', 'Personal toiletries', 'Flip-flops', 'Nylon/UV clothes'
    ],
    faqs: [
      { q: 'Should we know swimming?', a: 'Not mandatory. We surf in shallow water (around 4ft deep).' },
      { q: 'What is the age limit?', a: 'Open to everyone aged 12 and above.' }
    ]
  },
  {
    slug: '5-days-surfing-stay-wellness',
    title: '5 Days Surfing + Stay + Wellness package',
    location: 'Mulki, Mangalore',
    price: '₹11,000',
    image: 'https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Top Rated',
    shortDesc: 'Includes 5 surf lessons, 4 nights stay, and wellness sessions.',
    fullDesc: "This is the top-rated course we have ever organized, a 100% recommended course to take at Mulki. It's a 5-day course including 5 surf lessons (1 lesson/day) and 4 nights accommodation in a riverside resort. Perfect for those looking to learn surfing, meet like-minded people and enjoy a simple, quiet, chill vibe.",
    includes: [
      '5 Surf sessions (1.5-2 hours each)',
      '4 Night Stay (Type can be chosen)',
      'Surf Board rental & necessary equipment',
      'Beach transfer from starting point',
      'Certified Instructor fees',
      'Certificate of completion',
      'Wi-Fi & Common work station',
      'Wellness package access'
    ],
    wellnessPackage: ['Skate', 'Volleyball', 'Trampoline', 'Hammocks', 'Balance board', 'Slackline', 'Ice bath', 'Gym'],
    notIncludes: ['Food during your stay', 'Other water activities'],
    importantNotes: [
      'No cash, digital payments only.',
      'Refund is not available. Reschedule is possible (check policy).',
      'Participants under 18 must be accompanied by a parent.',
      'Quiet time from 10:30 PM to maintain a peaceful vibe.',
      'Alcohol and drugs are strictly prohibited.',
      'On-site accommodation for Indian citizens only.'
    ],
    pricingNote: 'Our pricing is very competitive and non-negotiable. Remaining charges settled during checkin via UPI only.',
    pricingOptions: [
      { label: '4 Night A/C Dorm + 5 Lessons', price: '₹11,000', advance: '₹2,500', remaining: '₹8,500' },
      { label: '4 Night Private (No Balcony) + 5 Lessons', price: '₹18,000', advance: '₹4,500', remaining: '₹13,500' },
      { label: '4 Night Private (Balcony) + 5 Lessons', price: '₹20,000', advance: '₹5,000', remaining: '₹15,000' },
      { label: '4 Night Premium Private (Balcony) + 5 Lessons', price: '₹23,000', advance: '₹6,000', remaining: '₹17,000' }
    ],
    holidayPricing: [
      { label: '4 Night Tent Stay + 5 Lessons', price: '₹12,000', advance: '₹3,000', remaining: '₹9,000' },
      { label: '4 Night A/C Dorm + 5 Lessons', price: '₹13,500', advance: '₹3,500', remaining: '₹10,000' },
      { label: '4 Night Private (No Balcony)', price: '₹22,000', advance: '₹5,500', remaining: '₹16,500' },
      { label: '4 Night Private (Balcony)', price: '₹26,000', advance: '₹6,500', remaining: '₹19,500' },
      { label: '4 Night Premium Private (Balcony)', price: '₹30,000', advance: '₹7,500', remaining: '₹22,500' }
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'The Joy of Ocean',
        activities: ['Report by 6:30 AM', 'Introduction to surfing', '1st Surf Session'],
        learnings: 'Body balance while lying down, do\'s and don\'ts, and first pop-ups with supervision.'
      },
      {
        day: 'Day 2',
        title: 'Paddling Techniques',
        activities: ['6:30 AM Warmup', '2nd Surf Session (Minimal help)', 'Rest & Socialize'],
        learnings: 'Paddling against and with the wave. Better pop-ups and body balance.'
      },
      {
        day: 'Day 3',
        title: 'Reaching the Lineup',
        activities: ['6:30 AM Warmup', '3rd Surf Session (Supervised)', 'Lineup practice'],
        learnings: 'Paddling through waves to reach the lineup. More efficient and confident pop-ups.'
      },
      {
        day: 'Day 4',
        title: 'Independent Surfing',
        activities: ['6:30 AM Warmup', '4th Surf Session (Independent)', 'Wave identification'],
        learnings: 'Baby steps toward independence. Learning swell reading and pop-up timing.'
      },
      {
        day: 'Day 5',
        title: 'Efficiency & Confidence',
        activities: ['6:30 AM Warmup', '5th Surf Session', 'Checkout by 10 AM'],
        learnings: 'Becoming a more efficient and confident surfer. Appreciation for consistency.'
      }
    ],
    timings: 'Surf lessons: 6:30 AM - 11 AM (extending to 1 PM on holidays).',
    whatToBring: ['Sunscreen', 'Towel', 'Mosquito repellent', 'Sunglasses', 'Hat', 'Water bottle', 'Nylon/UV clothes'],
    faqs: [
      { q: 'Is swimming mandatory?', a: 'Not necessary, but helps. We surf in shallow water (~4ft deep).' },
      { q: 'Is there WiFi?', a: 'Yes, high-speed WiFi and co-working space are available for WFH.' }
    ]
  },
  {
    slug: '7-days-surfing-stay-wellness',
    title: '7 Days Surfing + Stay + Wellness package',
    location: 'Mulki, Mangalore',
    price: '₹15,500',
    image: 'https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Mastery',
    shortDesc: 'Master the waves with our most comprehensive week-long surf immersion.',
    fullDesc: "The ultimate surfing retreat. Spend a full week living the surfer lifestyle, with daily lessons, physical conditioning, and deep immersion into ocean culture. You came as a beginner — you leave as a surfer. Includes 7 surf lessons (1 lesson/day) and 6 nights accommodation in a riverside resort.",
    includes: [
      '7 Surf sessions (1.5 hours each)',
      '6 Night Stay (Type can be chosen)',
      'Surf Board rental & safety equipment',
      'Beach transfer from starting point',
      'Certified Instructor fees',
      'Certificate of completion',
      'Wi-Fi & Common work station',
      'Wellness package access'
    ],
    wellnessPackage: ['Skate', 'Volleyball', 'Trampoline', 'Hammocks', 'Balance board', 'Slackline', 'Ice bath', 'Gym'],
    notIncludes: ['Food during your stay', 'Other water activities'],
    importantNotes: [
      'No cash, digital payments only.',
      'Refund is not available. Reschedule is possible (check policy).',
      'Participants under 18 must be accompanied by a parent.',
      'Quiet time from 10:30 PM to maintain a peaceful vibe.',
      'Alcohol and drugs are strictly prohibited.',
      'On-site accommodation for Indian citizens only.'
    ],
    pricingNote: 'Our pricing is final and non-negotiable. Remaining charges settled during checkin via UPI only.',
    pricingOptions: [
      { label: '6 Night A/C Dorm + 7 Lessons', price: '₹15,500', advance: '₹3,500', remaining: '₹12,000' },
      { label: '6 Night Female A/C Dorm + 7 Lessons', price: '₹16,500', advance: '₹3,500', remaining: '₹13,000' }
    ],
    holidayPricing: [
      { label: '6 Night Tent Stay + 7 Lessons', price: '₹16,000', advance: '₹4,000', remaining: '₹12,000' },
      { label: '6 Night A/C Dorm + 7 Lessons', price: '₹18,000', advance: '₹4,500', remaining: '₹13,500' },
      { label: '6 Night Female A/C Dorm + 7 Lessons', price: '₹19,000', advance: '₹5,000', remaining: '₹14,000' }
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Joy of the Ocean',
        activities: ['6:30 AM Report', 'Intro & Theory', '1st Surf Session'],
        learnings: 'Body balance, ocean safety, and first pop-ups with supervision.'
      },
      {
        day: 'Day 2',
        title: 'Paddling Technique',
        activities: ['6:30 AM Warmup', '2nd Surf Session (Minimal help)'],
        learnings: 'Paddling against/with waves. Improved pop-ups and balance.'
      },
      {
        day: 'Day 3',
        title: 'The Lineup',
        activities: ['6:30 AM Warmup', '3rd Surf Session (Supervised)'],
        learnings: 'Paddling through waves to reach the lineup. Efficient pop-ups.'
      },
      {
        day: 'Day 4',
        title: 'Independent Steps',
        activities: ['6:30 AM Warmup', '4th Surf Session (Independent)'],
        learnings: 'Baby steps toward independence. Reading swell and timing.'
      },
      {
        day: 'Day 5',
        title: 'Consistency & Practice',
        activities: ['6:30 AM Warmup', '5th Surf Session'],
        learnings: 'Refining all skills. Understanding consistency in surfing.'
      },
      {
        day: 'Day 6',
        title: 'Ocean Understanding',
        activities: ['6:30 AM Warmup', '6th Surf Session (Green waves)'],
        learnings: 'Spotting channels and peaks. Catching unbroken (green) waves.'
      },
      {
        day: 'Day 7',
        title: 'Living as a Surfer',
        activities: ['6:30 AM Warmup', 'Final Fun Session', 'Graduation'],
        learnings: 'Mastering wave selection, control, and surf etiquette. You are a surfer!'
      }
    ],
    timings: 'Surf lessons: 6:30 AM - 11 AM (extended on holidays).',
    whatToBring: ['Sunscreen', 'Towel', 'Mosquito repellent', 'Sunglasses', 'Hat', 'Water bottle', 'Nylon/UV clothes'],
    faqs: [
      { q: 'Is swimming mandatory?', a: 'Not necessary. We surf in shallow water (~4ft deep).' },
      { q: 'Is WiFi available?', a: 'Yes, high-speed WiFi for work-from-home is provided.' }
    ]
  },
  {
    slug: 'bangalore-kayaking-snowflake',
    title: 'Bangalore Kayaking - Into the snowflake',
    location: 'Hoskote, Bangalore',
    price: '₹365',
    image: 'https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'New Location',
    shortDesc: 'Escape the city rush with a 50-minute peaceful kayaking trip in Hoskote.',
    fullDesc: 'Reconnect with nature on a peaceful yet exciting kayaking trip in the serene Hoskote area, just outside Bangalore. Whether you\'re a seasoned paddler or a first-timer, our guided sessions on the tranquil lake offer the perfect opportunity to unwind and explore. We kayak even in the rain and it\'s 100% safe.',
    includes: [
      '50-minute Kayaking session',
      'Quality Kayak & Life Jacket',
      'Basic Training & Safety Briefing',
      'Instructor-guided trip',
      'Free Photos (shared via Google Drive)'
    ],
    notIncludes: [
      'Stay facility (Only kayaking trip)',
      'Food/Drinks',
      'Personal waterproof gear'
    ],
    importantNotes: [
      'Price is ₹365 per person (GST extra).',
      'No cash, digital payments only.',
      'Report by approaching the grey container at the venue.',
      'Return to docking point within 50 minutes to avoid fines.',
      'Pets allowed (friendly only, requires a ticket).',
      'Weight limit: 105kg per person.',
      'Kids allowed from 5+ years (requires ticket).'
    ],
    pricingOptions: [
      { label: 'Standard Kayaking Session', price: '₹365', advance: '₹365', remaining: '₹0' },
      { label: 'Pet Ticket', price: '₹365', advance: '₹365', remaining: '₹0' }
    ],
    itinerary: [
      {
        day: 'Session',
        title: '50-Min Paddle',
        activities: [
          'Arrival & Registration at the grey container',
          'Safety Briefing & Equipment Check',
          'Launch into the Hoskote Lake',
          '50 minutes of guided exploration',
          'Return to dock & Photo sharing setup'
        ],
        learnings: 'Basic paddling strokes, maneuvering a kayak, and enjoying the tranquility of the lake.'
      }
    ],
    timings: 'Daily morning and afternoon slots (see booking for specifics).',
    whatToBring: [
      'Water bottle', 'Cap/Hat', 'Comfortable outdoor wear', 'Avoid tight jeans', 'Change of clothes (can change in washroom)'
    ],
    faqs: [
      { q: 'Is swimming mandatory?', a: 'No, life jackets are provided and the trip is guided.' },
      { q: 'Are pets allowed?', a: 'Yes, friendly pets are welcome. 1 pet per person, needs a ticket.' }
    ]
  },
  {
    slug: 'mulki-1-hour-kayak-tour',
    title: 'Mulki, Udupi 1 Hour Kayak Tour',
    location: 'Mulki, Mangalore',
    price: '₹400',
    image: 'https://images.pexels.com/photos/1010373/pexels-photo-1010373.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Beginner Friendly',
    shortDesc: 'Paddle around an isolated island in river Shambhavi. Amazing for sunrise/sunset.',
    fullDesc: 'On this 1-hour trip, we will take you around an isolated island in river Shambhavi at Mulki. Whether it\'s the calm 6:30 AM sunrise trip, the bright 8:00 AM daylight tour, or the amazing 3:30 PM sunset paddle, you\'ll witness the river\'s beauty like never before. Difficulty: 4/10 | Fun: 10/10.',
    includes: [
      '1 Hour Kayak & Lifejacket rent',
      'Local Guide through the trip',
      'Kayaking permission',
      'First Aid Kit',
      'Free Photos (shared via Drive/WhatsApp)'
    ],
    notIncludes: [
      'Food/Drinks',
      'Accommodation',
      'Personal waterproof gear'
    ],
    importantNotes: [
      'Total cost ₹400 (₹100 advance, ₹300 on spot).',
      'Special student price ₹300/person (Requires student ID).',
      'Group discounts: 5+ people (5%), 10+ people (10%).',
      'No cash, digital payments only.',
      'Alcohol and drugs are strictly prohibited.',
      'Refund is not available. Reschedule is possible.'
    ],
    pricingOptions: [
      { label: 'Standard Kayak Tour', price: '₹400', advance: '₹100', remaining: '₹300' },
      { label: 'Student Discount (With ID)', price: '₹300', advance: '₹100', remaining: '₹200' }
    ],
    itinerary: [
      {
        day: 'Session',
        title: 'Shambhavi River Paddle',
        activities: [
          'Reporting at KayakBoy location',
          'Safety Briefing & Equipment',
          'Paddle in backwaters around nearby island',
          'Jump from kayak (optional fun!)',
          'Kayak back to docking point'
        ],
        learnings: 'Basic kayaking strokes, maneuvering in backwaters, and river safety.'
      }
    ],
    timings: 'Daily slots: 6:30 AM, 8:00 AM, 3:30 PM.',
    whatToBring: [
      'Cap/Hat', 'Comfortable clothes for water', 'Extra clothes to change', 'Water bottle'
    ],
    faqs: [
      { q: 'Is swimming mandatory?', a: 'No, life jackets are provided and the trip is guided.' },
      { q: 'Is there a student discount?', a: 'Yes! ₹300 per person with a valid student ID.' }
    ]
  },
  {
    slug: 'wake-surfing-motor-boat',
    title: 'Wake Surfing using Motor Boat',
    location: 'Mulki, Mangalore',
    price: '₹885',
    image: 'https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Adrenaline',
    shortDesc: 'Try exciting wake surfing with motor boat assistance. 30-min session.',
    fullDesc: 'Experience the thrill of wake surfing! This exciting activity uses motor boat assistance to create the perfect wake for you to ride. Includes a 15-minute land lesson to master the basics and 15 minutes of exhilarating water time. Minimum 2 participants required for this activity.',
    includes: [
      '15-minute Land Lesson',
      '15-minute Water Time',
      'Motor Boat assistance',
      'Safety equipment & Surfboard',
      'Certified Instructor'
    ],
    notIncludes: [
      'Food/Drinks',
      'Personal waterproof gear',
      'Transportation to venue'
    ],
    importantNotes: [
      'Total cost ₹885 (₹200 advance, ₹685 on spot).',
      'Minimum 2 participants required to book.',
      'No cash, digital payments only.',
      'Refund is not available. Reschedule is possible.',
      'Arrive 15 minutes before your slot.'
    ],
    pricingOptions: [
      { label: 'Standard Wake Surf Session', price: '₹885', advance: '₹200', remaining: '₹685' }
    ],
    itinerary: [
      {
        day: 'Session',
        title: 'Wake & Ride',
        activities: [
          'Briefing & Equipment fitting',
          '15-minute technique lesson on land',
          'Launch with the motor boat',
          '15 minutes of water time (riding the wake)',
          'Return to dock'
        ],
        learnings: 'Body positioning for wake surfing, balancing while being towed, and carving the wake.'
      }
    ],
    timings: 'Available slots: 7:00 AM - 5:00 PM (Subject to weather).',
    whatToBring: [
      'Swimwear/Nylon clothes', 'Towel', 'Water bottle', 'Sunscreen'
    ],
    faqs: [
      { q: 'Is it for beginners?', a: 'Yes! The 15-minute land lesson covers everything you need to start.' },
      { q: 'What if I am alone?', a: 'A minimum of 2 participants is required. You can join others if a slot is open.' }
    ]
  },
  {
    slug: 'bioluminescence-kayaking',
    title: 'Bioluminescence Kayaking',
    location: 'Mulki, Mangalore',
    price: '₹750',
    image: 'https://images.pexels.com/photos/1234321/pexels-photo-1234321.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Seasonal (Jan-Apr)',
    shortDesc: 'Magical 1-hour night kayaking experience in the backwaters.',
    fullDesc: 'Experience the magical glow of bioluminescence in the Mulki backwaters! This seasonal night kayaking trip (January to April) takes you through the calm waters under the stars. While bioluminescence is a natural phenomenon whose intensity varies, we promise an unforgettable experience on the water.',
    includes: [
      '45 min - 1 hour Night Kayaking',
      'Kayak & Lifejacket rent',
      'Expert Night Guide',
      'Safety briefing'
    ],
    notIncludes: [
      'Food/Drinks',
      'Transportation',
      'Photography (Hard to capture at night)'
    ],
    importantNotes: [
      'Total cost ₹750 (₹250 advance, ₹500 on spot).',
      'Season: January to April only.',
      'Bioluminescence visibility depends on natural factors (moonlight, water).',
      'No cash, digital payments only.',
      'Refund is not available. Reschedule is possible.'
    ],
    pricingOptions: [
      { label: 'Night Kayak Session', price: '₹750', advance: '₹250', remaining: '₹500' }
    ],
    itinerary: [
      {
        day: 'Session',
        title: 'Starry Glow Paddle',
        activities: [
          'Night reporting at the KayakBoy location',
          'Safety briefing for night paddling',
          'Launch into the dark backwaters',
          'Explore areas with bioluminescent activity',
          'Return to dock'
        ],
        learnings: 'Night navigation basics and understanding the science of bioluminescence.'
      }
    ],
    timings: 'Seasonal night slots (Check booking for availability).',
    whatToBring: [
      'Water bottle', 'Extra clothes', 'Mosquito repellent', 'Change of clothes'
    ],
    faqs: [
      { q: 'Can we see it every night?', a: 'Visibility varies based on moonlight and water conditions. It is a natural phenomenon.' },
      { q: 'Is it safe at night?', a: 'Yes, our guides are experts in night navigation and life jackets are mandatory.' }
    ]
  },
  {
    slug: '25km-kayaking-camping-expedition',
    title: '25km Kayaking + Camping - Explore River Shambhavi',
    location: 'Mulki, Mangalore',
    price: '₹3,500',
    image: 'https://images.pexels.com/photos/1010373/pexels-photo-1010373.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Adventure Expedition',
    shortDesc: 'A 2-day kayaking odyssey with riverside camping and bonfire.',
    fullDesc: 'Only of its kind in India! This 2-day kayaking adventure takes you through 25km of the beautiful Shambhavi River. From basic training and rescue skills to long-distance paddling and riverside camping, this is a trip you will remember forever. Minimum 5 participants required.',
    includes: [
      '1 Night Tent Stay',
      '25km Kayaking (2 intense sessions)',
      'Basic Kayak Training & Rescue Skills',
      'Snacks during the trip',
      'Bonfire & Evening Refreshments',
      'Outdoor facilities (Volleyball, Trampoline, etc.)'
    ],
    notIncludes: [
      'Lunch & Dinner (Pay on spot)',
      'Personal toiletries',
      'Digital photos (if not specified)'
    ],
    importantNotes: [
      'Total cost ₹3,500 (₹1,000 advance, ₹2,500 on spot).',
      'Minimum 5 participants required for the trip.',
      'No cash, digital payments only.',
      'Alcohol and drugs are strictly prohibited.',
      'Non-swimmers are welcome (Life jackets mandatory).',
      'Modern western toilets available on site.'
    ],
    pricingOptions: [
      { label: '2-Day Expedition & Camping', price: '₹3,500', advance: '₹1,000', remaining: '₹2,500' }
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Training & Long Paddle',
        activities: [
          'Basic training (Paddling, Rescue, Self-rescue)',
          '8km paddle to Palimar Dam',
          'Riverside lunch at a local house',
          '5km return paddle',
          'Sunset at beach or river point',
          'Campfire & Tent pitching'
        ],
        learnings: 'Mastering the sit-on-top kayak, self-rescue techniques, and endurance paddling.'
      },
      {
        day: 'Day 2',
        title: 'Beach Sunrise Paddle',
        activities: [
          '5:00 AM Wake up',
          'Kayaking session to the beach',
          'Explore beach surroundings',
          'Return by 10:00 AM for breakfast',
          'Checkout & Farewell'
        ],
        learnings: 'Early morning navigation and experiencing the river-to-sea transition.'
      }
    ],
    timings: 'Starts Day 1 morning, finishes Day 2 by 11 AM.',
    whatToBring: [
      'Cap & Sunglasses', 'Full-sleeve T-shirt & Full-length lowers', 'Nylon/Quick-dry clothes', 'Toothbrush/Paste', 'Sunscreen'
    ],
    faqs: [
      { q: 'Can non-swimmers join?', a: 'Yes! Life jackets and guides make it 100% safe for everyone.' },
      { q: 'What is the camping like?', a: 'We camp on our 1-acre private riverside property with modern western toilets.' }
    ]
  },
  {
    slug: 'motor-boat-ride-backwaters',
    title: '1 Hour Motor Boat Ride in Backwaters',
    location: 'Mulki, Mangalore',
    price: '₹3,000',
    image: 'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Group Activity',
    shortDesc: 'Relaxing 10km boat ride through the scenic Mulki backwaters.',
    fullDesc: 'Take a relaxing 1-hour motor boat ride through the beautiful Mulki backwaters. Perfect for families and groups, this 10km journey (5km each way) lets you soak in the scenery without the effort of paddling. Witness the lush greenery and calm river life from the comfort of our motor boat.',
    includes: [
      '1 Hour Motor Boat Ride (10km total)',
      'Boat Captain & Safety gear',
      'Life jackets for all participants',
      'Sightseeing along the Shambhavi River'
    ],
    notIncludes: [
      'Food/Drinks',
      'Digital photos',
      'Personal waterproof gear'
    ],
    importantNotes: [
      'Price: ₹3,000 + 18% GST (For 1-6 people).',
      'Groups > 8 people: ₹400/person + GST extra.',
      'No cash, digital payments only.',
      'Refund is not available. Reschedule is possible.',
      'Arrive 15 minutes before your slot.'
    ],
    pricingOptions: [
      { label: 'Private Boat (Up to 6 People)', price: '₹3,540', advance: '₹540', remaining: '₹3,000' }
    ],
    itinerary: [
      {
        day: 'Session',
        title: 'River Cruise',
        activities: [
          'Boarding at the dock',
          'Safety briefing by the Captain',
          '5km cruise into the deep backwaters',
          'Scenic turnaround and 5km return trip',
          'Disembarkation'
        ],
        learnings: 'Local geography of the Shambhavi River and backwater ecosystem.'
      }
    ],
    timings: 'Available slots: 7:00 AM - 5:00 PM.',
    whatToBring: [
      'Sunscreen', 'Cap/Hat', 'Water bottle', 'Camera for scenery'
    ],
    faqs: [
      { q: 'Is it safe for kids?', a: 'Absolutely! It is a stable boat and life jackets are provided for all ages.' },
      { q: 'Can we book for more than 6 people?', a: 'Yes, for more than 8 people, there is an extra charge of ₹400 per person.' }
    ]
  }
]






