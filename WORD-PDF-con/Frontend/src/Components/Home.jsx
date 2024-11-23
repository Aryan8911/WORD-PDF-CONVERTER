import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa6";
import axios from "axios";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convert, setConvert] = useState("");
  const [downloadError, setDownloadError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setConvert("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await axios.post(
        "http://localhost:3000/convertFile",
        formData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      setSelectedFile(null);
      setDownloadError("");
      setConvert("File Converted Successfully");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setDownloadError("Error occurred: " + error.response.data.message);
      } else {
        setConvert("");
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <ConversionBox
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        selectedFile={selectedFile}
        convert={convert}
        downloadError={downloadError}
      />
    </div>
  );
}

function ConversionBox({
  handleFileChange,
  handleSubmit,
  selectedFile,
  convert,
  downloadError,
}) {
  return (
    <div className="max-w-screen-2xl mx-auto container px-6 py-6 md:px-40">
      <div className="flex h-screen items-center justify-center">
        <div className="border-2 border-black px-6 py-4 md:px-10 md:py-8 bg-gradient-to-t from-blue-50 via-white to-blue-100 rounded-xl shadow-2xl w-full max-w-lg">
          <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
            Convert Word to PDF Online
          </h1>
          <p className="text-md text-center font-medium text-gray-700 mb-6">
            Quickly convert Word documents to PDF format online. No software
            installation needed.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <input
              name="file"
              type="file"
              accept=".doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="FileInput"
            />
            <label
              htmlFor="FileInput"
              className="w-full flex items-center justify-center px-6 py-8 bg-gray-100 text-gray-700 rounded-lg shadow-md cursor-pointer border-2 border-dashed border-gray-400 hover:bg-blue-700 hover:text-white duration-300"
            >
              <FaFileWord className="text-4xl mr-4" />
              <span className="text-xl font-semibold">
                {selectedFile ? selectedFile.name : "Choose File"}
              </span>
            </label>
            <button
              onClick={handleSubmit}
              disabled={!selectedFile}
              className="w-full text-white bg-blue-600 hover:bg-blue-800 disabled:bg-gray-400 disabled:pointer-events-none duration-300 font-bold px-4 py-3 rounded-lg"
            >
              Convert File
            </button>
            {convert && (
              <div className="text-green-600 text-center font-medium">
                {convert}
              </div>
            )}
            {downloadError && (
              <div className="text-red-600 text-center font-medium">
                {downloadError}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
