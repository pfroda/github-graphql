import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import IssueCard from '../components/Card';
import Pagination from '../components/Pagination';
import ErrorState from '../components/Error';
import CardSkeleton from '../components/CardSkeleton';
import { usePagination } from '../hooks/usePagination';
import { ISSUES_PER_PAGE } from '../constants/constants';
import { SearchEdge } from '../types/github';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    issues,
    loading,
    error,
    handleNext,
    handlePrevious,
    hasNextPage,
    hasPreviousPage,
  } = usePagination(searchTerm, ISSUES_PER_PAGE);

  if (error) {
    return (
      <ErrorState
        message={error.message}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <SearchBar onSearch={setSearchTerm} />

      <div className="space-y-4 pt-4">
        {loading ? (
          <CardSkeleton count={ISSUES_PER_PAGE} />
        ) : issues.length > 0 ? (
          <>
            {issues.map(({ node }: SearchEdge) => (
              <IssueCard key={node.id} issue={node} />
            ))}
          </>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No issues found. Search something else.
          </div>
        )}
      </div>

      {issues.length > 0 && (
        <div className={`mt-4 ${loading ? 'opacity-50' : ''}`}>
          <Pagination
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
