import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Upload,
  FileText } from
'lucide-react';
const steps = [
{
  id: 1,
  title: 'Personal Info'
},
{
  id: 2,
  title: 'Education'
},
{
  id: 3,
  title: 'Course Selection'
},
{
  id: 4,
  title: 'Documents'
}];

export const InstituteApply: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-xl shadow-slate-200/50 border border-slate-200">
          
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            transition={{
              type: 'spring',
              bounce: 0.5,
              delay: 0.2
            }}
            className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            
            <Check className="w-10 h-10 text-emerald-600" />
          </motion.div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Application Submitted!
          </h2>
          <p className="text-slate-500 mb-8">
            Thank you for applying to WEBRAC Institute. We have received your
            application and will contact you shortly.
          </p>
          <button
            onClick={() => window.location.href = '/institute'}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
            
            Return to Home
          </button>
        </motion.div>
      </div>);

  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Student Application
        </h1>
        <p className="text-slate-600">
          Join WEBRAC Institute and start your journey to success.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0">
            <motion.div
              className="h-full bg-violet-600 rounded-full"
              initial={{
                width: '0%'
              }}
              animate={{
                width: `${(currentStep - 1) / 3 * 100}%`
              }}
              transition={{
                duration: 0.3
              }} />
            
          </div>
          {steps.map((step) =>
          <div
            key={step.id}
            className="relative z-10 flex flex-col items-center gap-2">
            
              <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${currentStep >= step.id ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30' : 'bg-white border-2 border-slate-200 text-slate-400'}`}>
              
                {currentStep > step.id ?
              <Check className="w-5 h-5" /> :

              step.id
              }
              </div>
              <span
              className={`text-xs font-medium absolute -bottom-6 whitespace-nowrap ${currentStep >= step.id ? 'text-violet-700' : 'text-slate-400'}`}>
              
                {step.title}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-200 mt-16">
        <form
          onSubmit={
          currentStep === 4 ?
          handleSubmit :
          (e) => {
            e.preventDefault();
            handleNext();
          }
          }>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -20
              }}
              transition={{
                duration: 0.3
              }}>
              
              {/* Step 1: Personal Info */}
              {currentStep === 1 &&
              <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all"
                      placeholder="John Doe" />
                    
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all text-slate-600" />
                    
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all"
                      placeholder="john@example.com" />
                    
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all"
                      placeholder="+94 77 123 4567" />
                    
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Gender
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="text-violet-600 focus:ring-violet-500"
                          required />
                        
                          <span className="text-slate-700">Male</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                          type="radio"
                          name="gender"
                          value="female"
                          className="text-violet-600 focus:ring-violet-500" />
                        
                          <span className="text-slate-700">Female</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                          type="radio"
                          name="gender"
                          value="other"
                          className="text-violet-600 focus:ring-violet-500" />
                        
                          <span className="text-slate-700">Other</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {/* Step 2: Education */}
              {currentStep === 2 &&
              <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Educational Background
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Highest Qualification
                      </label>
                      <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all text-slate-700 bg-white">
                      
                        <option value="">Select Qualification</option>
                        <option value="ol">G.C.E. O/L</option>
                        <option value="al">G.C.E. A/L</option>
                        <option value="diploma">Diploma</option>
                        <option value="degree">Bachelor's Degree</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        School / College / University
                      </label>
                      <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all"
                      placeholder="Enter institution name" />
                    
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Year of Completion
                        </label>
                        <input
                        type="number"
                        min="2000"
                        max="2026"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all"
                        placeholder="YYYY" />
                      
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Grade / GPA (Optional)
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all"
                        placeholder="e.g. 3.5 or A" />
                      
                      </div>
                    </div>
                  </div>
                </div>
              }

              {/* Step 3: Course Selection */}
              {currentStep === 3 &&
              <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Course Selection
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Select Program
                      </label>
                      <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all text-slate-700 bg-white">
                      
                        <option value="">Choose a program...</option>
                        <optgroup label="Certificate Courses">
                          <option value="c1">
                            Certificate in Web Development
                          </option>
                          <option value="c2">
                            Certificate in Graphic Design
                          </option>
                        </optgroup>
                        <optgroup label="Diploma Programs">
                          <option value="d1">
                            Diploma in Software Engineering
                          </option>
                          <option value="d2">
                            Diploma in Business Management
                          </option>
                        </optgroup>
                        <optgroup label="Degree Programs">
                          <option value="b1">
                            BSc (Hons) Computer Science
                          </option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Intake
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className="relative flex flex-col p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 [&:has(:checked)]:border-violet-500 [&:has(:checked)]:bg-violet-50 transition-all">
                          <input
                          type="radio"
                          name="intake"
                          value="jan"
                          className="absolute opacity-0"
                          required />
                        
                          <span className="font-bold text-slate-900 mb-1">
                            January Intake
                          </span>
                          <span className="text-xs text-slate-500">
                            Starts Jan 15, 2026
                          </span>
                        </label>
                        <label className="relative flex flex-col p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 [&:has(:checked)]:border-violet-500 [&:has(:checked)]:bg-violet-50 transition-all">
                          <input
                          type="radio"
                          name="intake"
                          value="jun"
                          className="absolute opacity-0" />
                        
                          <span className="font-bold text-slate-900 mb-1">
                            June Intake
                          </span>
                          <span className="text-xs text-slate-500">
                            Starts Jun 10, 2026
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {/* Step 4: Documents */}
              {currentStep === 4 &&
              <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Upload Documents
                  </h2>
                  <p className="text-sm text-slate-500 mb-6">
                    Please upload clear copies of the following documents. Max
                    file size: 5MB per file.
                  </p>

                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-violet-400 hover:bg-violet-50/50 transition-colors cursor-pointer relative">
                      <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required />
                    
                      <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-3">
                        <FileText className="w-6 h-6 text-violet-600" />
                      </div>
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        National ID / Passport
                      </p>
                      <p className="text-xs text-slate-500">
                        Click to browse or drag and drop
                      </p>
                    </div>

                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-violet-400 hover:bg-violet-50/50 transition-colors cursor-pointer relative">
                      <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required />
                    
                      <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-3">
                        <Upload className="w-6 h-6 text-violet-600" />
                      </div>
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        Educational Certificates
                      </p>
                      <p className="text-xs text-slate-500">
                        Upload your highest qualification certificate
                      </p>
                    </div>
                  </div>
                </div>
              }
            </motion.div>
          </AnimatePresence>

          {/* Form Actions */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={handleBack}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-600 hover:bg-slate-100'}`}>
              
              <ChevronLeft className="w-4 h-4" /> Back
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all">
              
              {currentStep === 4 ? 'Submit Application' : 'Next Step'}
              {currentStep !== 4 && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </form>
      </div>
    </div>);

};