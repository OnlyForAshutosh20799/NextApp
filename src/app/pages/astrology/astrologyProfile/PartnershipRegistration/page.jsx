"use client";
import { useState } from "react";

export default function PartnershipRegistration() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="mt-17 min-h-screen bg-gradient-to-b from-saffron-100 via-yellow-100 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-6 md:p-12 mx-2 md:mx-0 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-golden-700 mb-2">
            AstroVastuGuru <span className="text-yellow-500">✨</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Partnership Registration
          </h2>
          {/* Step Indicator */}
          {/* <div className="flex justify-center mt-4 space-x-2">
            {[1, 2, 3, 4].map((num) => (
              <span
                key={num}
                className={`w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                  step >= num ? "bg-golden-500" : "bg-yellow-200"
                }`}
              ></span>
            ))}
          </div> */}
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto space-y-6">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">
              {/* Are you astrologer */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Are you an astrologer? *
                </label>
                <div className="mt-2 flex flex-wrap gap-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="astrologer"
                      className="form-radio text-golden-600"
                      defaultChecked
                    />
                    <span className="ml-2 text-gray-900">Yes</span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="astrologer"
                      className="form-radio text-golden-600"
                    />
                    <span className="ml-2 text-gray-900">No</span>
                  </label>
                </div>
              </div>

              {/* How did you hear */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How did you hear about us? *
                </label>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Google", "YouTube", "Instagram", "Facebook", "Others"].map(
                    (source) => (
                      <label
                        key={source}
                        className="inline-flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="source"
                          className="form-radio text-golden-600"
                        />
                        <span className="ml-2 text-gray-900">{source}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Time to give */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How much time can you give to earn with AstroVastuGuru? *
                </label>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["1 hour", "3 hours", "6 hours", "More"].map((time) => (
                    <label
                      key={time}
                      className="inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="time"
                        className="form-radio text-golden-600"
                      />
                      <span className="ml-2 text-gray-900">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="overflow-hidden rounded-xl">
                <button
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transform transition duration-300 will-change-transform"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              {[
                { label: "Full Name", type: "text" },
                { label: "Email Address", type: "email" },
                { label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label} *
                  </label>
                  <input
                    type={field.type}
                    className="mt-1 w-full p-3 border rounded-xl border-yellow-200 focus:outline-none focus:ring-2 focus:ring-golden-500"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender *
                </label>
                <select className="mt-1 w-full p-3 border rounded-xl border-yellow-200 focus:outline-none focus:ring-2 focus:ring-golden-500">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Previous + Next Buttons */}
              <div className="flex justify-between gap-4 flex-wrap">
                <div className="flex-1 overflow-hidden rounded-xl">
                  <button
                    onClick={prevStep}
                    className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-golden-700 py-3 rounded-xl font-semibold  transition duration-300"
                  >
                    Previous
                  </button>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl">
                  <button
                    onClick={nextStep}
                    className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-white py-3 rounded-xl font-semibold shadow-md  transform transition duration-300 will-change-transform"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4">
              {[
                { label: "Instagram URL", type: "text" },
                { label: "YouTube Channel URL", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="mt-1 w-full p-3 border rounded-xl border-yellow-200 focus:outline-none focus:ring-2 focus:ring-golden-500"
                  />
                </div>
              ))}

              {[
                {
                  label: "Instagram Followers",
                  options: ["0-1000", "1000-5000", "5000+"],
                },
                {
                  label: "YouTube Followers",
                  options: ["0-1000", "1000-5000", "5000+"],
                },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <select className="mt-1 w-full p-3 border rounded-xl border-yellow-200 focus:outline-none focus:ring-2 focus:ring-golden-500">
                    <option>Select Range</option>
                    {field.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}

              {/* Buttons */}
              <div className="flex justify-between gap-4 flex-wrap">
                <div className="flex-1 overflow-hidden rounded-xl">
                  <button
                    onClick={prevStep}
                    className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-golden-700 py-3 rounded-xl font-semibold transition duration-300"
                  >
                    Previous
                  </button>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl">
                  <button
                    onClick={nextStep}
                    className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transform transition duration-300 will-change-transform"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-4">
              {[
                {
                  label: "Field of Expertise",
                  options: ["Astrology", "Vastu", "Other"],
                },
                { label: "Years of Experience", options: ["0-2", "2-5", "5+"] },
                {
                  label: "Field of Astrology",
                  options: ["Vedic Astrology", "Western Astrology", "Other"],
                },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label} *
                  </label>
                  <select className="mt-1 w-full p-3 border rounded-xl border-yellow-200 focus:outline-none focus:ring-2 focus:ring-golden-500">
                    <option>Select</option>
                    {field.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}

              {[
                {
                  label: "Why do you want to join AstroVastuGuru?",
                  type: "textarea",
                },
                { label: "Tell us something about yourself", type: "textarea" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label} *
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 w-full p-3 border rounded-xl border-yellow-200 focus:outline-none focus:ring-2 focus:ring-golden-500"
                  />
                </div>
              ))}

              <div className="flex justify-between gap-4 flex-wrap">
                <div className="flex-1 overflow-hidden rounded-xl">
                  <button
                    onClick={prevStep}
                    className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-golden-700 py-3 rounded-xl font-semibold  transition duration-300"
                  >
                    Previous
                  </button>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl">
                  <button className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FD8115] text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transform transition duration-300 will-change-transform">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
