import React from 'react';

interface SkeletonProps {
  count?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ count = 1 }) => {
  const SkeletonItem = () => (
    <div className="animate-pulse flex items-center space-x-4 p-4 border rounded-lg shadow-md bg-white">
      <div className="flex-1 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );

  if (count === 1) return <SkeletonItem />;

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

export default Skeleton;
