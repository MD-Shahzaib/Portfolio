// icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaNpm, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiFirebase, SiExpress, SiRedux, SiMongodb, SiPostman, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
// projects images
import Project1 from "./Images/about.jpg";
// testimonial images
import TestiImage1 from './Images/testimonials1.jpg';
import TestiImage2 from './Images/testimonials2.jpg';

// navigation
export const navigation = [
    {
        name: 'Home',
        href: 'home',
    },
    {
        name: 'About',
        href: 'about',
    },
    {
        name: 'Services',
        href: 'services',
    },
    {
        name: 'Skills',
        href: 'skills',
    },
    {
        name: 'Portfolio',
        href: 'projects',
    },
    {
        name: 'Contact',
        href: 'contact',
    },
];

// services
export const services = [
    {
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>,
        name: 'Web Design',
        description: 'I will create an attractive professional website design using HTML, CSS, javascript and make your website fully responsive and mobile friendly.',
    },
    {
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>,
        name: 'Web Development',
        description: 'I will design and develop a professional, interactive and modern website. Solve your bugs or help you to implement new feature in your website.',
    },
    {
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21.81 12.74l-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48a.395.395 0 00-.35-.2c-.05 0-.1.01-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01a.408.408 0 00-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06-.95-.38a.401.401 0 00-.5.17l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63a.39.39 0 00-.1.51l.85 1.48c.07.13.21.2.35.2.05 0 .1-.01.15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06.95.38a.401.401 0 00.5-.17l.85-1.48a.39.39 0 00-.1-.51zM18 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1z"></path></svg>,
        name: 'Mobile Application',
        description: 'I will develop mobile app using React-Native for both IOS and android, Provide a very responsive and attractive design along-with a bug-free code.',
    },
];

// skill
export const skills = [
    {
        icon: <FaHtml5 />,
        title: "HTML5"
    },
    {
        icon: <FaCss3Alt />,
        title: "CSS3"
    },
    {
        icon: <FaJs />,
        title: "JavaScript"
    },
    {
        icon: <FaBootstrap />,
        title: "Bootstrap"
    },
    {
        icon: <SiTailwindcss />,
        title: "Tailwind"
    },
    {
        icon: <FaReact />,
        title: "Reactjs"
    },
    {
        icon: <FaNode />,
        title: "Nodejs"
    },
    {
        icon: <SiExpress />,
        title: "Expressjs"
    },
    {
        icon: <SiMongodb />,
        title: "MongoDB"
    },
    {
        icon: <SiFirebase />,
        title: "Firebase"
    },
    {
        icon: <SiRedux />,
        title: "Redux"
    },
    {
        icon: <TbBrandReactNative />,
        title: "React-Native"
    },
    {
        icon: <FaGithub />,
        title: "Github"
    },
    {
        icon: <FaNpm />,
        title: "NPM"
    },
    {
        icon: <SiPostman />,
        title: "Postman"
    },
];

// projects
export const projects = [
    {
        image: Project1,
        category: "THE SUBTITLE",
        title: "Shooting Stars",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        code: "https://github.com/MD-Shahzaib",
        preview: "https://md-shahzaib.netlify.app",
    },
    {
        image: Project1,
        category: "THE SUBTITLE",
        title: "Shooting Stars",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        code: "https://github.com/MD-Shahzaib",
        preview: "https://md-shahzaib.netlify.app",
    },
    {
        image: Project1,
        category: "THE SUBTITLE",
        title: "Shooting Stars",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        code: "https://github.com/MD-Shahzaib",
        preview: "https://md-shahzaib.netlify.app",
    },
    {
        image: Project1,
        category: "THE SUBTITLE",
        title: "Shooting Stars",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        code: "https://github.com/MD-Shahzaib",
        preview: "https://md-shahzaib.netlify.app",
    },
    {
        image: Project1,
        category: "THE SUBTITLE",
        title: "Shooting Stars",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        code: "https://github.com/MD-Shahzaib",
        preview: "https://md-shahzaib.netlify.app",
    },
    {
        image: Project1,
        category: "THE SUBTITLE",
        title: "Shooting Stars",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        code: "https://github.com/MD-Shahzaib",
        preview: "https://md-shahzaib.netlify.app",
    },
];

// testimonials
export const testimonials = [
    {
        authorImg: TestiImage1,
        authorText: 'As a web developer, I had the pleasure of collaborating with "MD-Shahzaib" on a project, and I was thoroughly impressed. Their expertise in full-stack web development and attention to detail in designing user interfaces were instrumental in delivering a seamless and visually stunning website. "MD-Shahzaib" is a valuable asset to any team, and I highly recommend their services.',
        authorName: 'John Doe',
        authorPosition: 'Senior Web Developer',
    },
    {
        authorImg: TestiImage2,
        authorText: 'I had the privilege of working with "MD-Shahzaib" on a web development project, Their proficiency in technologies like Node.js, Express.js, and React.js, coupled with their strong problem-solving skills, made the development process efficient and effective. "MD-Shahzaib" is a dedicated professional who goes above and beyond to ensure client satisfaction.',
        authorName: 'Jane Smith',
        authorPosition: 'UX Designer',
    }
];

// social
export const social = [
    {
        icon: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>,
        href: 'https://www.facebook.com/CodeWithShahzaib',
    },
    {
        icon: <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>,
        href: 'https://github.com/MD-Shahzaib',
    },
    {
        icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>,
        href: 'https://www.instagram.com/msacoder',
    },
    {
        icon: <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg>,
        href: 'https://www.linkedin.com/in/md-shahzaib/',
    },
];