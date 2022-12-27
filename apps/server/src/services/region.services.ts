import { getClient } from '../prisma.js';

const prisma = getClient();

/**
 * get all regions ordered by name
 */
export const getRegions = async () =>
  prisma.region.findMany({ orderBy: [{ name: 'asc' }] });
