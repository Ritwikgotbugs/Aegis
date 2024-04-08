import React from 'react';

const TSnippet = ({ topics, openPopup }) => {
  return (
    <div className="topic-snippet">
      {topics.map(topic => (
        <div key={topic.title} className="tile" onClick={() => openPopup(topic.title, topic.description)}>
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TSnippet;
