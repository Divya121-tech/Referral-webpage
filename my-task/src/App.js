import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file (optional)
import Hero from './components/Hero';
import Modal from './components/Modal';
 
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Form validation logic (replace with your desired validation)
  const validateForm = (values) => {
    let isValid = true;
    const errors = {};

    if (!values.referrerEmail) {
      isValid = false;
      errors.referrerEmail = 'Please enter your email address';
    }

    if (!values.refereeEmail) {
      isValid = false;
      errors.refereeEmail = 'Please enter your friend\'s email address';
    }

    return { isValid, errors };
  };

  const handleSubmit = (event) => {
   
    
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    const { isValid, errors } = validateForm(values);

    if (!isValid) {
      // Display error messages
      console.error(errors);
      return;
    }

    // Submit the form data (replace with your submission logic)
    console.log('Form submitted:', values);
    handleCloseModal();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Hero onOpenModal={handleOpenModal} />

      {isModalOpen && (
        <Modal onClose={handleCloseModal} onSubmit={handleSubmit} />
        
      )}
      
    </div>
  );
}

export default App;
