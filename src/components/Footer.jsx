import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white w-full">
            {/* Main Footer Content */}
            <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">

                    {/* Clinic Info */}
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">Master Your Brain Clinic</h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Empowering minds, healing lives — Master Your Brain Clinic.
                        </p>
                        <div className="flex gap-3 sm:gap-4 pt-2">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-700 hover:bg-blue-600 p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
                                aria-label="Visit our Facebook page"
                            >
                                <Facebook size={18} className="sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/masteryourbrainclinic/?igsh=MzF0ajg4cHN4ZDZ5#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-700 hover:bg-pink-600 p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
                                aria-label="Visit our Instagram page"
                            >
                                <Instagram size={18} className="sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 sm:mb-6">Contact Us</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-2.5 sm:gap-3 group">
                                <Phone className="text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0 group-hover:scale-110 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                                <div>
                                    <p className="text-slate-300 text-sm sm:text-base">+91 9876543210</p>
                                    <p className="text-slate-400 text-xs sm:text-sm">24/7 Available</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 sm:gap-3 group">
                                <Mail className="text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0 group-hover:scale-110 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                                <div>
                                    <a href="mailto:info@gangatatva.com" className="text-slate-300 text-sm sm:text-base hover:text-cyan-400 transition-colors break-all">
                                        info@masteryourbrain.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 sm:gap-3 group">
                                <MapPin className="text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0 group-hover:scale-110 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                                <div>
                                    <p className="text-slate-300 text-sm sm:text-base">
                                        C-1/13 ,<br />
                                        Second Floor, Ashok Vihar Phase 2,<br />
                                        110052, Delhi, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Clinic Hours */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 sm:mb-6">Clinic Hours</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-2.5 sm:gap-3">
                                <Clock className="text-cyan-400 mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                                <div>
                                    <p className="text-slate-300 text-sm sm:text-base font-medium">Monday - Saturday</p>
                                    <p className="text-slate-400 text-xs sm:text-sm">9:00 AM - 7:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 sm:gap-3">
                                <Clock className="text-cyan-400 mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                                <div>
                                    <p className="text-slate-300 text-sm sm:text-base font-medium">Sunday</p>
                                    <p className="text-slate-400 text-xs sm:text-sm">10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-700">
                                <p className="text-slate-400 text-xs sm:text-sm">
                                    Emergency consultations available by appointment
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Location */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 sm:mb-6">Find Us</h3>
                        <div className="rounded-lg overflow-hidden border-2 border-slate-700 hover:border-cyan-400 transition-colors">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.8740007926374!2d77.17146093865935!3d28.697183893907415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f4ae550cc9%3A0x402d468095b44a4c!2sMaster%20Your%20Brain%20Clinic!5e0!3m2!1sen!2sin!4v1762869981164!5m2!1sen!2sin"
                                width="100%"
                                height="180"
                                className="sm:h-[200px] lg:h-[220px]"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Master Your Brain Clinic"
                            ></iframe>

                        </div>
                        <a
                            href="https://maps.app.goo.gl/nXAuVtYqKfZPEcT98"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-cyan-400 hover:text-cyan-300 text-sm sm:text-base transition-colors"
                        >
                            Get Directions →
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 sm:py-5 md:py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
                            © 2025 Master Your Brain Clinic. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
                            <a href="#privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#appointment" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                Appointment Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}