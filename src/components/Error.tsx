import React from 'react';

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({
  message = 'Something went wrong',
  onRetry,
}) => (
  <div className="flex flex-col items-center justify-center p-6 text-center">
    <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
    <p className="text-gray-600 mb-4">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Try Again
      </button>
    )}
    <p className="mt-4 text-sm text-gray-500">
      If the error persists, please refresh the page or try again later.
    </p>
  </div>
);

export default Error;
