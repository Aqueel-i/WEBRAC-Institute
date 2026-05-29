import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  CheckCircle2
} from
  'lucide-react';
export const SchoolContact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className="flex flex-col min-h-screen relative">
      <section className="pt-24 pb-12 bg-slate-900 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in touch
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Questions about our school? We'd love to hear from you and answer any
          questions you may have.
        </p>
      </section>

      <section className="py-16 relative z-10 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
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
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-slate-600 mb-8">
                    A member of our admissions team will be in touch within one
                    business day.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-slate-200 transition-colors">

                    Send another message
                  </button>
                </div> :

                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Enquiry form
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-slate-50 focus:bg-white"
                        placeholder="Jane Doe" />

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-slate-50 focus:bg-white"
                          placeholder="jane@example.com" />

                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-slate-50 focus:bg-white"
                          placeholder="+1 (555) 000-0000" />

                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Child's Age Group *
                      </label>
                      <select
                        required
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-slate-50 focus:bg-white">

                        <option value="">Select an age group</option>
                        <option value="early">Early Years (Ages 3-5)</option>
                        <option value="primary">Primary (Ages 6-10)</option>
                        <option value="junior">
                          Junior Secondary (Ages 11-14)
                        </option>
                        <option value="senior">
                          Senior Secondary (Ages 15-18)
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your message *
                      </label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-slate-50 focus:bg-white resize-none"
                        placeholder="Tell us about your child and what you're looking for...">
                      </textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25">

                      Send Enquiry
                    </button>
                  </form>
                </>
              }
            </motion.div>

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
                  Visit us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        Campus Address
                      </h4>
                      <p className="text-slate-600 mt-1">
                        45 Garden Lane,
                        <br />
                        Greenfield, City 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Phone</h4>
                      <a
                        href="tel:+94701265024"
                        className="text-slate-600 hover:text-pink-600 mt-1 block">

                        +94 70 126 5024
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <a
                        href="mailto:hello@webracschool.edu"
                        className="text-slate-600 hover:text-pink-600 mt-1 block">

                        hello@webracschool.edu
                      </a>
                      <a
                        href="mailto:admissions@webracschool.edu"
                        className="text-slate-600 hover:text-pink-600 block">

                        admissions@webracschool.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        School Hours
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Monday - Friday: 7:30 AM - 4:00 PM
                        <br />
                        Office hours: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">
                  Follow our journey
                </h4>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Youtube].map((Icon, i) =>
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-yellow-400 hover:text-white transition-all">

                      <Icon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590415!3d-37.817323442021134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1644469032821!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0
                  }}
                  loading="lazy">
                </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/94701265024"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp">

        <MessageCircle className="w-7 h-7" />
      </a>
    </div>);

};