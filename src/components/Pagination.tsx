import React from 'react';

type PaginationProps = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNext: () => void;
  onPrevious: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  hasNextPage,
  hasPreviousPage,
  onNext,
  onPrevious,
}) => {
  const classButtons =
    'px-4 min-w-32 py-2 bg-gray-100 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <nav aria-label="Pagination" className="flex justify-center mt-6 space-x-4">
      <button
        className={classButtons}
        disabled={!hasPreviousPage}
        onClick={onPrevious}
        aria-label="Previous page"
      >
        Previous
      </button>

      <button
        className={classButtons}
        disabled={!hasNextPage}
        onClick={onNext}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
