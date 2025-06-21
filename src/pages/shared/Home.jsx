import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo_clothly.png";
import LoginModal from "../customer/LoginRegister";

const features = [
  {
    title: "Fast Pickup & Delivery",
    desc: "We pick up and deliver your laundry at your doorstep, on your schedule.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
    iconPath:
      "M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2M16 3.13a4 4 0 01.94 7.76M8 3.13a4 4 0 00-.94 7.76",
  },
  {
    title: "Eco-Friendly Cleaning",
    desc: "We use safe, eco-friendly detergents and processes for your clothes and the planet.",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    iconPath:
      "M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707m16.97 0l-.707-.707M4.222 19.778l-.707-.707",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent, competitive pricing with no hidden fees.",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    iconPath:
      "M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707m16.97 0l-.707-.707M4.222 19.778l-.707-.707",
  },
];

const testimonials = [
  {
    name: "Amit S.",
    text: "Clothly saves me hours every week! The pickup and delivery is always on time, and my clothes come back perfect.",
  },
  {
    name: "Priya K.",
    text: "I love the eco-friendly approach. My clothes feel fresh and I feel good about my choice!",
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-100 to-pink-100 flex flex-col">
      {/* Top Logo */}
      <div className="absolute top-4 left-4 z-50">
        <img
          src={logo}
          alt="Clothly Logo"
          className="w-16 md:w-20 drop-shadow-lg"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center flex-1 py-10 px-2"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-1 text-center drop-shadow-lg animate-bounce max-w-md">
          Welcome to Clothly
        </h1>
        <p className="text-base md:text-lg text-blue-700 mb-6 text-center max-w-md">
          Revolutionizing laundry for modern professionals. Book pickup, track
          your clothes, and relax.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-400 hover:from-pink-400 hover:to-indigo-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg text-sm transition-all"
        >
          Get Started
        </button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-2 bg-white bg-opacity-80 px-2"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-indigo-700 mb-3">
            Why Choose <span className="text-indigo-500">Clothly</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className="flex flex-col items-center bg-white border border-indigo-100 rounded-2xl p-4 shadow hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full mb-1 ${f.iconBg}`}
                >
                  <svg
                    className={`w-5 h-5 ${f.iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={f.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-indigo-700 mb-1 text-center">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-center text-sm max-w-[14rem]">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-10 bg-gradient-to-r from-indigo-100 via-pink-100 to-blue-50 px-2"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center text-indigo-700 mb-2">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl p-4 shadow-lg border-t-4 border-indigo-400"
              >
                <p className="text-blue-700 italic mb-2 text-center text-sm">
                  "{t.text}"
                </p>
                <div className="text-right font-semibold text-pink-500 text-xs">
                  - {t.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Login Modal */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Home;
