import { request, gql } from 'graphql-request'

const endpoint = `${process.env.SERVER_URL}/api/graphql`;

// request(endpoint, query).then((data) => console.log(data))

interface queryParams {
  query: string
};

// export const gql = () => GQL;

export const graphQLQuery = async ({ query }: queryParams) => {
  // TODO add gql
  console.log('////graphQLQuery: ', query);
  const response = await request(endpoint, gql`${query}`);
  console.log('////graphQLQuery response: ', response);
  return response;
}
