import React from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../types/github';

interface CardProps {
  issue: Issue;
}

const Card: React.FC<CardProps> = ({ issue }) => {
  const stateColorClass =
    issue.state.toLowerCase() === 'open' ? 'bg-green-200' : 'bg-purple-200';

  return (
    <Link
      to={`/issue/${issue.id}`}
      className="block group"
      aria-label={`View issue: ${issue.title}`}
    >
      <div className="flex items-center space-x-4x p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-200">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black hover:text-blue-600">
            {issue.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 mb-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs ${stateColorClass}`}
            >
              {issue.state}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs bg-gray-100">
              {issue.comments.totalCount} comments
            </span>
          </div>
          <p className="text-gray-400 text-sm">{issue.author.login}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
