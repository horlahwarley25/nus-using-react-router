import React from "react";

const LoadingSpinner = () => (
  <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
      <p className="text-indigo-600 font-semibold text-lg">Loading...</p>
    </div>
  </div>
);

export default LoadingSpinner;