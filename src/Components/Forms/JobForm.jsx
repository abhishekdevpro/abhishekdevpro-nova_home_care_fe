import React, { useState } from 'react';

const JobForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
        break;
      case 2:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        break;
      case 3:
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next step
  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
      window.sessionStorage.setItem('formData', JSON.stringify(formData));
    }
  };

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Styles for the form
  const formStyles = "p-6 bg-white rounded shadow-lg max-w-md mx-auto w-full";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={formStyles}>
        {step === 1 && (
          <>
            <h2 className="text-lg mb-4">Enter Your ZIP Code</h2>
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP code"
              value={formData.zipCode}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.zipCode && <p className="text-red-500 text-sm mb-2">{errors.zipCode}</p>}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="text-lg mb-4">Create Your Profile</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.firstName && <p className="text-red-500 text-sm mb-2">{errors.firstName}</p>}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.lastName && <p className="text-red-500 text-sm mb-2">{errors.lastName}</p>}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-lg mb-4">Verify Your Email</h2>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            />
            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Submit
            </button>
          </>
        )}
        {step === 4 && (
          <div className="text-center">
            <h2 className="text-lg mb-4">Form Completed!</h2>
            <p>Thank you for your submission.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobForm;
