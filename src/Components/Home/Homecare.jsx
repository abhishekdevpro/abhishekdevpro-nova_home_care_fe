// import React from 'react';

// function JoinNovaHomeCare() {
//   return (
//     <div className="bg-orange-400 w-screen h-screen py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Join With Us</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Step 1: Application */}
//           <div className="bg-blue-100 p-6 rounded-lg">
//             <h3 className="text-xl font-bold mb-2">1. Application</h3>
//             <p>Easily apply with our streamlined process, designed for convenience and efficiency.</p>
//           </div>

//           {/* Step 2: Health Certificate */}
//           <div className="bg-green-100 p-6 rounded-lg">
//             <h3 className="text-xl font-bold mb-2">2. Health Certificate</h3>
//             <p>Provide a health certificate to ensure safety and well-being for all participants.</p>
//           </div>

//           {/* Step 3: KYC Documents */}
//           <div className="bg-yellow-100 p-6 rounded-lg">
//             <h3 className="text-xl font-bold mb-2">3. KYC Documents</h3>
//             <p>Submit necessary KYC documents for secure and compliant onboarding.</p>
//           </div>

//           {/* Step 4: Get On Board */}
//           <div className="bg-purple-100 p-6 rounded-lg">
//             <h3 className="text-xl font-bold mb-2">4. Get On Board</h3>
//             <p>Join us quickly and effortlessly with our straightforward onboarding process.</p>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JoinNovaHomeCare;

import React from "react";

const StepsToJoin = () => {
  const steps = [
    {
      id: 1,
      title: "Application",
      description:
        "Easily apply with our streamlined process, designed for convenience and efficiency.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-teal-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 11.25V9.75a7.5 7.5 0 10-15 0v1.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.5 11.25V17.25C5.5 19.5 7 21 9.25 21H14.75C17 21 18.5 19.5 18.5 17.25V11.25"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Health Certificate",
      description:
        "Provide a health certificate to ensure safety and well-being for all participants.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-teal-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-3"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "KYC Documents",
      description:
        "Submit necessary KYC documents for secure and compliant onboarding.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-teal-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8c0-2.21-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4 4-1.79 4-4zm-4 4v8"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Get On Board",
      description:
        "Join us quickly and effortlessly with our straightforward onboarding process.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-teal-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12l3 3L21 6m-7 6h-7v8h7"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-yellow-100  py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-teal-700 text-lg font-bold uppercase">Join With Us</h2>
        <h3 className="text-4xl font-bold text-teal-900">
          Steps To Join Nova Home Care
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="text-center">
            <div className="mb-4">{step.icon}</div>
            <h4 className="text-xl font-semibold text-teal-900">{step.title}</h4>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-teal-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-teal-800">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default StepsToJoin;
