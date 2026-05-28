import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  CheckCircle2 } from
'lucide-react';
export const InstituteContact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation could go here
    setIsSubmitted(true);
  };
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Strip */}
      <section className="pt-24 pb-12 bg-slate-900 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Have questions about our programs? We're here to help. Reach out to
          our admissions team.
        </p>
      </section>

      <section className="py-16 relative z-10 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
              
              {isSubmitted ?
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-slate-200 transition-colors">
                  
                    Send another message
                  </button>
                </div> :

              <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5">
                        
                          Full Name *
                        </label>
                        <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all bg-slate-50 focus:bg-white"
                        placeholder="John Doe" />
                      
                      </div>
                      <div>
                        <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1.5">
                        
                          Email Address *
                        </label>
                        <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all bg-slate-50 focus:bg-white"
                        placeholder="john@example.com" />
                      
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1.5">
                        
                          Phone Number
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all bg-slate-50 focus:bg-white"
                        placeholder="+1 (555) 000-0000" />
                      
                      </div>
                      <div>
                        <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 mb-1.5">
                        
                          Subject *
                        </label>
                        <input
                        required
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all bg-slate-50 focus:bg-white"
                        placeholder="How can we help?" />
                      
                      </div>
                    </div>
                    <div>
                      <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5">
                      
                        Message *
                      </label>
                      <textarea
                      required
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all bg-slate-50 focus:bg-white resize-none"
                      placeholder="Write your message here...">
                    </textarea>
                    </div>
                    <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25">
                    
                      Send Message
                    </button>
                  </form>
                </>
              }
            </motion.div>

            {/* Right: Contact Info & Map */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="flex flex-col gap-8">
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        Campus Address
                      </h4>
                      <p className="text-slate-600 mt-1">
                        123 Education Boulevard,
                        <br />
                        Tech District, City 10000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Phone</h4>
                      <a
                        href="tel:+15551234567"
                        className="text-slate-600 hover:text-cyan-600 mt-1 block">
                        
                        +1 (555) 123-4567
                      </a>
                      <a
                        href="tel:+15551234568"
                        className="text-slate-600 hover:text-cyan-600 block">
                        
                        +1 (555) 123-4568
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <a
                        href="mailto:info@webrac.edu"
                        className="text-slate-600 hover:text-pink-600 mt-1 block">
                        
                        info@webrac.edu
                      </a>
                      <a
                        href="mailto:admissions@webrac.edu"
                        className="text-slate-600 hover:text-pink-600 block">
                        
                        admissions@webrac.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        Working Hours
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) =>
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-violet-600 hover:text-white transition-colors">
                    
                      <Icon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590415!3d-37.817323442021134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1644469032821!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0
                  }}
                  allowFullScreen={false}
                  loading="lazy">
                </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp">
        
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>);

};