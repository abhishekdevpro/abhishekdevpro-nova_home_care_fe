import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: '',
    careDate: '',
    careType: '',
    whoNeedsCare: '',
    additionalCare: [],
    email: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
        break;
      case 2:
        if (!formData.careDate) newErrors.careDate = 'Care date is required';
        break;
      case 3:
        if (!formData.careType) newErrors.careType = 'Care type is required';
        break;
      case 4:
        if (!formData.whoNeedsCare) newErrors.whoNeedsCare = 'Who needs care is required';
        break;
      case 5:
        if (formData.additionalCare.length === 0) newErrors.additionalCare = 'Please select at least one additional care option';
        break;
      case 6:
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        break;
      // Add validation for payment step if needed
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
      window.sessionStorage.setItem('formData', JSON.stringify(formData));
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const selectedOptions = prev[name] || [];
      if (checked) {
        selectedOptions.push(value);
      } else {
        return { ...prev, [name]: selectedOptions.filter((option) => option !== value) };
      }
      return { ...prev, [name]: selectedOptions };
    });
  };

  const formStyles = "p-6 md:p-4 bg-white rounded shadow-lg max-w-md mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 ";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={formStyles}>
        {step === 1 && (
          <>
            <h2 className="text-lg mb-4">Where do you need care?</h2>
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
            <h2 className="text-lg mb-4">When do you need care?</h2>
            <select
              name="careDate"
              value={formData.careDate}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            >
              <option value="" disabled>Select a date</option>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="This Week">This Week</option>
              <option value="Next Week">Next Week</option>
            </select>
            {errors.careDate && <p className="text-red-500 text-sm mb-2">{errors.careDate}</p>}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-lg mb-4">What kind of care do you need?</h2>
            <select
              name="careType"
              value={formData.careType}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            >
              <option value="" disabled>Select care type</option>
              <option value="Child care">Child care</option>
              <option value="Senior care">Senior care</option>
              <option value="Housekeeping">Housekeeping</option>
              <option value="Pet care">Pet care</option>
              <option value="Tutoring">Tutoring</option>
            </select>
            {errors.careType && <p className="text-red-500 text-sm mb-2">{errors.careType}</p>}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 4 && (
          <>
            <h2 className="text-lg mb-4">Who needs care?</h2>
            <select
              name="whoNeedsCare"
              value={formData.whoNeedsCare}
              onChange={handleChange}
              className="border rounded w-full p-2 mb-4"
            >
              <option value="" disabled>Select person</option>
              <option value="Myself">Myself</option>
              <option value="Family Member">Family Member</option>
              <option value="Friend">Friend</option>
            </select>
            {errors.whoNeedsCare && <p className="text-red-500 text-sm mb-2">{errors.whoNeedsCare}</p>}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 5 && (
          <>
            <h2 className="text-lg mb-4">Do you need any other type of care?</h2>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCare"
                  value="Child care"
                  checked={formData.additionalCare.includes('Child care')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Child care
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCare"
                  value="Senior care"
                  checked={formData.additionalCare.includes('Senior care')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Senior care
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCare"
                  value="Housekeeping"
                  checked={formData.additionalCare.includes('Housekeeping')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Housekeeping
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalCare"
                  value="Pet care"
                  checked={formData.additionalCare.includes('Pet care')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Pet care
              </label>
            </div>
            {errors.additionalCare && <p className="text-red-500 text-sm mb-2">{errors.additionalCare}</p>}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Next
            </button>
          </>
        )}
        {step === 6 && (
          <>
            <h2 className="text-lg mb-4">Enter your email for verification</h2>
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
              Next
            </button>
          </>
        )}
        {step === 7 && (
          <>
            <h2 className="text-lg mb-4">Payment Information</h2>
            {/* Add your payment form fields here */}
            <button onClick={handleNext} className="bg-orange-500 text-white px-4 py-2 rounded-full w-full">
              Submit
            </button>
          </>
        )}
        {step === 8 && (
          <div className="text-center">
            <h2 className="text-lg mb-4">Form Completed!</h2>
            <p>Thank you for your submission.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
