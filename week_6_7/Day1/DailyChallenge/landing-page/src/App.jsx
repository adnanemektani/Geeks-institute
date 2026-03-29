import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { faRocket, faBolt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-10 bg-gray-100">
      <Card
        icon={<FontAwesomeIcon icon={faRocket} className="text-orange-500"/>}
        title="Fast Performance"
        description="Our landing page loads quickly and runs smoothly across all devices."
      />
      <Card
         icon={<FontAwesomeIcon icon={faBolt} className="text-yellow-400"/>}
         title="Easy to Use"
         description="Our landing page is simple and intuitive for users to navigate."
        />
      <Card 
         icon={<FontAwesomeIcon icon={faMobileAlt} className="text-red-500"/>}
         title="Modern Design"
         description="Our landing page features a clean, modern, and responsive design."
      />
      
      </div>
      <Contact/>
    </>
  );
}

export default App;
