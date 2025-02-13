import React from "react";
import { UploadCloud, Settings, DownloadCloud } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-gray-400 text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <strong className=" font-bold text-blue-500">
            BloodIQ Analyzer
          </strong>{" "}
          identifies and extracts data from medical reports using advanced AI, pattern recognition, and anchor keywords. Here are the three simple steps to get started:
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <UploadCloud className="text-blue-500 w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Upload / Import Document</h3>
            <p className="text-gray-400 mb-4">
              Upload your document, connect to cloud storage (Google Drive, Dropbox, etc.), or use the REST API for seamless integration.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all">
              Learn More
            </button>
          </motion.div>
          {/* Step 2 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <Settings className="text-blue-500 w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Define Rules</h3>
            <p className="text-gray-400 mb-4">
              Set custom rules for extracting the data you need with zero coding. Choose presets that fit your document type.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all">
              Learn More
            </button>
          </motion.div>
          {/* Step 3 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <DownloadCloud className="text-blue-500 w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Download / Export Data</h3>
            <p className="text-gray-400 mb-4">
              Export data in Excel, CSV, or JSON formats. Integrate with tools like Zapier, Workato, and MS Power Automate.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
