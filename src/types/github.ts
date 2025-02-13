export interface IssueComment {
  node: {
    id: string;
    body: string;
    author: {
      login: string;
    };
  };
}

export interface Issue {
  id: string;
  title: string;
  state: string;
  body: string;
  url: string;
  createdAt: string;
  author: {
    login: string;
  };
  comments: {
    totalCount: number;
    edges: IssueComment[];
  };
}

export interface SearchEdge {
  node: Issue;
}
