import React, { useState } from 'react';

const HeroSection = () => {
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className="bg-gray-900 text-center py-20 text-white">
      <h1 className="text-5xl font-extrabold mb-6">
        Transform Medical Reports with <br />
        <span className="text-blue-500">Artificial Intelligence </span>
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
        Instantly analyze and extract data from medical reports with advanced AI. 
        Specially designed for Indian healthcare professionals.
      </p>
      <label className="relative bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg cursor-pointer transition-all duration-300">
        Upload Your Report
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileUpload}
        />
      </label>
      {fileName && (
        <p className="mt-4 text-sm text-gray-300">
          Uploaded File: <span className="font-medium">{fileName}</span>
        </p>
      )}
    </section>
  );
};

export default HeroSection;
