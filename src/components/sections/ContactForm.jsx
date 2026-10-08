import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm({ heading }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="px-4 md:px-6 xl:px-header-pad max-w-site mx-auto pt-20 md:pt-28 pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 xl:gap-20 items-start">
        {/* Left heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-[-0.04em] text-ink leading-[1.1] max-w-lg"
        >
          {heading}
        </motion.h1>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          onSubmit={handleSubmit}
          className="relative bg-[#111] text-white p-6 md:p-8 max-w-xl w-full overflow-hidden"
        >
          {/* Fields */}
          <div className="flex flex-col gap-5 mb-6">
            <Field label="First Name" name="firstName" placeholder="Type here..." />
            <Field label="Last Name" name="lastName" placeholder="Type here..." />
            <Field label="Email" name="email" type="email" placeholder="Type here..." />
            <Field label="Company" name="company" placeholder="Type here..." />

            <div className="relative">
              <label className="block text-xs md:text-sm mb-2">
                Reason for enquiry <i className="text-accent not-italic ml-1">*</i>
              </label>
              <select className="w-full bg-transparent border-b border-[#777] text-white text-sm md:text-base py-2 outline-none appearance-none cursor-pointer">
                <option className="text-ink">Select an option</option>
                <option className="text-ink">New business enquiry</option>
                <option className="text-ink">Careers enquiry</option>
                <option className="text-ink">Press enquiry</option>
                <option className="text-ink">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs md:text-sm mb-2">
                Message <i className="text-accent not-italic ml-1">*</i>
              </label>
              <textarea
                rows={4}
                placeholder="Type here..."
                className="w-full bg-black text-white text-sm md:text-base p-4 outline-none rounded-lg resize-y placeholder:text-[#6d6d6d] placeholder:italic placeholder:font-bold placeholder:text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              />
            </div>
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 mb-6 text-sm leading-snug">
            <input type="checkbox" required className="mt-1 w-5 h-5 accent-accent shrink-0" />
            <span>I agree to receive other communications from Tangerine.</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-between gap-4 px-5 py-4 md:py-5 bg-white text-ink rounded-lg text-base md:text-lg font-bold transition-colors hover:bg-accent hover:text-white group"
          >
            <span>Submit</span>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Success overlay */}
          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center gap-5 text-center p-8"
            >
              <svg viewBox="0 0 80 80" width="72" height="72">
                <circle cx="40" cy="40" r="30" fill="none" stroke="#e94b3c" strokeWidth="2" />
                <path
                  d="M28 40l9 9 17-17"
                  fill="none"
                  stroke="#e94b3c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
              >
                Thanks!
              </h2>
              <p className="text-sm text-[#ccc]">We'll be in touch shortly.</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div className="relative">
      <label className="block text-xs md:text-sm mb-2">
        {label} <i className="text-accent not-italic ml-1">*</i>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-b border-[#777] text-white text-base md:text-lg py-2 outline-none placeholder:text-[#6d6d6d] placeholder:italic placeholder:font-bold placeholder:text-lg"
        style={{ fontFamily: "'Playfair Display', serif" }}
      />
    </div>
  );
}