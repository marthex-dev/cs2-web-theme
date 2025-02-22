import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader">
      <div className="loader-content">
        <i className="fas fa-crosshairs loader-icon"></i>
        <div className="loader-progress">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader; 