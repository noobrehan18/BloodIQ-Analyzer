import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log("File uploaded:", file.name);
      alert(`File "${file.name}" uploaded successfully!`);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Upload Your Medical Report</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 p-2 rounded-md mb-4"
      />
      <div>
        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg transition-all duration-300"
        >
          Upload
        </button>
      </div>
    </section>
  );
};

export default FileUpload;
