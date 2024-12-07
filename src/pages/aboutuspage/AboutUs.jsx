import { useState, useEffect } from "react";
import RabbiImage from "../../../src/assets/about-us/rabu.jpg";
import BipaImage from "../../../src/assets/about-us/Bipa.jpg";
import SakibImage from "../../../src/assets/about-us/sakib-image.jpg";
import WaliImage from "../../../src/assets/about-us/waliUllah.jpg";

const AboutUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set dark mode based on system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div
        className={`${
          isDarkMode ? "dark" : ""
        } bg-[#FDF7F4] min-h-screen flex items-center justify-center p-4`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            {/* Profile Section */}
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src={RabbiImage}
                alt="Profile"
                className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
              />
              <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">
                Md. Fazle Rabbi
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Software Developer
              </p>
              <button
                className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                About Fazle Rabbi
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Passionate software developer with 1+ years of experience in web
                technologies. I love creating user-friendly applications and
                solving complex problems.
              </p>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["JavaScript", "React", "Node.js", "Python", "SQL"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Contact Information
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  fazlerabbi.xd@gmail.com
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 2ND */}
      <div
        className={`${
          isDarkMode ? "dark" : ""
        } bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            {/* Profile Section */}
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src={WaliImage}
                alt="Profile"
                className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
              />
              <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">
                Waliullah
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Backend Software Developer
              </p>
              <button
                className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                About Waliullah
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Passionate backend developer with 2 years of experience in web
                technologies. I love creating complex and strong applications
                and solving problems.
              </p>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["JavaScript", "Express", "Node.js", "SQL"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Contact Information
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  john.doe@example.com
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 3RD */}
      <div
        className={`${
          isDarkMode ? "dark" : ""
        } bg-[#FDF7F4] min-h-screen flex items-center justify-center p-4`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            {/* Profile Section */}
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src={SakibImage}
                alt="Profile"
                className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
              />
              <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">
                Sakib Chowdhury
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Database Administrator
              </p>
              <button
                className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                About Chowdhury Sakib
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I am a skilled Database engineer specialized in MongoDB with
                NoSQL. I have experience of 2+ years in this field.
              </p>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Mongoose", "MongoDB", "Node.js", "NoSQL", "SQL"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Contact Information
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  21101042@uap-bd.edu
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dhaka, Bangladesh.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 4TH */}
      <div
        className={`${
          isDarkMode ? "dark" : ""
        } bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            {/* Profile Section */}
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src={BipaImage}
                alt="Profile"
                className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
              />
              <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">
                Rimjhim Akter Bipa
              </h1>
              <p className="text-gray-600 dark:text-gray-300">UI/UX Designer</p>
              <button
                className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                About Bipa
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                A talented UI/UX Designer with 1+ years of professional
                experience with multiple freelance clients. I love working with
                design and colors to make everything look wonderful!
              </p>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["UI/UX", "Figma", "Canva", "Color Palette"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                Contact Information
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  21101028@uap-bd.edu
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dhaka, Bangladesh
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
