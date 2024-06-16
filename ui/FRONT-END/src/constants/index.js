// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  facebook,
  instagram,
  twitter,
  github,
} from "../assets";

import Youtubeimg from "../assets//Youtubeimg.png";
import Travel from '../assets//Travel.png'
import logo_name from "../assets//logo_name.svg"
import LinkedIn from '../assets//LinkedIn.svg';
export {logo_name};
import Boostrap from "../assets/tech/Boostrap.png";
import netflix from "../assets/netflix.png";
import couple from "../assets/COUPLE.jpg";
import family from "../assets/family.jpg";
import friends from "../assets/friends.jpg"


// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "Book Package",
  },
  {
    id: "work",
    title: "Get Permit",
  },
  {
    id: "contact",
    title: "Contact-US",
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/sanidhyy/3d-portfolio/",
  // },
];

// Services
const services = [
  {
    title: "Permit & Heritage",
    icon: web,
  },
  {
    title: "Pickips and Drops",
    icon: reactjs,
  },
  {
    title: "AC Accomodation",
    icon: javascript,
  },
  {
    title: "Full Board Meals",
    icon: javascript,
  },
  {
    title: "snorkeling",
    icon: javascript,
  },
  {
    title: "snorkeling",
    icon: javascript,
  },


];

// Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },,
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "boostrap",
    icon : Boostrap,
  },
  {
    name:"figma",
    icon:figma
  }
];

// Experiences
const experiences = [
  {
    title: "React.js Developer",
    company_name: "H2",
    icon: reactjs,
    iconBg: "#383E56",
    date: "August 2023 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Handled frontend technologies with Reactjs, Tailwind css, Redux Toolkit.",
      "Gained valuable honed  expertise in HTML, CSS, JavaScript, React, Tailwind CSS, and Redux-toolkit through hands-on involvement in real time webapplication projects.",
      "Used git as a Version Control System.",
    ],
  },
  {
    title: "Developer",
    company_name: "H2",
    icon: reactjs,
    iconBg: "#383E56",
    date: "August 2023 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Handled frontend technologies with Reactjs, Tailwind css, Redux Toolkit.",
      "Gained valuable honed  expertise in HTML, CSS, JavaScript, React, Tailwind CSS, and Redux-toolkit through hands-on involvement in real time webapplication projects.",
      "Used git as a Version Control System.",
    ],
  },
  {
    title: "React.js ",
    company_name: "H2",
    icon: reactjs,
    iconBg: "#383E56",
    date: "August 2023 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Handled frontend technologies with Reactjs, Tailwind css, Redux Toolkit.",
      "Gained valuable honed  expertise in HTML, CSS, JavaScript, React, Tailwind CSS, and Redux-toolkit through hands-on involvement in real time webapplication projects.",
      "Used git as a Version Control System.",
    ],
  },
 
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
];

// Projects
const projects = [
  {
    name: "COOL FAMILY ",
    description:
      "starts from 30000",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: family,
    // source_code_link: "https://github.com/aiswarya-cs/YOUTUBE-CLONE",
    // live_site_link: "https://wondrous-wisp-8b7d2b.netlify.app",
  },
  {
    name: "COUPLE HONEYMOON",
    description:
      " STARTS FROM 30000 ",
    tags: [
      {
        name: "3-DAYS 4-NIGHTS",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "30000",
        color: "pink-text-gradient",
      },
    ],
    image: couple,
    // source_code_link: "https://github.com/aiswarya-cs/Travel_Tour",
    // live_site_link: "https://travelworld-067f28.netlify.app/",
  },
  {
    name: "FRIENDS ADVENTURE",
    description:
      "STARTS FROM 13000",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: friends,
    // source_code_link: "https://github.com/aiswarya-cs/Cinemix--A-Netflix-Clone.git",
    // live_site_link: "https://github.com/aiswarya-cs/Cinemix--A-Netflix-Clone.git",
  },
  
];

const socials = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/aiswarya_c.s___?igsh=MWhkZnBtcXU2anc1YQ==",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/aiswarya-cs",
  },
  {
    name:"LinkedIn",
    icon:LinkedIn,
    link:"https://www.linkedin.com/in/aiswarya-c-s-32a60a25a/ "
  }
];

export { services, technologies, experiences, testimonials, projects, socials };
