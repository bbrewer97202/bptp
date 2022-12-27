import { graphQLQuery } from './graphql.services';

export const getAllRegions = async () => {
  const query = `
    query {
      regions {
        name
        id
      }
    }
  `;
  return graphQLQuery({ query });
};
