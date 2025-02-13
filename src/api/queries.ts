import { gql } from '@apollo/client';

export const SEARCH_ISSUES = gql`
  query SearchIssues($query: String!, $after: String) {
    search(query: $query, type: ISSUE, first: 10, after: $after) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Issue {
            id
            title
            state
            body
            createdAt
            author {
              login
            }
            comments {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const GET_ISSUE = gql`
  query GetIssue($id: ID!) {
    node(id: $id) {
      ... on Issue {
        title
        body
        comments(first: 10) {
          edges {
            node {
              body
              author {
                login
              }
            }
          }
        }
      }
    }
  }
`;
