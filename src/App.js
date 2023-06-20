// Components/Screens.
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Services from "./Screens/Services";
import Skills from "./Screens/Skills";
import Projects from "./Screens/Projects";
import Testimonials from "./Screens/Testimonials";
import Contact from "./Screens/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;


/*

Portfolio Website:

1- Set up a React project using a create-react-app or any other preferred method.
2- Create different components for sections like header, projects, about me, and contact.
3- Design the layout and style the components using CSS or CSS frameworks like
Bootstrap or Material-UI.
4- Fetch and display project data from a JSON file or an API to showcase your
work.
5- Implement routing using React Router to navigate between different sections.
6- Deploy your portfolio website using platforms like Netlify or Vercel. 

*/