import React from 'react'
import {
  Users,
  Heart,
  User,
  AlertCircle,
  Brain,
  Smile,
  Sparkles,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Individual Therapy",
      icon: <User size={28} />,
      desc: "Personalized one-on-one sessions tailored to your unique mental health needs and goals. Our therapists use evidence-based approaches including CBT, DBT, and mindfulness techniques.",
      points: [
        "Anxiety & Stress Management",
        "Depression Treatment",
        "Trauma Recovery",
        "Self-esteem Building"
      ]
    },
    {
      title: "Couples Counseling",
      icon: <Heart size={28} />,
      desc: "Professional guidance to strengthen relationships, resolve conflicts, and improve communication patterns between partners.",
      points: [
        "Communication Skills",
        "Conflict Resolution",
        "Trust Building",
        "Intimacy Enhancement"
      ]
    },
    {
      title: "Group Therapy",
      icon: <Users size={28} />,
      desc: "Supportive group environments where you can share experiences, learn from others, and build a community of support.",
      points: [
        "Support Groups",
        "Skills Workshops",
        "Peer Learning",
        "Social Connection"
      ]
    },
    {
      title: "Crisis Support",
      icon: <AlertCircle size={28} />,
      desc: "Immediate assistance available for mental health emergencies and urgent situations requiring immediate professional intervention.",
      points: [
        "24/7 Availability",
        "Emergency Response",
        "Safety Planning",
        "Immediate Support"
      ]
    },
    {
      title: "Cognitive Assessment",
      icon: <Brain size={28} />,
      desc: "Comprehensive neuropsychological evaluations to understand cognitive strengths and areas for improvement.",
      points: [
        "Memory Testing",
        "Attention Evaluation",
        "Learning Assessment",
        "Cognitive Rehabilitation"
      ]
    },
    {
      title: "Child & Adolescent Therapy",
      icon: <Smile size={28} />,
      desc: "Specialized therapy for children and teenagers addressing developmental, behavioral, and emotional challenges.",
      points: [
        "Play Therapy",
        "Behavioral Issues",
        "Academic Stress",
        "Social Skills"
      ]
    },
    {
      title: "Addiction Recovery",
      icon: <Sparkles size={28} />,
      desc: "Comprehensive treatment programs for substance abuse and behavioral addictions with ongoing support.",
      points: [
        "Detox Support",
        "Relapse Prevention",
        "Family Involvement",
        "Long-term Recovery"
      ]
    },
    {
      title: "Online Therapy",
      icon: <MessageCircle size={28} />,
      desc: "Convenient teletherapy sessions from the comfort of your home, maintaining the same quality of care.",
      points: [
        "Video Sessions",
        "Flexible Scheduling",
        "Privacy Assured",
        "Pan-India Access"
      ]
    }
  ];

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
        py-20 flex items-center justify-center text-center">
        <div className="px-4 max-w-4xl">
          <h1 className="text-white font-semibold text-5xl mb-4">
            Our Services
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Comprehensive mental health services tailored to your unique needs
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#f7f9fb] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl border border-gray-200
                p-8 transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2cb7c3] text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-2 gap-y-3">
                {service.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#27b3a8]"></span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-16">
            Our Treatment Process
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* STEP 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-[#27b3a8] text-white flex items-center justify-center text-2xl font-semibold mb-5">
                01
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Meet with a therapist to discuss your concerns
              </p>
            </div>

            <ArrowRight className="hidden md:block text-[#8ecfc9]" size={28} />

            {/* STEP 2 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-[#27b3a8] text-white flex items-center justify-center text-2xl font-semibold mb-5">
                02
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of your needs
              </p>
            </div>

            <ArrowRight className="hidden md:block text-[#8ecfc9]" size={28} />

            {/* STEP 3 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-[#27b3a8] text-white flex items-center justify-center text-2xl font-semibold mb-5">
                03
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Treatment Plan
              </h3>
              <p className="text-gray-600 text-sm">
                Personalized plan tailored to your goals
              </p>
            </div>

            <ArrowRight className="hidden md:block text-[#8ecfc9]" size={28} />

            {/* STEP 4 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-[#27b3a8] text-white flex items-center justify-center text-2xl font-semibold mb-5">
                04
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600 text-sm">
                Regular sessions and progress tracking
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="w-full bg-gray-50 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* HEADING */}
          <h2 className="
      text-xl sm:text-2xl md:text-3xl lg:text-4xl
      font-semibold text-gray-800 mb-3">
            Not Sure Which Service is Right for You?
          </h2>

          <p className="
      text-sm sm:text-base md:text-lg
      text-gray-600 mb-8">
            Take our free mental wellness assessment to get personalized recommendations.
          </p>

          {/* BUTTONS */}
          <div className="
      flex flex-col sm:flex-row
      items-center justify-center
      gap-4">

            {/* Schedule Button */}
            <button
              onClick={() => navigate("/assessment")}
              className="
          w-full sm:w-auto
          px-6 py-3
          bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
          text-white font-medium
          rounded-lg
          shadow-sm
          hover:opacity-90
          transition duration-300
          cursor-pointer">
              Take Our Assessment
            </button>

            {/* Assessment Button */}
            <button
              onClick={() => navigate("/contactus")}
              className="
          w-full sm:w-auto
          px-6 py-3
          border border-teal-200
          text-gray-700 font-medium
          rounded-lg
          bg-white
          hover:bg-gradient-to-r hover:from-[#4fd1c5] hover:to-[#63e6d8]
          hover:text-white hover:border-transparent
          transition duration-300
          cursor-pointer">
              Talk to Our Team
            </button>

          </div>
        </div>
      </section>

    </div>
  )
}

export default OurServices
