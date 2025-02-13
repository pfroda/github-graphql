import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ISSUE } from '../api/queries';
import ErrorState from '../components/Error';
import CardSkeleton from '../components/CardSkeleton';
import { Issue } from '../types/github';

const IssueDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<{ node: Issue }>(GET_ISSUE, {
    variables: { id },
    skip: !id,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto min-h-screen p-4">
        <div className="h-full p-6 bg-white rounded-lg shadow-md space-y-4 break-words">
          {error ? (
            <ErrorState message={error.message} onRetry={() => navigate(-1)} />
          ) : loading ? (
            <CardSkeleton count={1} />
          ) : !data?.node ? (
            <ErrorState
              message="Issue Not Found"
              onRetry={() => navigate(-1)}
            />
          ) : (
            <>
              <button
                onClick={() => navigate(-1)}
                className="text-blue-600 rounded-lg hover:text-black"
              >
                ← Back
              </button>
              <h2 className="text-xl font-semibold text-gray-900">
                {data.node.title}
              </h2>
              <p className="text-gray-700">{data.node.body}</p>
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-800">Comments:</h3>
                <div className="space-y-3">
                  {data.node.comments.edges.length > 0 ? (
                    data.node.comments.edges.map((edge, index) => (
                      <div
                        key={edge.node.id || `comment-${index}`}
                        className="p-3 bg-gray-50 rounded-lg shadow-sm"
                      >
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">
                            {edge.node.author.login}:
                          </span>{' '}
                          {edge.node.body}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">No comments yet.</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
