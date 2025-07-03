
import { BookOpen, Users, Briefcase, Code, Brain, FileText, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Career Consultation",
      description: "Get personalized career guidance from industry experts. We help you identify your strengths, explore career paths, and create a roadmap for professional success in the tech industry.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Internships",
      description: "Gain hands-on experience through our extensive internship program. We connect you with leading companies for real-world projects that enhance your skills and boost your resume.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Training & Placement",
      description: "Comprehensive training programs designed to make you industry-ready. From technical skills to soft skills, we prepare you for successful placements in top companies.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Tech Jobs",
      description: "Access exclusive job opportunities in cutting-edge technologies. Our strong industry network ensures you get connected with the right employers for your dream tech career.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Skill Development",
      description: "Master trending technologies through our expertly crafted curriculum. Stay ahead with courses in AI, Machine Learning, Cloud Computing, and emerging tech stacks.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Test Preparation",
      description: "Excel in technical assessments and certification exams. Our structured test preparation programs ensure you're confident and well-prepared for any challenge.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Mock Calls",
      description: "Practice makes perfect! Our mock call sessions simulate real interview scenarios, helping you build confidence and improve your communication skills.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Interview Preparations",
      description: "Master the art of interviewing with our comprehensive preparation program. From technical questions to behavioral interviews, we've got you covered.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive solutions to accelerate your career journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful professionals who started their career with Innovate Pioneer
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
