import React, { useState } from 'react';
import Speedometer from '../components/speedometer'; 
import '../styles/homepage.css';
import '../styles/speedometer.css';

const Popup = ({ title, description, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export function TopicSnippet ({ topics }){
  const [popupInfo, setPopupInfo] = useState(null);

  const openPopup = (title, description) => {
    setPopupInfo({ title, description });
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  return (
    <div className="topic-snippet-container">
      <h2>Topics</h2>
      <div className="topic-list">
        {topics.map((topic, index) => (
          <div key={index} className="topic-item">
            <div className="topic-content">
              <div className="speedometer-wrapper">
                {}
                <Speedometer percentage={topic.percentage} />
              </div>
              <h3 className="topic-title" onClick={() => openPopup(topic.title, topic.description)}>
                {topic.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {popupInfo && (
        <Popup
          title={popupInfo.title}
          description={popupInfo.description}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default TopicSnippet;
