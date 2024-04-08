import React from 'react';
import '../styles/popup.css';

const Popup = ({ title, description, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="popup-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;


