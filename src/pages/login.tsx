import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-gray-900">
      <div className="flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mx-auto p-8 bg-white dark:bg-dark-card rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Welcome Back</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Stay safe in the heat</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-card dark:bg-dark-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-heat-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-card dark:bg-dark-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-heat-red"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-heat-red to-heat-orange text-white font-semibold rounded-lg hover:shadow-lg transition"
            >
              Login
            </motion.button>
          </form>

          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Don't have an account? <span className="text-heat-red font-semibold cursor-pointer hover:underline">Sign up</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
