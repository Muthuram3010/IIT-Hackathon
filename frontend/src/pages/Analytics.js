import React from 'react';
import './analytics.css';

const Analytics = () => {
  const hasData = false; // Simulating no data for demonstration

  return (
    <div className="analytics-container">
      <h2 className="analytics-heading">Analytics</h2>
      {hasData ? (
        <div className="analytics-data">
          <pre>
            {/* Replace with your analytics data */}
            {"{ \"key\": \"value\" }"}
          </pre>
        </div>
      ) : (
        <div className="analytics-no-data">No analytics data available.</div>
      )}
    </div>
  );
};

export default Analytics;
