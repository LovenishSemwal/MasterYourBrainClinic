import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart, FaAward, FaUsers } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
        py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32
        flex items-center justify-center text-center">

        <div className="px-4 max-w-4xl">
          <h1 className="
            text-white font-semibold
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl
            mb-3 sm:mb-4">
            About Our Clinic
          </h1>

          <p className="
            text-white/90 font-normal
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
            max-w-2xl mx-auto">
            Dedicated to empowering minds and healing lives since 2014
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="
              inline-block bg-teal-100 text-teal-700
              text-xs sm:text-sm font-medium
              px-3 py-1 rounded-full mb-4">
              Our Story
            </span>

            <h2 className="
              text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl
              font-semibold text-gray-800 mb-4 leading-snug">
              A Decade of Transforming Lives
            </h2>

            <p className="
              text-gray-600
              text-sm sm:text-base md:text-base lg:text-lg
              mb-4 leading-relaxed">
              Master Your Brain Clinic was founded with a simple yet powerful
              vision: to make quality mental health care accessible to everyone.
              What started as a small practice has grown into one of Delhi's most
              trusted mental wellness centers.
            </p>

            <p className="
              text-gray-600
              text-sm sm:text-base md:text-base lg:text-lg
              mb-6 leading-relaxed">
              Our team of dedicated professionals combines traditional therapeutic
              approaches with modern evidence-based techniques to provide
              comprehensive care that addresses the unique needs of each individual.
            </p>

            {/* BULLET POINTS */}
            <div className="space-y-3">
              {[
                "Evidence-based treatment approaches",
                "Confidential and safe environment",
                "Personalized treatment plans",
                "Ongoing support and follow-up care",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-teal-500 text-base sm:text-lg" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT STATS CARD */}
          <div className="
            bg-teal-50 border border-teal-100
            rounded-xl shadow-sm
            p-6 sm:p-8 md:p-10
            grid grid-cols-2 gap-6 text-center">

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600">
                10+
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600">
                5000+
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Clients Helped
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600">
                15+
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Expert Therapists
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600">
                98%
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Client Satisfaction
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* OUR MISSION */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        font-semibold text-gray-800 mb-3">
              Our Mission
            </h2>

            <p className="
        text-sm sm:text-base md:text-lg
        text-gray-600 leading-relaxed">
              To provide compassionate, accessible, and effective mental health
              services that empower individuals to overcome challenges, build
              resilience, and lead fulfilling lives.
            </p>
          </div>

          {/* CORE VALUES */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        font-semibold text-gray-800">
              Our Core Values
            </h2>
          </div>

          {/* VALUES GRID */}
          <div className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-8 sm:gap-10 lg:gap-12
      text-center">

            {/* VALUE 1 */}
            <div className="flex flex-col items-center">
              <div className="
          w-14 h-14 sm:w-16 sm:h-16
          flex items-center justify-center
          rounded-full
          bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
          mb-4 shadow-sm">
                <FaHeart className="text-white text-lg sm:text-xl" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Compassion
              </h3>

              <p className="text-sm sm:text-base text-gray-600 max-w-xs">
                We approach every client with genuine empathy and understanding.
              </p>
            </div>

            {/* VALUE 2 */}
            <div className="flex flex-col items-center">
              <div className="
          w-14 h-14 sm:w-16 sm:h-16
          flex items-center justify-center
          rounded-full
          bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
          mb-4 shadow-sm">
                <FaAward className="text-white text-lg sm:text-xl" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Excellence
              </h3>

              <p className="text-sm sm:text-base text-gray-600 max-w-xs">
                Committed to providing the highest quality mental health care.
              </p>
            </div>

            {/* VALUE 3 */}
            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <div className="
          w-14 h-14 sm:w-16 sm:h-16
          flex items-center justify-center
          rounded-full
          bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
          mb-4 shadow-sm">
                <FaUsers className="text-white text-lg sm:text-xl" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Inclusivity
              </h3>

              <p className="text-sm sm:text-base text-gray-600 max-w-xs">
                Creating a welcoming space for people from all backgrounds.
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
            Ready to Start Your Journey?
          </h2>

          <p className="
      text-sm sm:text-base md:text-lg
      text-gray-600 mb-8">
            Take the first step towards mental wellness today.
          </p>

          {/* BUTTONS */}
          <div className="
      flex flex-col sm:flex-row
      items-center justify-center
      gap-4">

            {/* Schedule Button */}
            <button
              onClick={() => navigate("/contactus")}
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
              Schedule a Consultation
            </button>

            {/* Assessment Button */}
            <button
              onClick={() => navigate("/assessment")}
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
              Take Our Assessment
            </button>

          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;
