import { educationData } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <span className="text-primary font-medium">{edu.year}</span>
              </div>
              <p className="text-lg mb-2">{edu.institution}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
