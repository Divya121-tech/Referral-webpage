import React, { useState } from 'react';

function Modal({onSubmit }) {
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: '' }); // Clear error on change

    switch (name) {
      case 'referrerEmail':
        setReferrerEmail(value);
        break;
      case 'refereeEmail':
        setRefereeEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ referrerEmail, refereeEmail }); // Pass form data to parent
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white px-8 py-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="referrerEmail" className="block mb-2 text-sm font-medium">
              Your Email Address
            </label>
            <input
              type="email"
              id="referrerEmail"
              name="referrerEmail"
              onChange={handleChange}></input>
               <input
              type="name"
              id="referrerName"
              name="referrerName"
              placeholder='Enter referrer name'
              onChange={handleChange}></input>
              </div>
        </form>
        </div>
    </div>
  )
};
export default Modal;
              
