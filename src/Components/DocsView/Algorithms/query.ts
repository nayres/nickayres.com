import gql from 'graphql-tag';

export const PROBLEMS_QUERY = gql`
  query Problems {
    problems {
      id
      title
      author
      language
      difficulty
      documentation{
        description
        example
        tags
      }
      code{
        snippet
        testCase {
          functionCall
          expectedResult
        }
        children{
          problemID
        }
      }
    }
  }
`;