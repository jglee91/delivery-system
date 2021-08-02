import express from 'express';

class healthCheckRouter {
  constructor(application: express.Application) {
    application.get('/', (req: express.Request, res: express.Response) => {
      res.send('API server is alive.');
    });
  }
}

export default healthCheckRouter;
