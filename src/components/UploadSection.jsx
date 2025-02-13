import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File uploaded: ${file.name}`);
      // Implement file upload logic here
    } else {
      alert("Please upload a file.");
    }
  };

  return (
    <section className="bg-gray-800 text-white py-12">
      <h3 className="text-2xl font-bold text-center mb-6">Upload Your Medical Report</h3>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <input
          type="file"
          className="block w-full text-white bg-gray-700 rounded mb-4"
          onChange={handleFileChange}
        />
        <button type="submit" className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">Upload</button>
      </form>
    </section>
  );
};

export default FileUpload;
