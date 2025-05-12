import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { profileData } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
              alt="Professional headshot" 
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{profileData.name}</h1>
            <h2 className="text-2xl text-primary mb-6">{profileData.title}</h2>
            <p className="text-lg mb-6 text-gray-700">
              {profileData.bio}
            </p>
            <div className="flex space-x-4">
              <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary text-2xl">
                <FaGithub />
              </a>
              <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary text-2xl">
                <FaLinkedin />
              </a>
              <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
