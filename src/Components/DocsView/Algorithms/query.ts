import gql from 'graphql-tag';

export const PROBLEMS_QUERY = gql`
  query Problems {
    problems {
      id
      title
      language
      author
      difficulty
      description
      example
      snippet
      testCase
    }
  }
`;