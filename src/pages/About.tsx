import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Target, Heart } from 'lucide-react';
import founderImg from '../assets/team/founder.jpg';
import curatorImg from '../assets/team/curator.jpg';
import developerImg from '../assets/team/developer.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      description: 'AI enthusiast with 8+ years in tech, passionate about democratizing AI tools.',
      avatar: founderImg
    },
    {
      name: 'Priya Patel',
      role: 'Head of Curation',
      description: 'Expert in AI tools evaluation and user experience design.',
      avatar: curatorImg
    },
    {
      name: 'Arjun Kumar',
      role: 'Technical Lead',
      description: 'Full-stack developer building the future of AI tool discovery.',
      avatar: developerImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AIToolsIndia</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering every Indian to leverage AI—no cost, no signup. 
            We believe in democratizing access to artificial intelligence tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To make AI tools accessible to everyone in India, regardless of their technical background or budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Making AI tools available to students, creators, and professionals across India
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Carefully curated tools that are tested and verified for quality and reliability
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building a community of AI enthusiasts who share knowledge and experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate individuals working to make AI accessible to everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-light">AI Tools Curated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-primary-light">Users Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-light">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-light">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;