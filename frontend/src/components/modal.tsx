import React from "react";

const Modal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50">
        <div className="bg-grey p-8 rounded shadow-lg text-center">
          <h1 className="mb-4 text-blue font-bold capitalize text-3xl ">UPCOMING EVENT</h1>
          <img src="/images/newevent.jpg" alt="Upcoming Event" className="mb-4 w-25" />
          <button onClick={onClose} className="mt-4 bg-blue text-white py-2 px-4 rounded">Close</button>
        </div>
      </div>
    );
  };

  export default Modal;