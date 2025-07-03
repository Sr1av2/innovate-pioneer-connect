
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      image: "/placeholder.svg",
      text: "Innovate Pioneer transformed my career completely. The training was comprehensive and the placement support was exceptional. I landed my dream job within 2 months of completing the course!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Full Stack Developer at Infosys",
      image: "/placeholder.svg",
      text: "The instructors are industry experts who provide real-world insights. The mock interviews and technical preparation helped me crack interviews at top companies. Highly recommended!",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Data Scientist at Microsoft",
      image: "/placeholder.svg",
      text: "From zero programming knowledge to becoming a data scientist - Innovate Pioneer made it possible. Their personalized approach and continuous support made all the difference.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "DevOps Engineer at Amazon",
      image: "/placeholder.svg",
      text: "The career consultation and skill development programs are top-notch. They don't just teach technology, they prepare you for the industry. Best investment I ever made!",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful alumni who have transformed their careers with Innovate Pioneer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mb-2" />
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
