
import { Users, Target, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Innovate Pioneer</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Bridging the gap between academia and industry through innovative education solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Mission Section with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision & Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Innovate Pioneer envisions bridging the gap between academia and industry. We understand the pain of unemployment and are trying to wipe off the words of impossible and unemployment from the brains of youth by training and turning them into diamonds.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We train students in trending technologies and believe that the youth of today is the future of tomorrow. Our courses are tutored by experts with real-time experience who are passionate about mentoring the youth.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We have earned the trust and recognition from thousands of learners across South India. We provide comprehensive Training & Placements for different Technologies, ensuring our students are industry-ready from day one.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600" 
                  alt="Students collaborating on laptops in a modern learning environment"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Training Excellence Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
                  alt="Professional woman using laptop for online learning and skill development"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Expert Training & Mentorship</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our training programs are designed and delivered by industry experts with real-time experience. We focus on practical, hands-on learning that prepares students for the challenges of the modern workplace.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From trending technologies to soft skills development, we ensure our students receive comprehensive training that makes them industry-ready from day one.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">5000+</h3>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">95%</h3>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">200+</h3>
                <p className="text-gray-600">Partner Companies</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">50+</h3>
                <p className="text-gray-600">Technology Courses</p>
              </div>
            </div>

            {/* Corporate Partnership Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Corporate Partnerships</h2>
                <p className="text-lg text-gray-600">
                  We work closely with leading companies to ensure our training aligns with industry needs
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=400" 
                  alt="Professional meeting room with modern technology displays showcasing corporate partnerships"
                  className="rounded-lg shadow-lg w-full max-w-4xl h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
