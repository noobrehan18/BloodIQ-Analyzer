import React from 'react';
import { FileText, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <header className="bg-gray-900 p-6 flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <FileText className="h-8 w-8 text-blue-500" />
        <span className="ml-2 text-2xl font-semibold text-white">BloodIQ Analyzer</span>
      </div>

      {/* Button Section */}
      <div className="flex space-x-4 items-center">
        <motion.div variants={buttonVariants} initial="initial" whileHover="hover">
          <Link
            to="/demo"
            className="text-white border border-white px-4 py-2 rounded-md transition duration-300"
          >
            Demo
          </Link>
        </motion.div>

        <motion.div variants={buttonVariants} initial="initial" whileHover="hover">
          <Link
            to="/signin"
            className="text-white bg-blue-600 px-4 py-2 rounded-md shadow transition duration-300"
          >
            Sign In
          </Link>
        </motion.div>

        <motion.div variants={buttonVariants} initial="initial" whileHover="hover">
          <Link
            to="/signup"
            className="text-white border border-gray-500 px-4 py-2 rounded-md transition duration-300"
          >
            Sign Up
          </Link>
        </motion.div>

        {/* Theme Switcher */}
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          className="text-white bg-gray-700 p-2 rounded-full transition duration-300"
          >
          <Moon className="h-6 w-6" />
        </motion.button>
      </div>
    </header>
  );
};

export default Header;



