import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, MapPin, TrendingUp, Thermometer } from 'lucide-react';

const DashboardPage = () => {
  const [neighborhoods] = useState([
    {
      name: 'Downtown Chennai',
      heatScore: 78,
      temperature: 42,
      humidity: 65,
      trend: 'up' as const,
    },
    {
      name: 'Adyar',
      heatScore: 65,
      temperature: 40,
      humidity: 58,
      trend: 'stable' as const,
    },
    {
      name: 'Besant Nagar',
      heatScore: 45,
      temperature: 38,
      humidity: 52,
      trend: 'down' as const,
    },
  ]);

  const getRiskLevel = (score: number) => {
    if (score >= 75) return { level: 'CRITICAL', color: 'from-red-600 to-red-500', bg: 'bg-red-50 dark:bg-red-900/20' };
    if (score >= 50) return { level: 'HIGH', color: 'from-orange-600 to-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' };
    if (score >= 25) return { level: 'MODERATE', color: 'from-yellow-600 to-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' };
    return { level: 'LOW', color: 'from-green-600 to-green-500', bg: 'bg-green-50 dark:bg-green-900/20' };
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Heat Risk Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Real-time heat scores for your neighborhood</p>
        </motion.div>

        {neighborhoods.some((n) => n.heatScore >= 75) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex gap-3"
          >
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-red-900 dark:text-red-200">Critical Heat Alert</h3>
              <p className="text-sm text-red-800 dark:text-red-300">Downtown Chennai has critical heat levels. Stay indoors or use cool routes. Drink plenty of water.</p>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood, idx) => {
            const risk = getRiskLevel(neighborhood.heatScore);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-6 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg ${risk.bg}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{neighborhood.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Heat Risk Assessment</p>
                  </div>
                  {neighborhood.heatScore >= 50 && <AlertCircle className="text-red-500" size={24} />}
                </div>

                <div className="flex items-center gap-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${risk.color} flex items-center justify-center shadow-lg`}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-4xl font-bold text-white"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {neighborhood.heatScore}
                      </motion.div>
                      <p className="text-xs text-white/80 mt-1">SCORE</p>
                    </div>
                  </motion.div>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Temperature</span>
                      <span className="font-semibold text-lg">{neighborhood.temperature}°C</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Humidity</span>
                      <span className="font-semibold text-lg">{neighborhood.humidity}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Risk Level</span>
                      <span className={`font-semibold text-lg bg-gradient-to-r ${risk.color} bg-clip-text text-transparent`}>
                        {risk.level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          <div className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <MapPin className="text-cool-blue mb-3" size={28} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Find Cool Routes</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Navigate with maximum shade and water stops</p>
            <a
              href="/cool-routes"
              className="inline-block px-4 py-2 bg-cool-blue text-white rounded-lg hover:shadow-lg transition"
            >
              Explore Routes →
            </a>
          </div>
          <div className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <TrendingUp className="text-heat-green mb-3" size={28} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Weekly Forecast</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Plan your week with heat predictions</p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-heat-green text-white rounded-lg hover:shadow-lg transition"
            >
              View Forecast →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
