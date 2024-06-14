import { Member } from "@/lib/types";

export const navbarLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  { id: 3, title: "Resources", href: "/resources" },
  { id: 4, title: "Blog", href: "/blog" },
  { id: 5, title: "Contact Us", href: "/contact" },
] as const;

export const servicesData = [
  {
    id: 1,
    title: "Fractional CIO/CTO",
    description:
      "Technology is constantly evolving and, just like your business, must be treated as a journey not a destination. We focus on business outcomes and flexible frameworks to ensure your IT strategy is aligned with and can adjust to your changing business strategy.",
    imageUrl: "/images/image-1-service.jpg",
  },
  {
    id: 2,
    title: "Bespoke Software",
    description:
      "Your company is unique, from the vision, to the strategy, and especially the team. That uniqueness sets you apart from the competition, it also needs to be supported by your software. We specialize in developing high quality solutions that will fit the uniqueness of you and your team.",
    imageUrl: "/images/image-2-service.jpg",
  },
  {
    id: 3,
    title: "Data Driven Solutions",
    description:
      "One way to drive transparency is through data. Allowing a cleaner view of your data across the board can drive new insight and better decisions. Consolidating your data can provide a streamline experience for your company and your users.",
    imageUrl: "/images/image-3-service.jpg",
  },
  {
    id: 4,
    title: "Cloud Integration",
    description:
      "Embrace the power of cloud technology to drive efficiency and scalability in your business operations. We provide end-to-end cloud integration services, ensuring seamless migration, secure storage, and optimal performance. Whether you're adopting a hybrid, public, or private cloud strategy, our solutions are tailored to meet your specific needs.",
    imageUrl: "/images/image-4-service.jpg",
  },
];

export const problemsData = [
  {
    id: 1,
    title: "Our Software Development Team isn't delivering",
    solution:
      "We implement agile methodologies and provide project management oversight to streamline development processes, ensure timely delivery, and improve communication and collaboration within the team.",
  },
  {
    id: 2,
    title: "It takes too long for IT to resolve support tickets",
    solution:
      "We optimize IT support workflows and implement robust ticketing systems with automated routing and prioritization, reducing resolution times and enhancing overall efficiency.",
  },
  {
    id: 3,
    title: "We can't use new technology",
    solution:
      "We conduct technology assessments and provide strategic roadmaps for adopting and integrating new technologies, ensuring compatibility with existing systems and alignment with business goals.",
  },
  {
    id: 4,
    title: "The computers and systems are unstable and keep breaking",
    solution:
      "We offer comprehensive IT infrastructure audits and proactive maintenance plans, identifying and resolving vulnerabilities to enhance system stability and prevent downtime.",
  },
  {
    id: 5,
    title: "I'm not sure how much we should be spending on IT",
    solution:
      "We provide detailed IT budgeting and cost optimization services, analyzing your current expenditures and offering recommendations to align your IT spending with industry benchmarks and business objectives.",
  },
  {
    id: 6,
    title: "We can't find and retain the right talent for my team",
    solution:
      "We assist with talent acquisition and retention strategies, including targeted recruitment, professional development programs, and creating an attractive workplace culture to draw and keep top IT talent.",
  },
  {
    id: 7,
    title:
      "Our business model has changed, but we don't know how to change our systems",
    solution:
      "We deliver business process reengineering and system integration services, aligning your IT infrastructure with your new business model to support evolving strategies and operations.",
  },
  {
    id: 8,
    title: "We want to grow our teams using technology",
    solution:
      "We develop customized technology solutions that enable scalable team growth, including cloud-based collaboration tools, remote work infrastructure, and efficient onboarding processes to support your expanding workforce.",
  },
] as const;

export const testimonialsData = [
  {
    id: 1,
    quote:
      "We needed help with the launch of the new digital platform. It went better than expected!",
    fullName: "Nelly Flatcher",
    tag: "Client",
    imageUrl: "/images/client-1.jpg",
  },
  {
    id: 2,
    quote:
      "Unmatched expertise and an impressive portfolio. Working with TERIC is always a pleasure.",
    fullName: "Patrick Dyson",
    tag: "Client",
    imageUrl: "/images/client-2.jpg",
  },
  {
    id: 3,
    quote:
      "TERIC can provide that final push your project desperately needs. Enjoyed our collaboration!",
    fullName: "Ellen Williams",
    tag: "Client",
    imageUrl: "/images/client-3.jpg",
  },
] as const;

export const teamData: Member[] = [
  {
    id: 1,
    slug: "ryan-seifert",
    name: "Ryan Seifert",
    role: "CEO",
    imageUrl: "/images/ceo-image.png",
    linkedIn: "https://www.linkedin.com/in/ryangregoryseifert/",
    href: "/about/ryan-seifert",
    skills: [
      {
        id: 1,
        title: "Bussiness & Technology",
        value: 88,
        description:
          "Helping companies achieve their goals through the strategic application of technology",
      },
      {
        id: 2,
        title: "Change Management",
        value: 95,
        description:
          "Supporting the smooth adoption of software and technology into your organization",
      },
      {
        id: 3,
        title: "Dat Consolidation",
        value: 89,
        description:
          "Driving data-driven business decisions through transparency and communication",
      },
    ],
    bio: [
      {
        id: 1,
        paragraph:
          "Performance more often comes down to a culture challenge, rather an a technical one.",
      },
      {
        id: 2,
        paragraph:
          "I have an innate urge to understand how systems work; that urge lead me to get a name for myself at the very young age of 10. It quickly became known that I was not to be left alone with your new toys. The first RC car I encountered had the case off within the day; the first integrated circuit radio, I barely stopped at the shrink wrap. Most of the time everything worked again; with some new “improvements” that were, at least in my opinion, outstanding. The same curiosity and focus on systems has motivated me to understand not only technology, but management, leadership, and enabling change through an organization.",
      },
      {
        id: 3,
        paragraph:
          "My career has provided me wonderful opportunities for growth, ranging from building and deliberately setting a culture for development teams to leading companies through multiple acquisitions. The opportunities have taught me the extreme value on personal and team member growth, collaborative leadership, and team empowerment. I have found that IT and software provide a powerful impact on companies, but that impact must be supported though the culture. The alignment of technology and culture will allow the company to deliver the right solution and the right time.",
      },
      {
        id: 4,
        paragraph:
          "I enjoy making new acquaintances. Don’t hesitate to contact me if you want to talk technology, business, or just have a fun app idea.",
      },
    ],
  },
  {
    id: 2,
    slug: "mike-nydell",
    name: "Mike Nydell",
    role: "COO",
    imageUrl: "/images/coo-image.png",
    linkedIn: "https://www.linkedin.com/in/mikenydell/",
    href: "/about/mike-nydell",
    skills: [
      {
        id: 1,
        title: "Bussiness Intelligence",
        value: 85,
        description:
          "Actionable insights through data warehousing and analysis",
      },
      {
        id: 2,
        title: "Process Automation",
        value: 95,
        description:
          "Digitizing manual steps to increase productivity and reduce errors",
      },
      {
        id: 3,
        title: "Application Modernization",
        value: 89,
        description:
          "Updating aging software to address functional and security gaps in your business processes",
      },
    ],
    bio: [
      {
        id: 1,
        paragraph:
          "Mike has 30 years of experience in IT, software development, and technology consulting. In his roles as Technology Director, Technical Sales Lead, Architect, Developer, and Consultant has provided him valuable experiences in operations, training, sales,business development, and delivery.",
      },
      {
        id: 2,
        paragraph:
          "Mike received his Bachelor of Science in Electrical Engineering from the University of Connecticut. He currently resides in Porter Texas with his wife of 30 years and has two adult boys. He loves to golf, enjoys a good bourbon, and used to travel for fun.",
      },
    ],
  },
] as const;
