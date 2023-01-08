import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import { createGraphQLServer } from '../graphql/graphQLServer.js';

export const initializeServer = async () => {
  const PORT = process.env.PORT || 3000;
  const isProduction = process.env.NODE_ENV === 'production';
  const app = express();
  app.use(morgan('dev'));
  app.use(
    helmet({
      contentSecurityPolicy: isProduction ? undefined : false,
      crossOriginEmbedderPolicy: isProduction ? undefined : false,
    })
  );
  app.use(compression());

  app.get('/heartbeat', async (req, res) => {
    return res.json({ hello: 'world' })
  });

  const graphQLServer = await createGraphQLServer();
  graphQLServer.applyMiddleware({ app, path: '/api/graphql' });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  return app;
};
