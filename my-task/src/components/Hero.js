import React from 'react';

function Hero({ onOpenModal }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-white mb-8">Refer a Friend & Earn Rewards</h1>
        <button
          type="button"
          className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none"
          onClick={onOpenModal}
        >
          Refer Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
