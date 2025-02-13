import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { SEARCH_ISSUES } from '../api/queries';
import { DEFAULT_REPO } from '../constants/constants';
import React from 'react';

export const usePagination = (searchTerm: string, issuesPerPage: number) => {
  const [cursorStack, setCursorStack] = useState<string[]>([]);
  const currentCursor = cursorStack[cursorStack.length - 1] || null;

  const fullQuery = `repo:${DEFAULT_REPO} is:issue ${searchTerm}`;

  const { data, loading, error, fetchMore } = useQuery(SEARCH_ISSUES, {
    variables: {
      query: fullQuery,
      first: issuesPerPage,
      after: currentCursor,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleNext = async () => {
    if (!data?.search.pageInfo.hasNextPage) return;

    await fetchMore({
      variables: {
        after: data.search.pageInfo.endCursor,
      },
    });

    setCursorStack((prev) => [...prev, data.search.pageInfo.endCursor]);
  };

  const handlePrevious = async () => {
    if (cursorStack.length === 0) return;

    setCursorStack((prev) => prev.slice(0, -1));

    const previousCursor =
      cursorStack.length > 1 ? cursorStack[cursorStack.length - 2] : null;

    await fetchMore({
      variables: {
        after: previousCursor,
      },
    });
  };

  React.useEffect(() => {
    setCursorStack([]);
  }, [searchTerm]);

  return {
    issues: data?.search.edges || [],
    loading,
    error,
    handleNext,
    handlePrevious,
    hasNextPage: data?.search.pageInfo.hasNextPage ?? false,
    hasPreviousPage: cursorStack.length > 0,
  };
};
