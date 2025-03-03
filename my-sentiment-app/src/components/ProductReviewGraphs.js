import React, { useState, useEffect } from 'react';
import './ProductReviewGraphs.css'; // You can create this for styling

function ProductReviewGraphs() {
  const [showGraphIndex, setShowGraphIndex] = useState(0);

  const graphs = [
    { src: process.env.PUBLIC_URL + '/rating.png', alt: "Rating Distribution" },
    { src: process.env.PUBLIC_URL + '/ratingper.png', alt: "Rating Percentage" },
    { src: process.env.PUBLIC_URL + '/feedbackdist.png', alt: "Feed Back Distribution" },
    { src: process.env.PUBLIC_URL + '/feedbackper.png', alt: "Feed Back Percentage" },
    { src: process.env.PUBLIC_URL + '/varidistcount.png', alt: "Variation Distribution Count" },
    { src: process.env.PUBLIC_URL + '/meanrate.png', alt: "Mean Rate According to Variation" },
    { src: process.env.PUBLIC_URL + '/distlength.png', alt: "Distribution of length of review if feedback = 0" },
    { src: process.env.PUBLIC_URL + '/distlength1.png', alt: "Distribution of length of review if feedback = 1" },
    { src: process.env.PUBLIC_URL + '/reviewlen.png', alt: "Review length wise mean ratings" },
    { src: process.env.PUBLIC_URL + '/allreview.png', alt: "Wordcloud for all reviews" },
    { src: process.env.PUBLIC_URL + '/negreview.png', alt: "Wordcloud for negative reviews" },
    { src: process.env.PUBLIC_URL + '/posreview.png', alt: "Wordcloud for positive reviews" },
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
        Product Review <span className="purple-text">Sentiment Analysis</span>
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

export default ProductReviewGraphs;