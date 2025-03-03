import React, { useState, useEffect } from 'react';
import './SocialMediaGraphs.css'; // You can create this for styling

function SocialMediaGraphs() {
  const [showGraphIndex, setShowGraphIndex] = useState(0);

  const graphs = [
    { src: process.env.PUBLIC_URL + '/retweet.png', alt: "Accumulative 'Likes' over years on Twitter" },
    { src: process.env.PUBLIC_URL + '/countryplot.png', alt: "Retweets" },
    { src: process.env.PUBLIC_URL + '/countrybar.png', alt: "Countries" },
    { src: process.env.PUBLIC_URL + '/platform.png', alt: "Platform" },
    { src: process.env.PUBLIC_URL + '/sentiments.png', alt: "Sentiments" }
  ];

  useEffect(() => {
    let graphTimer;

    if (showGraphIndex < graphs.length) {
      graphTimer = setTimeout(() => {
        setShowGraphIndex(showGraphIndex + 1); // Show next graph
      }, 2000); // 2-second interval
    }

    return () => {
      clearTimeout(graphTimer);
    };
  }, [showGraphIndex, graphs.length]);

  return (
    <div className="graphs-container">
      <h1 className="graph-heading">
        Social Media <span className="purple-text">Sentiment Analysis</span>
      </h1>

      <div className="grid-container">
        {graphs.slice(0, showGraphIndex).map((graph, index) => (
          <div className="graph" key={index}>
            <h2>{graph.alt}</h2>
            <img src={graph.src} alt={graph.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaGraphs;