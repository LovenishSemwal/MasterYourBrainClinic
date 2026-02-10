import React, { useState, useEffect } from "react";
import {
  User,
  Calendar,
  Mail,
  CheckCircle,
  Award,
  ArrowLeft,
  ArrowRight,
  Clock,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";


const doctors = [
  { id: 1, name: "Dr. Priya Sharma", role: "Clinical Psychologist", specialization: "Anxiety & Depression", initials: "PS" },
  { id: 2, name: "Dr. Rahul Verma", role: "Psychiatrist", specialization: "Mood Disorders & PTSD", initials: "RV" },
  { id: 3, name: "Dr. Anita Kapoor", role: "Clinical Psychologist", specialization: "Couples & Family Therapy", initials: "AK" },
  { id: 4, name: "Dr. Vikram Singh", role: "Counseling Psychologist", specialization: "Adolescent Mental Health", initials: "VS" },
  { id: 5, name: "Dr. Meera Patel", role: "Neuropsychologist", specialization: "Cognitive Disorders", initials: "MP" },
  { id: 6, name: "Dr. Sanjay Gupta", role: "Addiction Specialist", specialization: "Substance Abuse Recovery", initials: "SG" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM"
];

const steps = [
  { label: "Select Doctor", icon: User },
  { label: "Date & Time", icon: Calendar },
  { label: "Your Details", icon: Mail },
  { label: "Confirmation", icon: CheckCircle },
];

function Booking() {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem("bookingStep");
    return saved ? parseInt(saved) : 0;
  });

  const [selectedDoctor, setSelectedDoctor] = useState(() => {
    const saved = localStorage.getItem("selectedDoctor");
    return saved ? parseInt(saved) : null;
  });

  const [selectedDate, setSelectedDate] = useState(() => {
    return localStorage.getItem("selectedDate") || "";
  });

  const [selectedTime, setSelectedTime] = useState(() => {
    return localStorage.getItem("selectedTime") || null;
  });

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formData");
    return saved ? JSON.parse(saved) : { name: "", email: "", phone: "" };
  });

  // Save to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem("bookingStep", currentStep.toString());
  }, [currentStep]);

  useEffect(() => {
    if (selectedDoctor !== null) {
      localStorage.setItem("selectedDoctor", selectedDoctor.toString());
    }
  }, [selectedDoctor]);

  useEffect(() => {
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedTime) {
      localStorage.setItem("selectedTime", selectedTime);
    }
  }, [selectedTime]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const canProceed = () => {
    if (currentStep === 0) return selectedDoctor !== null;
    if (currentStep === 1) return selectedDate && selectedTime;
    if (currentStep === 2) return formData.name && formData.email && formData.phone;
    return true;
  };

  const next = () => {
    if (canProceed()) setCurrentStep((s) => s + 1);
  };

  const back = () => setCurrentStep((s) => s - 1);

  const doctor = doctors.find(d => d.id === selectedDoctor);

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
        py-10 sm:py-12 md:py-14 lg:py-16 text-center">
        <div className="px-4 max-w-4xl mx-auto">
          <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl mb-2">
            Book an Appointment
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Schedule a session with our mental health experts in a few simple steps
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">

          {/* STEPPER */}
          <div className="flex items-center justify-between mb-12 relative px-6">

            {/* MAIN LINE (behind icons) - with proper spacing */}
            <div 
              className="absolute top-5 h-[2px] bg-gray-300 z-0" 
              style={{ 
                left: 'calc(3.5rem)',
                right: 'calc(3.5rem)',
              }}
            />

            <div
              className="absolute top-5 h-[2px] bg-[#2cb7c3] z-0 transition-all duration-300"
              style={{ 
                left: 'calc(3.5rem)',
                width: `calc(${(currentStep / (steps.length - 1)) * 100}% - 7rem + ${(currentStep / (steps.length - 1)) * 7}rem)`,
              }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === currentStep;
              const isCompleted = i < currentStep;

              return (
                <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300
          ${isActive
                        ? "bg-[#2cb7c3] text-white"
                        : isCompleted
                          ? "bg-[#2cb7c3] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>

                  <span
                    className={`text-xs mt-2 font-medium hidden sm:block
          ${isActive || isCompleted ? "text-[#2cb7c3]" : "text-gray-400"}`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>


          {/* STEP 1 */}
          {currentStep === 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Choose Your Doctor</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {doctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`p-4 rounded-xl border bg-white cursor-pointer transition
                    ${selectedDoctor === doc.id
                        ? "ring-2 ring-[#2cb7c3] shadow-sm"
                        : "hover:shadow-sm border-gray-200"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#27b3a8] to-[#2cb7c3]
                        flex items-center justify-center text-white font-bold">
                        {doc.initials}
                      </div>

                      <div>
                        <p className="font-semibold">{doc.name}</p>
                        <p className="text-sm text-[#2cb7c3]">{doc.role}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <Award className="w-3 h-3" />
                          {doc.specialization}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 2 */}
          {currentStep === 1 && (
            <>
              <h2 className="text-2xl font-bold mb-8">Select Date & Time</h2>

              <div className="grid md:grid-cols-2 gap-6">

                {/* DATE CARD */}
                <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                  <div className="flex items-center gap-2 mb-6 font-semibold text-lg">
                    <Calendar className="w-5 h-5 text-[#2cb7c3]" />
                    Pick a Date
                  </div>

                  <style>{`
                    .rdp-day_button:focus-visible,
                    .rdp-day_button:focus,
                    .rdp-button:focus-visible,
                    .rdp-button:focus {
                      outline: none !important;
                      box-shadow: none !important;
                      border: none !important;
                    }
                    .rdp-day_button {
                      border: none !important;
                    }
                  `}</style>

                  <div className="flex justify-center">
                    <DayPicker
                      mode="single"
                      selected={selectedDate ? new Date(selectedDate) : undefined}
                      onSelect={(date) =>
                        setSelectedDate(date ? format(date, "yyyy-MM-dd") : "")
                      }
                      disabled={{ before: new Date() }}
                      modifiers={{
                        today: new Date()
                      }}
                      modifiersStyles={{
                        today: {
                          backgroundColor: "#a0e7e1",
                          color: "#000",
                          fontWeight: "500"
                        },
                        selected: {
                          backgroundColor: "#2cb7c3",
                          color: "white",
                          fontWeight: "600"
                        }
                      }}
                      styles={{
                        caption: { color: "#111", fontWeight: "600", fontSize: "16px" },
                        head_cell: { color: "#666", fontSize: "14px", fontWeight: "500" },
                        cell: { padding: "8px" },
                        day: { 
                          fontSize: "14px",
                          borderRadius: "8px",
                          width: "40px",
                          height: "40px"
                        }
                      }}
                    />
                  </div>
                </div>

                {/* TIME CARD */}
                <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                  <div className="flex items-center gap-2 mb-6 font-semibold text-lg">
                    <Clock className="w-5 h-5 text-[#2cb7c3]" />
                    Pick a Time
                  </div>

                  {!selectedDate ? (
                    <div className="text-center text-gray-400 py-16">
                      Please select a date first
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`border rounded-lg py-3 px-4 text-sm font-medium cursor-pointer transition
                ${selectedTime === slot
                              ? "bg-[#2cb7c3] text-white border-[#2cb7c3]"
                              : "bg-white border-gray-200 text-gray-700 hover:border-[#2cb7c3] hover:bg-gray-50"
                            }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}



          {/* STEP 3 */}
          {currentStep === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
                <input 
                  placeholder="Full Name"
                  value={formData.name}
                  className="border border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#2cb7c3]"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input 
                  placeholder="Email"
                  value={formData.email}
                  className="border border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#2cb7c3]"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input 
                  placeholder="Phone"
                  value={formData.phone}
                  className="border border-gray-200 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#2cb7c3]"
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </>
          )}

          {/* STEP 4 */}
          {currentStep === 3 && (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-[#2cb7c3] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Appointment Confirmed!</h2>
              <p className="text-gray-500">
                {doctor?.name} on {selectedDate} at {selectedTime}
              </p>
            </div>
          )}

          {/* NAV */}
          {currentStep < 3 && (
            <div className="flex justify-between mt-10">
              <button
                onClick={back}
                disabled={currentStep === 0}
                className={`px-6 py-2.5 border rounded-lg flex items-center gap-2 font-medium
                  ${currentStep === 0 
                    ? "border-gray-200 text-gray-400 cursor-not-allowed" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={next}
                disabled={!canProceed()}
                className={`px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium text-white transition
                ${canProceed() ? "bg-[#2cb7c3] hover:bg-[#27b3a8]" : "bg-gray-300 cursor-not-allowed"}`}
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Booking;