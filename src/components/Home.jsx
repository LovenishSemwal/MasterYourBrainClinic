import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, Heart, Users, Shield, Calendar } from 'lucide-react';

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions tailored to your unique mental health needs and goals.",
      icon: Users
    },
    {
      title: "Couples Counseling",
      description: "Professional guidance to strengthen relationships and improve communication patterns.",
      icon: Heart
    },
    {
      title: "Group Therapy",
      description: "Supportive group environments where you can share experiences and learn from others.",
      icon: Users
    },
    {
      title: "Crisis Support",
      description: "Immediate assistance available for mental health emergencies and urgent situations.",
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: "Tarak M.",
      text: "The compassionate care I received here changed my life. The therapists truly listen and understand.",
      role: "Client since 2023"
    },
    {
      name: "Kalyani P.",
      text: "Professional, welcoming, and judgment-free. I finally found a place where I feel comfortable opening up.",
      role: "Client since 2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                Accepting New Clients
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Journey to
                <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"> Mental Wellness</span> Starts Here
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Compassionate, evidence-based mental health care in a safe and welcoming environment. We're here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center">
                  Schedule Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-teal-500 hover:text-teal-600 transition">
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Mon-Fri 8AM-8PM</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl h-96 shadow-2xl transform rotate-3 absolute inset-0"></div>
              <div className="bg-white rounded-3xl h-96 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <Heart className="w-12 h-12 text-teal-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Safe Space</h3>
                    <p className="text-gray-600">Professional care with compassion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive mental health services designed to support your unique journey toward wellness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-teal-200"
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <button className="mt-4 text-teal-600 font-medium flex items-center group-hover:translate-x-2 transition">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Master Your Brain Clinic?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in providing accessible, judgment-free mental health care that meets you where you are. Our team of licensed professionals brings years of experience and genuine compassion to every session.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Licensed & Experienced</h4>
                    <p className="text-gray-600">Board-certified therapists with specialized training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Scheduling</h4>
                    <p className="text-gray-600">Evening and weekend appointments available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personalized Care</h4>
                    <p className="text-gray-600">Treatment plans tailored to your unique needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Clients Say</h3>
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Take the First Step?</h2>
            <p className="text-xl mb-8 opacity-90">Schedule a free 15-minute consultation today</p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition">
              Book Your Free Consultation
            </button>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3" />
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="opacity-90">+91 9876543210</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3" />
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="opacity-90">info@masteryourbrain.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3" />
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="opacity-90">C-1/13, Ashok Vihar Phase 2, Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
