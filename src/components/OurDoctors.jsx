import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaClock, FaGraduationCap } from "react-icons/fa";

function OurDoctors() {
  const navigate = useNavigate();

  const doctors = [
    {
      initials: "PS",
      name: "Dr. Priya Sharma",
      role: "Clinical Psychologist",
      spec: "Anxiety & Depression",
      exp: "15+ years experience",
      edu: "Ph.D. Clinical Psychology, AIIMS Delhi",
    },
    {
      initials: "RV",
      name: "Dr. Rahul Verma",
      role: "Psychiatrist",
      spec: "Mood Disorders & PTSD",
      exp: "12+ years experience",
      edu: "MD Psychiatry, NIMHANS Bangalore",
    },
    {
      initials: "AK",
      name: "Dr. Anita Kapoor",
      role: "Clinical Psychologist",
      spec: "Couples & Family Therapy",
      exp: "10+ years experience",
      edu: "Ph.D. Psychology, Delhi University",
    },
    {
      initials: "VS",
      name: "Dr. Vikram Singh",
      role: "Counseling Psychologist",
      spec: "Adolescent Mental Health",
      exp: "8+ years experience",
      edu: "M.Phil Clinical Psychology, IHBAS",
    },
    {
      initials: "MP",
      name: "Dr. Meera Patel",
      role: "Neuropsychologist",
      spec: "Cognitive Disorders",
      exp: "11+ years experience",
      edu: "Ph.D. Neuropsychology, NIMHANS",
    },
    {
      initials: "SG",
      name: "Dr. Sanjay Gupta",
      role: "Addiction Specialist",
      spec: "Substance Abuse Recovery",
      exp: "14+ years experience",
      edu: "MD Psychiatry, PGIMER Chandigarh",
    },
  ];

  const goToBooking = () => {
    navigate("/appointmentbooking");
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
        py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32
        flex items-center justify-center text-center">

        <div className="px-4 max-w-4xl">
          <h1 className="text-white font-semibold
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            mb-3 sm:mb-4">
            Our Expert Team
          </h1>

          <p className="text-white/90
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
            max-w-2xl mx-auto">
            Meet our team of licensed and experienced mental health professionals
          </p>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="w-full bg-[#f6f7f8] py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {doctors.map((doc, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl overflow-hidden
                border border-gray-200
                shadow-md
                hover:shadow-2xl hover:shadow-black/25
                transition-all duration-300"
            >
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3] h-32 sm:h-36 md:h-40 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/80 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-semibold text-gray-800">
                    {doc.initials}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {doc.name}
                </h3>

                <p className="text-[#27b3a8] font-medium text-sm sm:text-base mb-4">
                  {doc.role}
                </p>

                <div className="space-y-3 text-gray-600 text-sm sm:text-base">

                  <div className="flex items-center gap-2">
                    <FaUserMd className="text-[#27b3a8]" />
                    <span>{doc.spec}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#27b3a8]" />
                    <span>{doc.exp}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-[#27b3a8]" />
                    <span>{doc.edu}</span>
                  </div>

                </div>

                {/* ONLY BUTTON CLICKABLE */}
                <button
                  onClick={goToBooking}
                  className="
                    mt-6 w-full 
                    bg-[#27b3a8] hover:bg-[#239e94]
                    text-white font-medium
                    py-3 rounded-lg
                    transition duration-200
                    cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}

      <section className="w-full bg-gray-50 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* HEADING */}
          <h2 className="
      text-xl sm:text-2xl md:text-3xl lg:text-4xl
      font-semibold text-gray-800 mb-3">
            Join Our Team
          </h2>

          <p className="
      text-sm sm:text-base md:text-lg
      text-gray-600 mb-8">
            We're always looking for passionate mental health professionals to join our mission.
          </p>

          {/* BUTTONS */}
          <div className="
      flex flex-col sm:flex-row
      items-center justify-center
      gap-4">

            {/* Recruit Button */}
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
              View Career Opportunities
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}

export default OurDoctors;
