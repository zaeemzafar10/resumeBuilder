import { 
  FaCode, 
  FaServer, 
  FaMobileAlt, 
  FaCloud, 
  FaPaintBrush, 
  FaCogs 
} from "react-icons/fa";
import { skillsData } from "@/data/portfolioData";

export default function SkillsSection() {
  // Map skill titles to corresponding icons
  const getIconForSkill = (title: string) => {
    switch(title) {
      case "Frontend Development":
        return <FaCode className="text-primary text-3xl mb-4" />;
      case "Backend Development":
        return <FaServer className="text-primary text-3xl mb-4" />;
      case "Mobile Development":
        return <FaMobileAlt className="text-primary text-3xl mb-4" />;
      case "Cloud Services":
        return <FaCloud className="text-primary text-3xl mb-4" />;
      case "UI/UX Design":
        return <FaPaintBrush className="text-primary text-3xl mb-4" />;
      case "DevOps":
        return <FaCogs className="text-primary text-3xl mb-4" />;
      default:
        return <FaCode className="text-primary text-3xl mb-4" />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {getIconForSkill(skill.title)}
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
