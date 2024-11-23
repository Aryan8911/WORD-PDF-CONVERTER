import React from "react";
import img from "../assets/image.png";

function Banner() {
  return (
    <>
      <div className="bg-gradient-to-t from-blue-50 via-white to-blue-100 py-10">
        <div className="flex flex-col md:flex-row items-center mx-10 md:mx-20 my-10">
          {/* Steps Section */}
          <div className="flex flex-col md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl font-extrabold text-blue-700 mb-6">
              How to Convert Word to PDF:
            </h1>
            <ol className="list-decimal text-lg md:text-xl font-semibold text-gray-800 space-y-4 pl-5">
              <li>Upload or drag & drop your Word file into the converter.</li>
              <li>Click the <span className="text-blue-600">"Convert File"</span> button to begin.</li>
              <li>Wait a few moments for the conversion to complete.</li>
              <li>Download your PDF file instantly.</li>
              <li>
                Enjoy seamless, fast, and secure file conversions with 
                <span className="text-blue-600"> WORD-PDF-converter!</span>
              </li>
            </ol>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:w-1/2 mt-10 md:mt-0">
            <img
              className="w-[500px] h-auto rounded-lg shadow-lg"
              src={img}
              alt="How To Convert Word to PDF"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: "Montserrat", sans-serif;
        }
        /* Ensuring background covers the padding areas */
        .bg-gradient-to-t {
          background-clip: padding-box;
        }
      `}</style>
    </>
  );
}

export default Banner;
