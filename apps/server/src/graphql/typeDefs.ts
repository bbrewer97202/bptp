import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Region {
    id: ID
    name: String
  }

  type Trip {
    description: String
    length: Int
    created: String
  }

  type Query {
    trips: [Trip]
    regions: [Region]
  }

`;

export default typeDefs;
