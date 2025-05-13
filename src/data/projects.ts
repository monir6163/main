export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  year: string;
  category: string;
  features: string[];
  tags: string[];
  github?: string;
  demo?: string;
  technologies: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "car-rental-system",
    title: "Car Rental System",
    description:
      "A web application for managing car rentals and bookings. Three user roles: admin, provider, and customer.",
    longDescription: `Car Rental System is a web application that allows users to rent cars from various providers.The system supports three user roles: admin, provider, and customer. Admins can manage providers, cars, and bookings,
    while providers can add and manage their cars. Customers can search for cars, view availability, and make bookings.The application features a responsive design, user authentication, and real-time data updates. Built with modern web 
    technologies, the system offers a seamless user experience and efficient management of car rentals.
    `,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/mgvfzwwahzf5fbwzj3cn",
    year: "2024",
    category: "Fullstack",
    tags: ["Transportation", "Public Service", "Web App"],
    features: [
      "User authentication",
      "Role-based access control",
      "Real-time data updates",
      "Responsive design",
      "Search and filter functionality",
      "Booking management",
      "Provider dashboard",
    ],
    github:
      "https://github.com/monir6163/enjoy-car-rental-convert-php-to-nextjs",
    demo: "https://enjoycarrental.vercel.app/",
    technologies: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Mantine",
      "Mapbox",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "SWR",
    ],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/mgvfzwwahzf5fbwzj3cn",
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/odm3dmpa8yoekru7qxqi",
    ],
  },
  {
    id: "go-shop",
    title: "GoShop",
    description:
      "E-commerce platform for buying and selling products online. Features product listings, shopping cart, and payment processing.",
    longDescription: `GoShop is an e-commerce platform that enables users to buy and sell products online. The platform features product listings, shopping cart functionality, and secure payment processing. Users can browse products, add them to their cart, and complete the purchase using a Cash on delivary or Stripe or SslCommerze. The application offers a user-friendly interface, real-time product updates, and responsive design for seamless shopping experience.
    `,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/yfcui07avr0xbuffy2kw",
    year: "2024",
    category: "Fullstack",
    tags: ["E-commerce", "Online Shopping", "Web App"],
    features: [
      "Product listings",
      "Shopping cart",
      "Payment processing",
      "User authentication",
      "Real-time updates",
      "Responsive design",
      "Admin dashboard",
      "Order management",
      "Product search and filter",
      "Dynamic routing",
      "Product reviews and ratings",
      "Dynamic product categories on homepage",
      "Product infinity pagination",
      "After order confirmation email",
      "Order history",
      "many more...",
    ],
    github: "https://github.com/monir6163/goshop",
    demo: "https://goshop-five.vercel.app/",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "Node.js",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Axios",
      "Cloudinary",
    ],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/yfcui07avr0xbuffy2kw",
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/tc7vihf2eoafzkesowdr",
    ],
  },
  {
    id: "event-tickets-booking",
    title: "Event Tickets Booking",
    description:
      "A web application for booking tickets for events, concerts, and shows. Features event listings, ticket selection, and payment processing.",
    longDescription: `Event Tickets Booking is a web application that allows users to book tickets for events, concerts, and shows. The platform features event listings, ticket selection, and secure payment processing. Users can browse upcoming events, select tickets, and complete the booking process. The application offers a user-friendly interface, real-time event updates, and responsive design for seamless ticket booking experience.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/qtf5rrdmtbepdzrs8qig",
    year: "2023",
    category: "Fullstack",
    tags: ["Events", "Concerts", "Ticket Booking", "Web App"],
    features: [
      "Event listings",
      "Ticket selection",
      "Payment processing",
      "User authentication",
      "Real-time updates",
      "Responsive design",
      "Admin dashboard",
      "Event management",
      "Ticket inventory management",
      "Event search and filter",
      "Dynamic routing",
      "Event reviews and ratings",
    ],
    github: "https://github.com/monir6163/event-tricket-sell-backend",
    demo: "https://evente-tricket.vercel.app/",
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "Node.js",
      "Mongoose",
      "Firebase",
      "JWT",
      "Bcrypt",
      "Axios",
      "Context API",
    ],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/qtf5rrdmtbepdzrs8qig",
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/fl1a2sxe8xyvv58z1b3m",
    ],
  },
  {
    id: "savef-site",
    title: "SaveF.site - Facebook Video Downloader with Audio",
    description:
      "A web application for downloading Facebook videos with audio in high quality.",
    longDescription: `SaveF.site is a web application that allows users to download Facebook videos with audio in high quality. Users can paste the video URL and download the video in MP4 format with audio included. The application supports video downloads from public Facebook posts and offers a simple and intuitive user interface for easy video downloading. SaveF.site is built with modern web technologies and provides a fast and reliable video downloading experience.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/d77lfyocalnqerdm30yl",
    year: "2024",
    category: "Fullstack",
    tags: ["Video Downloader", "Facebook", "Web App", "Audio", "savef.site"],
    features: [
      "Video download with audio",
      "High-quality video downloads",
      "Simple and intuitive UI",
      "Fast and reliable downloads",
      "Responsive design",
      "Video thumbnail preview",
      "Video title and description",
      "one click download",
      "video to audio convert",
      "PWA",
    ],
    github: "https://github.com/monir6163/savef.site",
    demo: "https://savef.site/",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "FFmpeg",
      "Axios",
      "RapidAPI",
      "PWAs",
    ],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/d77lfyocalnqerdm30yl",
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/eqyzlia2du5wfy4utxiq",
    ],
  },
  {
    id: "bteb-result-hub",
    title: "BTEB Result Hub - Bangladesh Technical Education Board Result",
    description:
      "A web application for checking and downloading BTEB exam results in Bangladesh.",
    longDescription: `BTEB Result Hub is a web application that allows users to check and download exam results from the Bangladesh Technical Education Board (BTEB). Users can select the exam type, enter their roll number, and view their results online. The application provides a simple and user-friendly interface for checking BTEB exam results and downloading result sheets. BTEB Result Hub is built with modern web technologies and offers a fast and reliable result checking experience.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/zjwdatpvkxgtxqaa7fy1",
    year: "2021",
    category: "Fullstack",
    tags: ["Education", "Result Checking", "Web App", "BTEB", "Bangladesh"],
    features: [
      "Exam result checking",
      "Result download",
      "Simple and user-friendly UI",
      "Fast and reliable result checking",
      "Responsive design",
      "Roll number validation",
      "Exam type selection",
      "PDF result sheet download",
      "CGPA calculation",
      "Group-wise result",
      "Book list download",
      "Favorite result saving",
      "Bteb notice",
    ],
    github: undefined,
    demo: "https://btebresulthub.com/",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "PDF Parser",
      "Axios",
      "Cheerio",
    ],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/zjwdatpvkxgtxqaa7fy1",
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/qe3zoccjccio7viih6bt",
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/p7u6uxnijfxithkx1z7t",
    ],
  },

  // only frontend
  {
    id: "beautycare-salon",
    title: "BeautyCare Salon",
    description:
      "A beauty salon website design with a modern and responsive layout.",
    longDescription: `BeautyCare Salon is a beauty salon website design with a modern and responsive layout. The design features a clean and professional look with easy navigation and user-friendly interface. The layout includes sections for salon services, pricing, testimonials, and contact details. The design is fully responsive and optimized for mobile devices, providing a seamless user experience across all screen sizes.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/v1747122405/my_folio/cuwezop1gumjbxomcyrp.png",
    year: "2025",
    category: "Frontend",
    tags: ["Beauty", "Salon", "Web Design"],
    features: [
      "Responsive design",
      "Server-side rendering",
      "Landig Page",
      "Mobile Responsive",
      "SEO Friendly",
      "Fast Loading",
      "Nice Mobile Menu",
      "Smooth Scrolling",
      "AOS Animation",
    ],
    github: "https://github.com/monir6163/beautycare",
    demo: "https://beautycare-xi.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Aos"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/v1747122405/my_folio/cuwezop1gumjbxomcyrp.png",
    ],
  },
  {
    id: "dreamtalk-ai-landing-page",
    title: "DreamTalk AI - Landing Page",
    description:
      "A landing page design for DreamTalk AI, a platform for AI-powered conversations.",
    longDescription: `DreamTalk AI is a landing page design for a platform that offers AI-powered conversations. The design features a modern and responsive layout with sections for product features, testimonials, and contact information. The landing page is optimized for mobile devices and provides a seamless user experience. The design includes eye-catching visuals, smooth animations, and clear calls to action to engage users and encourage sign-ups.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/v1747122623/my_folio/z7ovqmavx1mgaiw7yzsp.png",
    year: "2025",
    category: "Frontend",
    tags: ["AI", "Landing Page", "Web Design"],
    features: [
      "Responsive design",
      "Server-side rendering",
      "Landig Page",
      "Mobile Responsive",
      "SEO Friendly",
      "Fast Loading",
      "Nice Mobile Menu",
      "Smooth Scrolling",
      "AOS Animation",
    ],
    github: "https://github.com/monir6163/DreamTalk-landing-page",
    demo: "https://dream-talk-landing-page.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Aos"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/v1747122623/my_folio/z7ovqmavx1mgaiw7yzsp.png",
    ],
  },
  {
    id: "digital-financial-service",
    title: "Digital Financial Service",
    description:
      "A web application for managing digital financial services and transactions.",
    longDescription: `Digital Financial Service is a web application that allows users to manage digital financial services and transactions. The platform features user authentication, account management, and transaction tracking. Users can create accounts, deposit and withdraw funds, and transfer money between accounts. The application offers a user-friendly interface, real-time transaction updates, and responsive design for seamless financial management.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/yfu5ablg4q78am4rqltx",
    year: "2024",
    category: "Frontend",
    tags: ["Finance", "Digital Services", "Web App"],
    features: [
      "Responsive design",
      "Server-side rendering",
      "Landig Page",
      "Mobile Responsive",
      "SEO Friendly",
      "Fast Loading",
      "Nice Mobile Menu",
    ],
    github: "https://github.com/monir6163/dhaka-client",
    demo: "https://nextjs14.netlify.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/yfu5ablg4q78am4rqltx",
    ],
  },
  {
    id: "school-management-system",
    title: "School website design",
    description: "A school website design with a modern and responsive layout.",
    longDescription: `School website design is a modern and responsive layout for a school website. The design features a clean and professional look with easy navigation and user-friendly interface. The layout includes sections for school information, courses, events, news, and contact details. The design is fully responsive and optimized for mobile devices, providing a seamless user experience across all screen sizes.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/rqrkpvgvxdjhgwwipdlh",
    year: "2024",
    category: "Frontend",
    tags: ["School", "Education", "Web Design"],
    features: [
      "Responsive design",
      "Modern layout",
      "User-friendly interface",
      "Easy navigation",
      "Mobile optimization",
      "SEO friendly",
      "Fast loading",
      "Contact form",
      "Social media links",
      "Gallery",
      "News",
    ],
    github: "https://github.com/monir6163/school",
    demo: "https://dhunat-nu-pilot-school.netlify.app/",
    technologies: ["React", "Material UI", "React Router-Dom"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/rqrkpvgvxdjhgwwipdlh",
    ],
  },
  {
    id: "hungry-zone",
    title: "Hungry Zone",
    description:
      "A food delivery website design with a modern and responsive layout.",
    longDescription: `Hungry Zone is a food delivery website design with a modern and responsive layout. The design features a clean and professional look with easy navigation and user-friendly interface. The layout includes sections for food categories, menu items, order tracking, and payment processing. The design is fully responsive and optimized for mobile devices, providing a seamless user experience across all screen sizes.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/wtyktxjddcpk5plaz6zb",
    year: "2024",
    category: "Frontend",
    tags: ["Food Delivery", "Restaurant", "Web Design"],
    features: ["Responsive design", "item searching", "add to cart"],
    github: "https://github.com/monir6163/hungry-food",
    demo: "https://hungry-zone-monir.netlify.app/",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/wtyktxjddcpk5plaz6zb",
    ],
  },

  {
    id: "iloopswap",
    title: "iLoopSwap - Buy, Sell, Swap",
    description:
      "A web application for buying, selling, and swapping items online.",
    longDescription: `iLoopSwap is a web application that allows users to buy, sell, and swap items online. The platform features product listings, user profiles, and messaging functionality. Users can create accounts, list items for sale, and browse products from other users. The application offers a user-friendly interface, real-time updates, and responsive design for seamless online shopping and trading experience.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/g3nlk36wglbbalfeq4vn",
    year: "2024",
    category: "Frontend",
    tags: ["BNB", "Swap", "Buy", "Sell", "Web App", "iLoopSwap"],
    features: [
      "Responsive design",
      "Animated",
      "User-friendly interface",
      "Connect wallet",
      "Buy, Sell, Swap",
    ],
    github: "https://github.com/monir6163/nft-fiverr",
    demo: "https://iloopswap.netlify.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Web3", "Ethers.js"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/g3nlk36wglbbalfeq4vn",
    ],
  },

  {
    id: "smart-whales-ai",
    title: "Smart Whales AI - Crypto Whales Tracker",
    description:
      "A web application for tracking cryptocurrency whales and their transactions.",
    longDescription: `Smart Whales AI is a web application that allows users to track cryptocurrency whales and their transactions. The platform features real-time data updates, whale alerts, and transaction history. Users can view the latest whale transactions, set up alerts for specific wallets, and analyze whale activity on the blockchain. The application offers a user-friendly interface, responsive design, and advanced data visualization for monitoring crypto whales.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/irom34xexckptdqmyoif",
    year: "2024",
    category: "Frontend",
    tags: [
      "BNB",
      "Swap",
      "Buy",
      "Sell",
      "Web App",
      "crypto",
      "Smart Whales AI",
    ],
    features: ["Responsive design", "Animated", "User-friendly interface"],
    github: "https://github.com/monir6163/fiverr",
    demo: "https://fiverr-sage.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/irom34xexckptdqmyoif",
    ],
  },

  // mobile app
  {
    id: "max-video-saver",
    title: "Max Video Saver",
    description:
      "A mobile application for downloading videos from various platforms.",
    longDescription: `Max Video Saver is a mobile application that allows users to download videos from various platforms. The app supports video downloads from popular social media sites and video-sharing platforms. Users can paste the video URL, select the desired quality, and download the video directly to their device. The application features a user-friendly interface, fast download speeds, and support for multiple video formats.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/v1747122782/my_folio/zc21fkayyry3frjmnfbv.png",
    year: "2024",
    category: "Mobile",
    tags: ["Job Search", "Career", "Mobile App"],
    features: [
      "Job listings",
      "Search and filter",
      "Responsive design",
      "Reading More MCQ",
      "Real-time Push Notification",
    ],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.monir6163.maxvideosaver",
    technologies: ["react-native", "expo", "react-navigation", "axios"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/v1747122782/my_folio/zc21fkayyry3frjmnfbv.png",
    ],
  },
  {
    id: "job-hunter-app",
    title: "Job Hunter",
    description:
      "A mobile app for finding job opportunities and applying for positions.",
    longDescription: `Job Hunter is a mobile application that helps users find job opportunities and apply for positions. The app features job listings from various companies, search and filter functionality, and application tracking. Users can create profiles, upload resumes, and apply for jobs directly from the app. Job Hunter offers a seamless job search experience and provides real-time updates on job applications and interview requests.`,
    image:
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/n0fb29pyf3fgdt4r8jx0",
    year: "2024",
    category: "Mobile",
    tags: ["Job Search", "Career", "Mobile App"],
    features: [
      "Job listings",
      "Search and filter",
      "Responsive design",
      "Reading More MCQ",
      "Real-time Push Notification",
    ],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.monir.jobhunter&pli=1",
    technologies: ["Java", "Android Studio", "Firebase"],
    gallery: [
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/n0fb29pyf3fgdt4r8jx0",
      "https://res.cloudinary.com/ddxqljriw/image/upload/f_auto,q_auto/q6hwajvjppztml0llhct",
    ],
  },
];
