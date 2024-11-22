import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Imtiaz",
  lastName: "Raqib",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Lead Frontend Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Edmonton", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bengali", "Hindi", "Arabic", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of creativity and
      engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/imtiazraqib/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/imtiazraqib/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ImtiazRaqib",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:imtiaz@raqib.tech",
  },
];

const home = {
  label: "Home",
  title: `${person.name} | ${person.role} | Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Imtiaz Raqib, Frontend Developer</>,
  subline: (
    <>
      I'm Imtiaz, a CTO & Lead frontend engineer at <InlineCode>Arii</InlineCode>, where I craft a cutting-edge SaaS
      that enhances customer interactions. After hours, I build useless apps to make my life easier!
    </>
  ),
};
const about = {
  label: "About",
  title: "About Imtiaz Raqib | CTO & Lead Frontend Developer",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Innovative Staff Front-End Developer and CTO with expertise spanning software engineering and web application
        development. Leveraging over 4 years of technical leadership in front-end development roles, I specialize in
        crafting high-performance digital solutions using Angular, TypeScript, and modern web technologies. As a
        versatile software engineer, I architect scalable web applications that drive significant user engagement across
        multiple industries, combining deep technical proficiency with strategic product development skills. My
        experience encompasses full-stack front-end development, cloud infrastructure design, and enterprise-level
        software engineering, consistently delivering transformative technological solutions that enhance organizational
        capabilities.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Arii Guest Services Inc.",
        timeframe: "2023 - Present",
        role: "CTO & Lead Front-End Developer",
        achievements: [
          <>
            Spearheaded development of a game-changing digital guest experience platform using Angular, Ionic and
            Typescript, empowering users across industries with an intuitive, high-performance web and iOS application
            that boosted customer engagement by 40%.
          </>,
          <>
            Architected a scalable cloud infrastructure on AWS, integrating advanced marketing analytics to support
            rapid organizational growth and data-driven decision-making.
          </>,
          <>
            Orchestrated complex API integrations from industry-leading platforms like Google, Twilio, and AI
            technologies, strategically connecting sophisticated tools to unlock unprecedented system interoperability
            and organizational capabilities.
          </>,
          <>
            Engineered enterprise-grade CI/CD pipelines that achieved an exceptional 99.9% software uptime, ensuring
            reliable, seamless application performance.
          </>,
          <>
            Crafted a modern, responsive user interface that transformed user interaction, driving a 50% increase in
            user retention and setting new standards for digital experience design.
          </>,
          <>
            Reimagined team productivity by implementing robust code management systems, catalyzing a 30% improvement in
            development efficiency and collaborative performance.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //   {
          //     src: "/images/projects/project-01/cover-01.jpg",
          //     alt: "Once UI Project",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        company: "Karna Consulting Corp.",
        timeframe: "2021 - 2022",
        role: "CTO & Lead Front-End Developer",
        achievements: [
          <>
            Developed well-structured, responsive websites using HTML/CSS, leading to a 25% improvement in site
            performance.
          </>,
          <>
            Created UI/UX wireframes and design mockups, improving client satisfaction by 15% through enhanced user
            experiences.
          </>,
          <>Redesigned the company website, resulting in a 77% increase in leads and a 12% rise in lead conversion.</>,
          <>
            Adopted and implemented new technologies (Webflow, Integromat & Zapier), increasing project efficiency by
            20%.
          </>,
          <>
            Ensured software stability through rigorous testing and quality assurance, maintaining high performance and
            reliability.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Alberta, Dept. of Biological Sciences",
        timeframe: "2019 - 2020",
        role: "Front-End Developer",
        achievements: [
          <>Developed websites using HTML, CSS, JavaScript, and jQuery, enhancing user experience and functionality.</>,
          <>Provided front-end development using WordPress, resulting in a consistent and appealing user interface.</>,
          <>Improved site performance through responsive design and cross-browser compatibility.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Alberta",
        description: <>B.Sc Biological Sciences & Computing Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Technical",
        description: (
          <>
            HTML, CSS, JavaScript, Angular, TypeScript, React, Next.js, AWS, Supabase, Figma, Tailwind CSS, OOP, Agile,
            Scrum, Git, CI/CD, RESTful APIs, GraphQL
          </>
        ),
        images: [
          //   {
          //     src: "/images/projects/project-01/cover-02.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
          //   {
          //     src: "/images/projects/project-01/cover-03.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        title: "Soft",
        description: (
          <>
            Influence, Flexibility, Adaptability, Problem-Solving, Collaboration, Communication, Leadership, Time
            Management, Decision Making, Creativity, Critical Thinking, Emotional Intelligence
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Useless Apps | Imtiaz Raqib | Frontend Engineer",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery, blog, newsletter };
