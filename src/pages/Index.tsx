
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Globe, Award, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  const whyChooseUsPoints = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expertise in Client Relations",
      description: "Our dedicated team builds strong relationships with leading companies, ensuring seamless placement opportunities and long-term career growth for our students.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Tailor Talent Solutions",
      description: "We customize our training programs based on individual strengths and market demands, ensuring each student receives personalized attention and targeted skill development.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Globe-wide Talent Network",
      description: "Access opportunities across the globe through our extensive network of international partners and companies actively seeking skilled professionals.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Success Track Record",
      description: "With over 95% placement rate and thousands of successful career transformations, our proven methodology delivers consistent results year after year.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trusted Clients",
      description: "Partnerships with 200+ leading companies including Fortune 500 firms who trust us to provide skilled professionals for their technology teams.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-green-400">Innovate Pioneer</span>
              <br />Your Trusted EduTech Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              At Innovate Pioneer, we specialize in connecting talented students with innovative companies across the globe. 
              Whether you're looking to scale your knowledge or seeking your next opportunity, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Placement Rate</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Partner Companies</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Technology Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Meet Our Founder</h2>
            <div className="max-w-md mx-auto">
              <img 
                src="/lovable-uploads/ab906384-d562-43bf-ad8c-f0d8d55e7e20.png" 
                alt="Founder MUNI PRASHANTH JEGILETI"
                className="w-72 h-96 object-contain rounded-lg shadow-lg mx-auto mb-4 bg-white p-2"
              />
              <p className="text-xl font-semibold text-gray-800">Founder: MUNI PRASHANTH JEGILETI</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Bridging Academia & Industry
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Innovate Pioneer envisions bridging the gap between academia and industry. We understand the pain of unemployment 
                and are committed to eliminating the words "impossible" and "unemployment" from the minds of youth by training 
                and turning them into industry diamonds.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We train students in trending technologies and believe that the youth of today is the future of tomorrow. 
                Our courses are tutored by experts with real-time experience who are passionate about mentoring the youth.
              </p>
              <Link to="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800">Career Growth</h3>
                  <p className="text-sm text-gray-600">Accelerated career advancement</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800">Expert Mentors</h3>
                  <p className="text-sm text-gray-600">Industry professionals</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800">Focused Training</h3>
                  <p className="text-sm text-gray-600">Targeted skill development</p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800">Global Reach</h3>
                  <p className="text-sm text-gray-600">Worldwide opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Innovate Pioneer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer unique advantages that set us apart in the EduTech industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${point.color}`}>
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful professionals who kickstarted their tech careers with Innovate Pioneer. 
            Your success story begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
