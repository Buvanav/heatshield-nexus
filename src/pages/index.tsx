import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, MapPin, Bell } from 'lucide-react';
import '../styles/globals.css';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-2xl">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">🛡️</div>
          <span>HeatShield</span>
        </div>
        <Link href="/login" className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg hover:shadow-lg transition">
          Login
        </Link>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Stay Safe in the Heat
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Real-time block-level heat warnings, smart safe routes, and personalized protection for the people who work in the sun.
          </p>
          <motion.div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold hover:shadow-2xl transition flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition"
            >
              Login
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Zap, title: 'Real-Time Alerts', desc: 'Block-level heat scores updated every hour' },
            { icon: MapPin, title: 'Cool Routes', desc: 'Navigate with maximum shade and water stops' },
            { icon: Bell, title: 'Smart Nudges', desc: 'Personalized safety tips based on your profile' },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-red-500 transition"
              >
                <Icon size={32} className="text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
