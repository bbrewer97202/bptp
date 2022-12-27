import { getRegions } from '../services/region.services.js';

const resolvers = {
  Query: {
    trips: () => [{ description: 'desscription', length: 10, created: null }],
    regions: () => {
      return getRegions()
    }
  },
}

export default resolvers;