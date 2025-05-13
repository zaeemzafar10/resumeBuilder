import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { profileData } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747121763627/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/56687749-f93b-4dc5-82bb-d4652a10bfcb/original.png" 
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="mr-2" />
                <a href={`mailto:${profileData.email}`} className="hover:text-primary">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <FaPhone className="mr-2" />
                <a href={`tel:${profileData.phone}`} className="hover:text-primary">
                  {profileData.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-700 md:col-span-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>{profileData.location}</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary text-2xl">
                <FaGithub />
              </a>
              <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
