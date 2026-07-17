import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Droplets, Trees, Clock } from 'lucide-react';

const CoolRoutesPage = () => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const routes = [
    {
      id: '1',
      name: 'Marina Beach Route',
      distance: 3.2,
      duration: 15,
      shadeCoverage: 65,
      waterStops: 4,
      heatScore: 35,
    },
    {
      id: '2',
      name: 'Amusement Park Route',
      distance: 5.1,
      duration: 25,
      shadeCoverage: 72,
      waterStops: 6,
      heatScore: 28,
    },
    {
      id: '3',
      name: 'Greens Avenue Route',
      distance: 4.5,
      duration: 20,
      shadeCoverage: 58,
      waterStops: 3,
      heatScore: 45,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
            <Navigation className="text-cool-blue" size={36} />
            Cool Routes
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find the safest paths with maximum shade, water stops, and minimal heat exposure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Starting Point</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-dark-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-cool-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Destination</label>
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-dark-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-cool-blue"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full py-2 bg-gradient-to-r from-cool-blue to-heat-green text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Find Cool Routes
          </motion.button>
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recommended Routes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {routes.map((route, idx) => {
              const getHeatColor = (score: number) => {
                if (score >= 75) return 'text-red-500';
                if (score >= 50) return 'text-orange-500';
                if (score >= 25) return 'text-yellow-500';
                return 'text-green-500';
              };

              return (
                <motion.div
                  key={route.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedRoute(route.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                    selectedRoute === route.id
                      ? 'border-heat-red bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card hover:border-heat-red'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{route.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Smart Navigation</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getHeatColor(route.heatScore)}`}>
                      Score: {route.heatScore}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-heat-orange" />
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Distance</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{route.distance} km</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-cool-blue" />
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Duration</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{route.duration} min</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trees size={18} className="text-heat-green" />
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Shade</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{route.shadeCoverage}%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets size={18} className="text-cool-blue" />
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Water</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{route.waterStops}</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-gradient-to-r from-heat-green to-cool-blue text-white font-semibold rounded-lg transition"
                  >
                    {selectedRoute === route.id ? '✓ Selected' : 'Select Route'}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolRoutesPage;
