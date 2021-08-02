import express, { Application, Request, Response } from 'express';

export default ({ app }: { app: Application }) => {
  /**
   * Health Check Endpoints
   */
  app.get('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });
  app.head('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });
}
