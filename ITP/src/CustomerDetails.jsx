import React, { useState } from 'react';
import './CSS/CustomerDetails.css';

const CustomerDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    address: '',
    age: '',
    nicPassport: '',
    telNo: '',
    email: '',
    confirmationEmail: '',
    breakfastIncluded: false,
    dailyCleaning: false,
  });

  const [errors, setErrors] = useState({
    age: '',
    telNo: '',
    confirmationEmail: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear errors when the user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { age: '', telNo: '', confirmationEmail: '' };

    // Age Validation
    if (formData.age < 18) {
      newErrors.age = 'You must be at least 18 years old to book a room.';
      isValid = false;
    }

    // Phone Number Validation
    if (!/^\d{10}$/.test(formData.telNo)) {
      newErrors.telNo = 'Phone number must be exactly 10 digits.';
      isValid = false;
    }

    // Email Confirmation Validation
    if (formData.email !== formData.confirmationEmail) {
      newErrors.confirmationEmail = 'Emails do not match.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted successfully:', formData);
      alert('Room booked successfully!');
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div className="customer-details-container">
      <div className="customer-details">
        <h2>Enter your details</h2>
        <div className="form-layout">
          <form onSubmit={handleSubmit} className="form-inputs">
            <label>
              First name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="1"
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </label>

            <label>
              NIC/Passport:
              <input
                type="text"
                name="nicPassport"
                value={formData.nicPassport}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Tel No:
              <input
                type="tel"
                name="telNo"
                value={formData.telNo}
                onChange={handleChange}
                required
                maxLength="10" // Restrict input to 10 characters
              />
              {errors.telNo && <span className="error">{errors.telNo}</span>}
            </label>

            <label>
              Email address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Confirmation email sent to this address:
              <input
                type="email"
                name="confirmationEmail"
                value={formData.confirmationEmail}
                onChange={handleChange}
                required
              />
              {errors.confirmationEmail && (
                <span className="error">{errors.confirmationEmail}</span>
              )}
            </label>

            <button type="submit">SUBMIT</button>
          </form>

          <div className="form-side-text">
            <p>Breakfast included in the price</p>
            <p>Daily cleaning available on request before 10am</p>
            <p>No smoking in room and bathroom</p>
            <p>No visitors after 10pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;