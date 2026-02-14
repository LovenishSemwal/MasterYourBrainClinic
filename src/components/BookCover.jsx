import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, BookOpen, Stethoscope, Users, ClipboardList, CalendarCheck, Phone } from "lucide-react";
import logo from '../assets/image/logo.png'; 

const navItems = [
  { icon: Brain, label: "Home", path: "/home", delay: "0.6s" },
  { icon: Users, label: "About Us", path: "/aboutus", delay: "0.7s" },
  { icon: Stethoscope, label: "Our Doctors", path: "/ourdoctors", delay: "0.8s" },
  { icon: BookOpen, label: "Services", path: "/ourservices", delay: "0.9s" },
  { icon: ClipboardList, label: "Assessment", path: "/assessment", delay: "1.0s" },
  { icon: CalendarCheck, label: "Book Now", path: "/appointmentbooking", delay: "1.1s" },
  { icon: Phone, label: "Contact Us", path: "/contactus", delay: "1.2s" },
];

const BookCover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, #1a4d3a 0%, #0f3325 30%, #0a261b 60%, #051912 100%), linear-gradient(135deg, #0f3325 0%, #1a4d3a 25%, #0a261b 50%, #051912 75%, #020b08 100%)",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* Book Container */}
      <div className="relative" style={{ perspective: "1500px" }}>
        <div
          className={`relative cursor-pointer transition-all duration-700 ${isOpen ? "pointer-events-none" : ""}`}
          style={{
            width: isOpen ? "700px" : "360px",
            height: "500px",
            transformStyle: "preserve-3d",
          }}
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {/* Right page (back) - visible when open */}
          <div
            className="absolute inset-0 rounded-r-xl shadow-2xl flex flex-col items-center justify-center p-8"
            style={{
              background: "linear-gradient(135deg, hsl(48, 60%, 96%), hsl(48, 50%, 90%))",
              width: isOpen ? "350px" : "360px",
              left: isOpen ? "350px" : "0",
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.5s ease 0.4s, left 0.7s ease",
              borderLeft: isOpen ? "2px solid hsl(48, 40%, 80%)" : "none",
            }}
          >
            {isOpen && (
              <div className="text-center w-full">
                <p className="text-sm font-medium mb-6" style={{ color: "hsl(150, 40%, 30%)", animationDelay: "0.5s" }}>
                  — Explore —
                </p>
                <div className="space-y-3 ">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full flex items-center gap-4 px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 pointer-events-auto group"
                        style={{
                          background: "linear-gradient(135deg, hsl(142, 60%, 38%), hsl(80, 55%, 45%))",
                          color: "white",
                          opacity: 0,
                          animation: `fadeSlideIn 0.4s ease forwards`,
                          animationDelay: item.delay,
                        }}
                      >
                        <IconComponent className="w-5 h-5 group-hover:rotate-12 transition-transform cursor-pointer" />
                        <span className="font-semibold text-sm cursor-pointer">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Front Cover (left page when open) */}
          <div
            className="absolute inset-0 rounded-xl shadow-2xl flex flex-col items-center justify-center p-10 overflow-hidden"
            style={{
              background: "linear-gradient(160deg, hsl(142, 60%, 30%), hsl(142, 55%, 22%), hsl(150, 40%, 15%))",
              transformOrigin: "right center",
              transform: isOpen ? "rotateY(-170deg)" : "rotateY(0deg)",
              transition: "transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",
              zIndex: isOpen ? 0 : 2,
              width: isOpen ? "350px" : "360px",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Book texture lines */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full"
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, hsl(48, 90%, 70%), transparent)",
                    top: `${12 + i * 11}%`,
                  }}
                />
              ))}
            </div>

            {/* Golden border frame */}
            <div
              className="absolute inset-4 rounded-lg border-2 opacity-40"
              style={{ borderColor: "hsl(48, 80%, 55%)" }}
            />

            {/* Logo/Emblem - REPLACE Brain with your logo */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
              style={{
                background: "linear-gradient(135deg, hsl(48, 90%, 50%), hsl(48, 80%, 40%))",
              }}
            >
              {/* Replace this Brain icon with your logo image */}
              <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />
              {/* <Brain className="w-10 h-10" style={{ color: "hsl(142, 55%, 22%)" }} /> */}
            </div>

            <h1
              className="text-3xl font-display font-bold text-center mb-2 leading-tight"
              style={{ color: "hsl(48, 90%, 70%)" }}
            >
              Master Your
              <br />
              Brain Clinic
            </h1>

            <div
              className="w-16 h-0.5 my-4 rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(48, 90%, 50%), hsl(48, 80%, 40%))" }}
            />

            <p className="text-sm text-center italic opacity-80" style={{ color: "hsl(48, 60%, 80%)" }}>
              Empowering Minds
              <br />
              Healing Lives
            </p>

            {!isOpen && (
              <div className="mt-8 flex items-center gap-2 animate-pulse" style={{ color: "hsl(48, 70%, 65%)" }}>
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-medium tracking-widest uppercase">Click to Open</span>
              </div>
            )}
          </div>

          {/* Spine shadow */}
          {isOpen && (
            <div
              className="absolute top-0 h-full w-4"
              style={{
                left: "348px",
                background: "linear-gradient(90deg, rgba(0,0,0,0.15), transparent)",
                zIndex: 3,
              }}
            />
          )}
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BookCover;